import Breacrumb from '../../common/Breacrumb';
import FooterFour from '../../layouts/footers/FooterFour';
import HeaderFour from '../../layouts/headers/HeaderFour';
import Wrapper from '../../layouts/Wrapper';
import CtaHomeFour from '../homes/home-4/CtaHomeFour'; 
import TeamArea from './TeamArea';

const Team = () => {
  return (
    <Wrapper>
      <div className="boxed_wrapper">
        <HeaderFour />
        <Breacrumb title="Nos membres créatifs" subtitle="Notre équipe" />
        <TeamArea />
        <CtaHomeFour />
        <FooterFour />
      </div>
    </Wrapper>
  );
};

export default Team;