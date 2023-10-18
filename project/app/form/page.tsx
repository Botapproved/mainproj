import Breadcrumb from "@/components/Common/Breadcrumb";
import MultiStageForm from "@/components/Report";
import Form from "@/components/Form";

const ContactPage = () => {
  return (
    <>
      <Breadcrumb
        pageName="Anonymous Crime Report Submission"
        description="Complete Anonymity and Privacy"
      />

      <MultiStageForm />
    </>
  );
};

export default ContactPage;
