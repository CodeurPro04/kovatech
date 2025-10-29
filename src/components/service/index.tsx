import CtaHomeFour from "../homes/home-4/CtaHomeFour"; 
import ServiceHomeFour from "../homes/home-4/ServiceHomeFour";
import ProcessHomeFour from "../homes/home-1/ProcessHomeFour";
import TestimonialHomeFour from "../homes/home-4/TestimonialHomeFour";
import Wrapper from "../../layouts/Wrapper";
import HeaderFour from "../../layouts/headers/HeaderFour";
import Breacrumb from "../../common/Breacrumb";
import FooterFour from "../../layouts/footers/FooterFour";

const Service = () => {
  return (
    <Wrapper>
      <div className="boxed_wrapper">
        <HeaderFour />
        <Breacrumb title="Services d'agence digitale" subtitle="Nos services" />
        <ServiceHomeFour />
        <ProcessHomeFour />
        <TestimonialHomeFour />
        <CtaHomeFour />
        <FooterFour />
      </div>
    </Wrapper>
  );
};

export default Service;