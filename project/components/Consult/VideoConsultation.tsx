// VideoConsultation.tsx
"use client";
import React, { useEffect, useRef, useState } from "react";
import firebase from "firebase/app";
import "firebase/firestore";
import appconfig from "@/config/firebaseConfig";

import "firebase/compat/firestore";
import { getApps, initializeApp } from "firebase/app";

import "./style.css";

const VideoConsultation: React.FC = () => {
  const webcamVideoRef = useRef<HTMLVideoElement | null>(null);
  const remoteVideoRef = useRef<HTMLVideoElement | null>(null);
  const callInputRef = useRef<HTMLInputElement | null>(null);

  const [localStream, setLocalStream] = useState<MediaStream | null>(null);
  const [remoteStream, setRemoteStream] = useState<MediaStream | null>(null);
  const [pc] = useState(new RTCPeerConnection());
  const [callId, setCallId] = useState("1000");

  useEffect(() => {
    if (getApps().length < 1) {
      initializeApp(appconfig);
      // Initialize other firebase products here
    }

    const firestore = firebase.firestore();

    const servers = {
      iceServers: [
        {
          urls: [
            "stun:stun1.l.google.com:19302",
            "stun:stun2.l.google.com:19302",
          ],
        },
      ],
      iceCandidatePoolSize: 10,
    };

    const setupMediaSources = async () => {
      const stream = await navigator.mediaDevices.getUserMedia({
        video: true,
        audio: true,
      });
      setLocalStream(stream);

      const remoteStreamObj = new MediaStream();
      setRemoteStream(remoteStreamObj);

      stream.getTracks().forEach((track) => {
        pc.addTrack(track, stream);
      });

      pc.ontrack = (event) => {
        event.streams[0].getTracks().forEach((track) => {
          remoteStreamObj.addTrack(track);
        });
      };

      if (webcamVideoRef.current) {
        webcamVideoRef.current.srcObject = stream;
      }

      if (remoteVideoRef.current) {
        remoteVideoRef.current.srcObject = remoteStreamObj;
      }
    };

    const createOffer = async () => {
      await firestore.collection("calls").doc(callId).delete();
      const callDoc = firestore.collection("calls").doc(callId);
      const offerCandidates = callDoc.collection("offerCandidates");
      const answerCandidates = callDoc.collection("answerCandidates");

      if (callInputRef.current) {
        callInputRef.current.value = callDoc.id;
      }

      pc.onicecandidate = (event) => {
        event.candidate && offerCandidates.add(event.candidate.toJSON());
      };

      const offerDescription = await pc.createOffer();
      await pc.setLocalDescription(offerDescription);

      const offer = {
        sdp: offerDescription.sdp,
        type: offerDescription.type,
      };

      await callDoc.set({ offer });
      // rest of your code
    };

    const answerCall = async () => {
      // similar changes as in createOffer
    };

    setupMediaSources();

    // Cleanup
    return () => {
      pc.close();
    };
  }, [callId, pc]);

  return (
    <div>
      <h2>Online Consultation</h2>
      <div className="videos">
        <span>
          <h3>Your Stream</h3>
          <video ref={webcamVideoRef} autoPlay playsInline muted></video>
        </span>
        <span>
          <h3>Participant Stream</h3>
          <video ref={remoteVideoRef} autoPlay playsInline></video>
        </span>
      </div>
      {/* Add other HTML elements and buttons as needed */}
    </div>
  );
};

export default VideoConsultation;
