"use client";
import React, { useState, useEffect } from "react";
import Breadcrumb from "@/components/Common/Breadcrumb";
import { useRouter } from "next/navigation";
import app from "@/config/firebaseConfig";
import {
  getStorage,
  uploadBytesResumable,
  ref,
  getDownloadURL,
} from "@firebase/storage";
import { reportSchema } from "@/utils/transformSchema";
import { formatObj } from "@/utils/format";
import axios from "@/config/axiosConfig";

const storage = getStorage(app);

const Consult = () => {
  

  
  return (
    <>
      <Breadcrumb
        pageName="Video Consultation for Recovery"
        description="Complete Anonymity in Therapy"
      />
      <section id="contact" className="overflow-hidden py-16 md:py-20 lg:py-28">
        <div className="container flex h-full items-center justify-center">
          <div className="w-full lg:w-7/12 xl:w-8/12">
            <div
              className="wow fadeInUp mb-12 rounded-md bg-primary/[3%] px-8 py-11 dark:bg-dark sm:p-[55px] lg:mb-5 lg:px-8 xl:p-[55px]"
              data-wow-delay=".15s"
            >
              <h2 className="mb-3 text-2xl font-bold text-black dark:text-white sm:text-3xl lg:text-2xl xl:text-3xl">
                Report anonymously
              </h2>
              <p className="mb-12 text-base font-medium text-body-color">
                Admins will look into your tip-off and allot an incentive based
                on the report relevance
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Consult;
