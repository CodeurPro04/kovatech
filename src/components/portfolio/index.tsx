import Breacrumb from '../../common/Breacrumb';
import FooterFour from '../../layouts/footers/FooterFour';
import HeaderFour from '../../layouts/headers/HeaderFour';
import Wrapper from '../../layouts/Wrapper';
import CtaHomeFour from '../homes/home-4/CtaHomeFour'; 
import PortfolioArea from './PortfolioArea';
import PortfolioSlider from './PortfolioSlider';

const Portfolio = () => {
  return (
    <Wrapper>
      <div className="boxed_wrapper">
        <HeaderFour />
        <Breacrumb title="Réalisation Kovatech" subtitle="Notre réalisation" />
        <PortfolioArea />
        <PortfolioSlider />
        <CtaHomeFour />
        <FooterFour />
      </div>
    </Wrapper>
  );
};

export default Portfolio;