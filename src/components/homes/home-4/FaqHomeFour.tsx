"use client";
import { useState } from "react";

export const faq_data = [
  {
    question: "1. Quels types de services proposez-vous ?",
    answer:
      "Nous concevons et développons des applications web, des sites internet modernes, des logiciels sur mesure, ainsi que des applications mobiles. Nous accompagnons également nos clients dans la mise en place de solutions digitales innovantes adaptées à leurs besoins.",
  },
  {
    question: "2. Quels sont les avantages de travailler avec une agence digitale ?",
    answer:
      "Collaborer avec une agence digitale, c’est bénéficier d’une expertise complète : design, développement, stratégie digitale et suivi. Cela permet de gagner du temps, de réduire les erreurs techniques et d’obtenir des solutions professionnelles qui renforcent l’image et la performance de votre entreprise.",
  },
  {
    question: "3. Proposez-vous aussi du marketing digital et de l’accompagnement stratégique ?",
    answer:
      "Oui. En plus de la création technique, nous offrons des services de marketing digital (SEO, réseaux sociaux, campagnes publicitaires) et un accompagnement stratégique pour maximiser la visibilité et la croissance de votre projet digital.",
  },
  {
    question: "4. Travaillez-vous avec les petites entreprises et les startups ?",
    answer:
      "Absolument ! Nous adaptons nos solutions aussi bien aux startups qu’aux grandes entreprises. Notre approche flexible nous permet de proposer des offres sur mesure selon votre budget et vos objectifs.",
  },
  {
    question: "5. Comment se déroule la collaboration avec votre agence ?",
    answer:
      "Tout commence par une phase d’échange et de compréhension de vos besoins. Nous établissons ensuite une proposition claire, un planning, puis nous passons au design, au développement et aux tests. Vous êtes impliqué à chaque étape pour garantir un résultat fidèle à vos attentes.",
  },
];

const FaqHomeFour = () => {
  const [faq, setFaq] = useState<number | null>(0);
  const toggleFaq = (i: number) => {
    setFaq(faq === i ? null : i);
  };

  return (
    <>
      <section className="faq-section">
        <div
          className="pattern"
          style={{ backgroundImage: `url(/assets/images/shape/shape-16.png)` }}
        ></div>
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6 col-md-12 col-sm-12 left-column">
              <div className="accordion-content">
                <div className="main-title">
                  <h3>FAQ</h3>
                  <h2>
                    Réponses à vos <br />
                    <span className="gradient-color">questions fréquentes</span>
                  </h2>
                </div>
                <ul className="accordion-box">
                  {faq_data.map((item, i) => (
                    <li
                      key={i}
                      className={`accordion block ${
                        faq === i ? "active-block" : ""
                      }`}
                    >
                      <div
                        className={`acc-btn ${faq === i ? "active" : ""}`}
                        onClick={() => toggleFaq(i)}
                      >
                        <h3>{item.question}</h3>
                        <div className="icon-box">
                          <i className="icon-13"></i>
                        </div>
                      </div>
                      <div
                        className={`acc-content ${faq === i ? "current" : ""}`}
                      >
                        <div className="content">
                          <p>{item.answer}</p>
                        </div>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="col-lg-6 col-md-12 col-sm-12 right-column">
              <div className="faq-image">
                <figure className="image">
                  <img src="assets/images/resource/faq3.jpg" alt="FAQ" />
                </figure>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default FaqHomeFour;
