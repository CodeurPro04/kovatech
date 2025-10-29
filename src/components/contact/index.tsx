import CtaHomeFour from "../homes/home-4/CtaHomeFour"; 
import ContactArea from "./ContactArea";
import ClientsHomeTwo from "../homes/home-2/ClientsHomeTwo";
import Wrapper from "../../layouts/Wrapper";
import HeaderFour from "../../layouts/headers/HeaderFour";
import Breacrumb from "../../common/Breacrumb";
import FooterFour from "../../layouts/footers/FooterFour";


const Contact = () => {
  return (
    <Wrapper>
      <div className="boxed_wrapper">
        <HeaderFour />
        <Breacrumb title="Contactez-nous" subtitle="Contact" />
        <ContactArea />
        <ClientsHomeTwo />
        <CtaHomeFour />
        <FooterFour />
      </div>      
    </Wrapper>
  );
};

export default Contact;