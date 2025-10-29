"use client";

const ContactArea = () => {
  return (
    <>
      <section className="contact-section-two padding_top_80">
        <div className="container">
          <div className="row align-items-center">
            {/* Infos de contact */}
            <div className="col-lg-6 col-md-12 col-sm-12 block-column">
              <div className="contact-content-two">
                <div className="main-title">
                  <h3>Contactez-nous</h3>
                  <h2>
                    Donnez vie à vos idées <br />
                    <span className="gradient-color">
                      avec nos solutions digitales.
                    </span>
                  </h2>
                </div>
                <div className="inner-box">
                  <div className="single-item">
                    <div className="icon-box">
                      <i className="icon-55"></i>
                    </div>
                    <h3>Email & Téléphone</h3>
                    <p>
                      <a href="mailto:contact@kovatech.ci">
                        contact@kovatech.ci
                      </a>
                      <br />
                      <a href="tel:+2250757242591">+225 07 57 24 25 91</a>
                    </p>
                  </div>
                  <div className="single-item">
                    <div className="icon-box">
                      <i className="icon-56"></i>
                    </div>
                    <h3>Adresse</h3>
                    <p>
                      Abidjan, Côte d’Ivoire
                      <br />
                      Marcory – Rue F188
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Formulaire */}
            <div className="col-lg-6 col-md-12 col-sm-12 block-column">
              <div className="contact-form-box">
                <form onSubmit={(e) => e.preventDefault()}>
                  <div className="row">
                    {/* Nom */}
                    <div className="col-lg-6 col-md-6 col-sm-12">
                      <div className="form-group">
                        <label>Nom & Prénom*</label>
                        <input
                          type="text"
                          name="name"
                          placeholder="Votre nom"
                          required
                        />
                      </div>
                    </div>

                    {/* Email */}
                    <div className="col-lg-6 col-md-6 col-sm-12">
                      <div className="form-group">
                        <label>Email*</label>
                        <input
                          type="email"
                          name="email"
                          placeholder="exemple@mail.com"
                          required
                        />
                      </div>
                    </div>

                    {/* Téléphone */}
                    <div className="col-lg-6 col-md-6 col-sm-12">
                      <div className="form-group">
                        <label>Téléphone*</label>
                        <input
                          type="text"
                          name="telephone"
                          placeholder="07 00 00 00 00"
                          required
                        />
                      </div>
                    </div>

                    {/* Entreprise */}
                    <div className="col-lg-6 col-md-6 col-sm-12">
                      <div className="form-group">
                        <label>Entreprise</label>
                        <input
                          type="text"
                          name="company"
                          placeholder="Nom de l’entreprise (optionnel)"
                        />
                      </div>
                    </div>

                    {/* Type de projet */}
                    <div className="col-lg-6 col-md-6 col-sm-12">
                      <div className="form-group">
                        <label>Type de projet*</label>
                        <select
                          name="project_type"
                          title="Select your option"
                          required
                          className="form-control"
                        >
                          <option value="">-- Sélectionnez --</option>
                          <option value="site-web">Site web</option>
                          <option value="app-mobile">Application mobile</option>
                          <option value="logiciel">Logiciel</option>
                          <option value="solution-digitale">
                            Solution digitale complète
                          </option>
                          <option value="autre">Autre</option>
                        </select>
                      </div>
                    </div>

                    {/* Upload cahier de charges */}
                    <div className="col-lg-6 col-md-6 col-sm-12">
                      <div className="form-group">
                        <label>Cahier des charges (PDF, DOCX)</label>
                        <input
                          type="file"
                          title="Upload your document"
                          name="document"
                          accept=".pdf,.doc,.docx"
                        />
                      </div>
                    </div>

                    {/* Message */}
                    <div className="col-lg-12 col-md-12 col-sm-12">
                      <div className="form-group">
                        <label>Description du projet*</label>
                        <textarea
                          name="message"
                          placeholder="Décrivez brièvement votre projet..."
                          required
                        ></textarea>
                      </div>
                    </div>

                    {/* Boutons */}
                    <div className="col-lg-12 col-md-12 col-sm-12">
                      <div className="form-group">
                        <button
                          type="submit"
                          className="primary-btn one gradient-bg white-color"
                        >
                          Demander un devis
                        </button>
                      </div>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ContactArea;
