
import React from "react";
import Breadcrumb from "@/components/Common/Breadcrumb";
import Forumcard from "@/components/Forumcard"; 

const Consult: React.FC = () => {
  return (
    <>
      <Breadcrumb
        pageName="Video Consultation for Recovery"
        description="Complete Anonymity in Therapy"
      />
      <div className="mb-9 mt-9">
        <Forumcard></Forumcard>
        <Forumcard></Forumcard>
        <Forumcard></Forumcard>
      </div>
    </>
  );
};

export default Consult;
