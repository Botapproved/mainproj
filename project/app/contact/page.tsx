import Breadcrumb from "@/components/Common/Breadcrumb";
import Contact from "@/components/Contact";

const ContactPage = () => {
  return (
    <>
      <Breadcrumb
        pageName="Contact Page"
        description="Happy to help with any queries."
      />

      <Contact />
    </>
  );
};

export default ContactPage;
