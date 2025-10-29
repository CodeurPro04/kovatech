import Breacrumb from "../../common/Breacrumb";
import FooterFour from "../../layouts/footers/FooterFour";
import HeaderFour from "../../layouts/headers/HeaderFour";
import Wrapper from "../../layouts/Wrapper";
import CtaHomeFour from "../homes/home-4/CtaHomeFour"; 
import BlogDetailsArea from "./BlogDetailsArea";

const BlogDetails = () => {
  return (
    <Wrapper>
      <div className="boxed_wrapper">
        <HeaderFour />
        <Breacrumb title="Détail du blog" subtitle="Détail du blog" />
        <BlogDetailsArea />
        <CtaHomeFour />
        <FooterFour />
      </div>
    </Wrapper>
  );
};

export default BlogDetails;