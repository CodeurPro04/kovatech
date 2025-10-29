import { Link } from "react-router-dom";
import { useState } from "react";

const FooterFour = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalContent, setModalContent] = useState("");

  const openModal = (contentType) => {
    setModalContent(contentType);
    setIsModalOpen(true);
    document.body.style.overflow = "hidden";
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setModalContent("");
    document.body.style.overflow = "auto";
  };

  const renderModalContent = () => {
    switch (modalContent) {
      case "terms":
        return (
          <div className="modal-content-inner">
            <h2 className="modal-title">Conditions d'Utilisation</h2>
            <div className="modal-scroll-content">
              <div className="section">
                <h3>1. Acceptation des conditions</h3>
                <p>
                  En accédant et en utilisant les services de KovaTech, vous
                  acceptez d'être lié par les présentes conditions
                  d'utilisation. Ces conditions s'appliquent à tous les
                  visiteurs, utilisateurs et autres personnes qui accèdent ou
                  utilisent nos services.
                </p>
              </div>

              <div className="section">
                <h3>2. Services proposés</h3>
                <p>
                  KovaTech propose des services de développement digital
                  incluant :
                </p>
                <ul>
                  <li>Conception et développement de sites web</li>
                  <li>Applications mobiles et solutions logicielles</li>
                  <li>Stratégies digitales et consulting</li>
                  <li>Solutions sur mesure adaptées à vos besoins</li>
                </ul>
              </div>

              <div className="section">
                <h3>3. Propriété intellectuelle</h3>
                <p>
                  Tous les droits de propriété intellectuelle relatifs à nos
                  services, y compris mais sans s'y limiter, les logiciels,
                  designs, logos et contenus, sont la propriété exclusive de
                  KovaTech.
                </p>
              </div>

              <div className="section">
                <h3>4. Confidentialité</h3>
                <p>
                  Nous nous engageons à protéger la confidentialité de vos
                  informations. Toutes les données partagées dans le cadre de
                  nos collaborations sont traitées avec la plus stricte
                  confidentialité.
                </p>
              </div>

              <div className="section">
                <h3>5. Limitation de responsabilité</h3>
                <p>
                  KovaTech ne pourra être tenu responsable des dommages
                  indirects, spéciaux ou consécutifs résultant de l'utilisation
                  ou de l'impossibilité d'utiliser nos services.
                </p>
              </div>
            </div>
          </div>
        );

      case "privacy":
        return (
          <div className="modal-content-inner">
            <h2 className="modal-title">Politique de Confidentialité</h2>
            <div className="modal-scroll-content">
              <div className="section">
                <h3>1. Collecte des informations</h3>
                <p>
                  Nous collectons les informations que vous nous fournissez
                  directement lorsque vous :
                </p>
                <ul>
                  <li>Contactez notre agence pour une demande de devis</li>
                  <li>Utilisez nos services de développement</li>
                  <li>Vous abonnez à notre newsletter</li>
                  <li>Participez à nos événements ou consultations</li>
                </ul>
              </div>

              <div className="section">
                <h3>2. Utilisation des informations</h3>
                <p>Les informations collectées sont utilisées pour :</p>
                <ul>
                  <li>Répondre à vos demandes et fournir nos services</li>
                  <li>Améliorer la qualité de nos services digitaux</li>
                  <li>
                    Vous informer des mises à jour et nouvelles fonctionnalités
                  </li>
                  <li>Assurer la sécurité et l'intégrité de nos systèmes</li>
                </ul>
              </div>

              <div className="section">
                <h3>3. Protection des données</h3>
                <p>
                  Nous mettons en œuvre des mesures de sécurité techniques et
                  organisationnelles appropriées pour protéger vos informations
                  contre tout accès non autorisé, modification, divulgation ou
                  destruction.
                </p>
              </div>

              <div className="section">
                <h3>4. Partage des informations</h3>
                <p>
                  KovaTech ne vend, n'échange ni ne transfère vos informations
                  personnelles à des tiers, sauf dans le cadre nécessaire à
                  l'exécution de nos services ou lorsque requis par la loi.
                </p>
              </div>

              <div className="section">
                <h3>5. Vos droits</h3>
                <p>Vous avez le droit de :</p>
                <ul>
                  <li>Accéder à vos données personnelles</li>
                  <li>Rectifier les informations inexactes</li>
                  <li>Supprimer vos données personnelles</li>
                  <li>Vous opposer au traitement de vos données</li>
                </ul>
              </div>

              <div className="section">
                <h3>6. Contact</h3>
                <p>
                  Pour toute question concernant cette politique de
                  confidentialité, contactez-nous à :{" "}
                  <strong>contact@kovatech.ci</strong>
                </p>
              </div>
            </div>
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <>
      <footer className="main-footer">
        <div
          className="pattern"
          style={{ backgroundImage: `url(/assets/images/shape/shape-25.png)` }}
        ></div>
        <div className="container">
          <div className="widget-section">
            <div className="row">
              <div className="col-lg-5 col-md-12 col-sm-12 footer-column">
                <div className="small-column">
                  <div
                    className="shape"
                    style={{
                      backgroundImage: `url(/assets/images/shape/shape-26.png)`,
                    }}
                  ></div>
                  <figure className="footer-logo">
                    <a href="#">
                      <img
                        src="assets/images/logo7.png"
                        alt=""
                        style={{ filter: "brightness(0) invert(1)" }}
                      />
                    </a>
                  </figure>
                  <p>
                    Mais dans certaines circonstances, et en raison des
                    exigences du devoir ou des obligations professionnelles, il
                    arrive fréquemment que les plaisirs doivent être refusés.
                  </p>
                  <h6>Suivez-nous :</h6>
                  <ul className="social-links">
                    <li>
                      <a href="#">
                        <i className="icon-15"></i>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="icon-18"></i>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="icon-16"></i>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="icon-17"></i>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-lg-7 col-md-12 col-sm-12 footer-column">
                <div className="big-column">
                  <div
                    className="shape"
                    style={{
                      backgroundImage: `url(/assets/images/shape/shape-26.png)`,
                    }}
                  ></div>
                  <div className="row">
                    <div className="col-lg-4 col-md-6 col-sm-12 block-column">
                      <div className="footer-widget links-widget">
                        <div className="widget-title">
                          <h3>Entreprise</h3>
                        </div>
                        <div className="widget-content">
                          <ul className="links-list clearfix">
                            <li>
                              <Link to="/">Accueil</Link>
                            </li>
                            <li>
                              <Link to="/about">À propos</Link>
                            </li>
                            <li>
                              <Link to="/service">Nos services</Link>
                            </li>
                            <li>
                              <Link to="/portfolio">
                                Projets & Réalisations
                              </Link>
                            </li>
                            <li>
                              <Link to="/contact">Contact</Link>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-4 col-md-6 col-sm-12 block-column">
                      <div className="footer-widget links-widget">
                        <div className="widget-title">
                          <h3>Nos services</h3>
                        </div>
                        <div className="widget-content">
                          <ul className="links-list clearfix">
                            <li>conception de sites web</li>
                            <li>
                              développement d’applications mobiles et logiciels
                            </li>
                            <li>solutions sur mesure</li>
                            <li>stratégies digitales</li>
                            <li>Communication</li>
                          </ul>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-4 col-md-6 col-sm-12 block-column">
                      <div className="footer-widget contact-widget">
                        <div className="widget-title">
                          <h3>Contact</h3>
                        </div>
                        <div className="widget-content">
                          <ul className="info-list clearfix">
                            <li>
                              <i className="icon-19"></i>
                              <span>
                                Abidjan, Côte d’Ivoire Marcory – Rue F188
                              </span>
                            </li>
                            <li>
                              <i className="icon-20"></i>
                              <a href="mailto:contact@kovatech.ci">
                                contact@kovatech.ci
                              </a>
                            </li>
                            <li>
                              <i className="icon-21"></i>
                              <a href="tel:+2250757242591">
                                +225 07 57 24 25 91
                              </a>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="footer-bottom">
            <div className="footer-bottom-content">
              <div className="copyright">
                <p>
                  Copyright &copy; {new Date().getFullYear()} par{" "}
                  <a href="#">KovaTech</a>
                </p>
              </div>
              <ul className="footer-nav">
                <li>
                  <button
                    onClick={() => openModal("terms")}
                    className="footer-link-btn"
                  >
                    Conditions d'utilisation
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => openModal("privacy")}
                    className="footer-link-btn"
                  >
                    Politique de confidentialité
                  </button>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
      {/* Modal */}
      {isModalOpen && (
        <div className="modal-overlay" onClick={closeModal}>
          <div className="modal-container" onClick={(e) => e.stopPropagation()}>
            <div className="modal-header">
              <button className="modal-close-btn" onClick={closeModal}>
                <span>×</span>
              </button>
            </div>
            <div className="modal-content">{renderModalContent()}</div>
            <div className="modal-footer">
              <button className="modal-ok-btn" onClick={closeModal}>
                J'ai compris
              </button>
            </div>
          </div>
        </div>
      )}

      <style jsx>{`
        .footer-link-btn {
          background: none;
          border: none;
          color: inherit;
          cursor: pointer;
          font-size: inherit;
          text-decoration: underline;
          transition: color 0.3s ease;
          padding: 0;
        }

        .footer-link-btn:hover {
          color: #667eea;
        }

        .modal-overlay {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: rgba(0, 0, 0, 0.7);
          display: flex;
          align-items: center;
          justify-content: center;
          z-index: 10000;
          padding: 20px;
        }

        .modal-container {
          background: white;
          border-radius: 12px;
          box-shadow: 0 20px 60px rgba(0, 0, 0, 0.3);
          max-width: 800px;
          width: 100%;
          max-height: 90vh;
          display: flex;
          flex-direction: column;
          overflow: hidden;
        }

        .modal-header {
          padding: 20px 24px 0;
          display: flex;
          justify-content: flex-end;
        }

        .modal-close-btn {
          background: none;
          border: none;
          font-size: 28px;
          cursor: pointer;
          color: #666;
          width: 40px;
          height: 40px;
          display: flex;
          align-items: center;
          justify-content: center;
          border-radius: 50%;
          transition: all 0.3s ease;
        }

        .modal-close-btn:hover {
          background: #f5f5f5;
          color: #333;
        }

        .modal-content {
          flex: 1;
          overflow: hidden;
          padding: 0 24px;
        }

        .modal-content-inner {
          height: 100%;
          display: flex;
          flex-direction: column;
        }

        .modal-title {
          font-size: 24px;
          font-weight: 700;
          color: #2d3748;
          margin-bottom: 20px;
          text-align: center;
        }

        .modal-scroll-content {
          flex: 1;
          overflow-y: auto;
          padding-right: 10px;
        }

        .modal-scroll-content::-webkit-scrollbar {
          width: 6px;
        }

        .modal-scroll-content::-webkit-scrollbar-track {
          background: #f1f1f1;
          border-radius: 3px;
        }

        .modal-scroll-content::-webkit-scrollbar-thumb {
          background: #c1c1c1;
          border-radius: 3px;
        }

        .section {
          margin-bottom: 24px;
        }

        .section h3 {
          font-size: 18px;
          font-weight: 600;
          color: #4a5568;
          margin-bottom: 8px;
        }

        .section p {
          color: #718096;
          line-height: 1.6;
          margin-bottom: 12px;
        }

        .section ul {
          color: #718096;
          padding-left: 20px;
          margin-bottom: 12px;
        }

        .section li {
          margin-bottom: 6px;
          line-height: 1.5;
        }

        .modal-footer {
          padding: 20px 24px;
          border-top: 1px solid #e2e8f0;
          display: flex;
          justify-content: center;
        }

        .modal-ok-btn {
          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
          color: white;
          border: none;
          padding: 12px 32px;
          border-radius: 8px;
          font-weight: 600;
          cursor: pointer;
          transition: all 0.3s ease;
        }

        .modal-ok-btn:hover {
          transform: translateY(-2px);
          box-shadow: 0 4px 12px rgba(102, 126, 234, 0.4);
        }

        @media (max-width: 768px) {
          .modal-container {
            margin: 20px;
            max-height: 85vh;
          }

          .modal-title {
            font-size: 20px;
          }

          .section h3 {
            font-size: 16px;
          }
        }
      `}</style>
    </>
  );
};

export default FooterFour;
