import Breacrumb from "../../common/Breacrumb";
import FooterFour from "../../layouts/footers/FooterFour";
import HeaderFour from "../../layouts/headers/HeaderFour";
import Wrapper from "../../layouts/Wrapper";
import CtaHomeFour from "../homes/home-4/CtaHomeFour"; 
import FaqArea from "./FaqArea";

const Faq = () => {
  return (
    <Wrapper>
      <div className="boxed_wrapper">
        <HeaderFour />
        <Breacrumb title="Questions fréquentes" subtitle="FAQ" />
        <FaqArea />
        <CtaHomeFour />
        <FooterFour />
      </div>
    </Wrapper>
  );
};

export default Faq;