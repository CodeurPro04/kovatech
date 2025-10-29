import { Link } from "react-router-dom";


const TeamHomeFour = ({style_2} : any) => {
  return (
    <>
      <section className="team-section">
        {style_2 ? null :
        <div className="pattern" style={{ backgroundImage: `url(/assets/images/shape/shape-19.png)` }}></div>
        }
        <div className="container">
          {style_2 ? <div className="title-text">Voici quelques membres de l'équipe :</div>
          :
          <div className="main-title text-center">
            <h3>Notre équipe</h3>
            <h2>Découvrez les membres de <br /><span className="gradient-color">l'agence Kovatech</span></h2>
          </div>
          
          }
          <div className="row">
            <div className="col-lg-3 col-md-6 col-sm-12 block-column">
              <div className="team-block-one">
                
                <div className="team-image">
                  <figure className="image"><img src="assets/images/shape/pdg.JPG" alt="" /></figure>
                </div>
                <div className="team-content">
                  <div className="shape" style={{ backgroundImage: `url(/assets/images/shape/shape-17.png)` }}></div>
                  <h3><Link to="/team-details">KONATE Cedrick</Link></h3>
                  <span className="designation">PDG/Developpeur</span>
                  <div className="team-social">
                    <div className="icon-box"><i className="icon-14"></i></div>
                    <ul className="social-links">
                      <li><Link to="/team-details"><i className="icon-15"></i></Link></li>
                      <li><Link to="/team-details"><i className="icon-16"></i></Link></li>
                      <li><Link to="/team-details"><i className="icon-17"></i></Link></li>
                      <li><Link to="/team-details"><i className="icon-18"></i></Link></li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 col-sm-12 block-column">
              <div className="team-block-one">
                <div className="team-image">
                  <figure className="image"><img src="assets/images/resource/team-2.jpg" alt="" /></figure>
                </div>
                <div className="team-content">
                  <div className="shape" style={{ backgroundImage: `url(/assets/images/shape/shape-17.png)` }}></div>
                  <h3><Link to="/team-details">Osma Sma</Link></h3>
                  <span className="designation">Designer UI/UX</span>
                  <div className="team-social">
                    <div className="icon-box"><i className="icon-14"></i></div>
                    <ul className="social-links">
                      <li><Link to="/team-details"><i className="icon-15"></i></Link></li>
                      <li><Link to="/team-details"><i className="icon-16"></i></Link></li>
                      <li><Link to="/team-details"><i className="icon-17"></i></Link></li>
                      <li><Link to="/team-details"><i className="icon-18"></i></Link></li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 col-sm-12 block-column">
              <div className="team-block-one">
                <div className="team-image">
                  <figure className="image"><img src="assets/images/resource/team-3.jpg" alt="" /></figure>
                </div>
                <div className="team-content">
                  <div className="shape" style={{ backgroundImage: `url(/assets/images/shape/shape-17.png)` }}></div>
                  <h3><Link to="/team-details">Dianne Russell</Link></h3>
                  <span className="designation">Assistante médicale</span>
                  <div className="team-social">
                    <div className="icon-box"><i className="icon-14"></i></div>
                    <ul className="social-links">
                      <li><Link to="/team-details"><i className="icon-15"></i></Link></li>
                      <li><Link to="/team-details"><i className="icon-16"></i></Link></li>
                      <li><Link to="/team-details"><i className="icon-17"></i></Link></li>
                      <li><Link to="/team-details"><i className="icon-18"></i></Link></li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 col-sm-12 block-column">
              <div className="team-block-one">
                <div className="team-image">
                  <figure className="image"><img src="assets/images/resource/team-4.jpg" alt="" /></figure>
                </div>
                <div className="team-content">
                  <div className="shape" style={{ backgroundImage: `url(/assets/images/shape/shape-17.png)` }}></div>
                  <h3><Link to="/team-details">Curtney Henry</Link></h3>
                  <span className="designation">Web Designer</span>
                  <div className="team-social">
                    <div className="icon-box"><i className="icon-14"></i></div>
                    <ul className="social-links">
                      <li><Link to="/team-details"><i className="icon-15"></i></Link></li>
                      <li><Link to="/team-details"><i className="icon-16"></i></Link></li>
                      <li><Link to="/team-details"><i className="icon-17"></i></Link></li>
                      <li><Link to="/team-details"><i className="icon-18"></i></Link></li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default TeamHomeFour;