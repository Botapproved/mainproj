import Breadcrumb from "@/components/Common/Breadcrumb";
import Report from "@/components/Report";


const ReportPage = () => {
  return (
    <>
      <Breadcrumb
        pageName="Anonymous Crime Report Submission"
        description="Complete Anonymity and Privacy"
      />

      <Report />
    </>
  );
};

export default ReportPage;
