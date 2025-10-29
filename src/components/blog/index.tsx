import Breacrumb from '../../common/Breacrumb';
import FooterFour from '../../layouts/footers/FooterFour';
import HeaderFour from '../../layouts/headers/HeaderFour';
import Wrapper from '../../layouts/Wrapper';
import CtaHomeFour from '../homes/home-4/CtaHomeFour'; 
import BlogArea from './BlogArea';

const Blog = () => {
  return (
    <Wrapper>
      <div className='boxed_wrapper'>
        <HeaderFour />
        <Breacrumb title="Notre blog" subtitle="Notre blog" />
        <BlogArea />
        <CtaHomeFour />
        <FooterFour />
      </div>      
    </Wrapper>
  );
};

export default Blog;