"use client"
import React from "react";
import Breadcrumb from "@/components/Common/Breadcrumb";
import Forumcard from "@/components/Forumcard"; 
import axios from "@/config/axiosConfig";
import { useState, useEffect } from "react";

const Consult: React.FC = () => {
  const [forumData, setForumData] = useState([]);

  const fetchForumData = async () => {
    try {
      const response = await axios.get("/get_forum_data");
      setForumData(response.data.forums);
    } catch (error) {
      console.error("Error fetching forum data:", error);
    }
  };

  useEffect(() => {
    fetchForumData();
  }, []);

  console.log(forumData);

  return (
    <>
      <Breadcrumb
        pageName="Forum: Find All Approved Tip-offs"
        description="Complete Anonymity in Reporting"
      />
      <div className="mb-9 mt-9">
        {forumData.map((forumItem) => (
          <Forumcard key={forumItem.id} data={forumItem} />
        ))}
      </div>
    </>
  );
};

export default Consult;
