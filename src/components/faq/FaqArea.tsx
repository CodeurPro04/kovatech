"use client";
import { useState } from "react";


const faq_data = [
  {
    id: 1,
    question: "Quels services les agences créatives proposent-elles ?",
    answer: "Si vous utilisez régulièrement ce site et souhaitez contribuer à son maintien en ligne, merci de participer aux frais de bande passante.",
  },
  {
    id: 2,
    question: "Comment travailler avec une agence créative peut-il bénéficier à ma marque ?",
    answer: "Si vous utilisez régulièrement ce site et souhaitez contribuer à son maintien en ligne, merci de participer aux frais de bande passante.",
  },
  {
    id: 3,
    question: "Proposez-vous des services de marketing digital ?",
    answer: "Si vous utilisez régulièrement ce site et souhaitez contribuer à son maintien en ligne, merci de participer aux frais de bande passante.",
  },
  {
    id: 4,
    question: "Quelles questions doivent figurer sur une page FAQ ?",
    answer: "Si vous utilisez régulièrement ce site et souhaitez contribuer à son maintien en ligne, merci de participer aux frais de bande passante.",
  },
  {
    id: 5,
    question: "Votre identité visuelle est-elle en accord avec votre marque ?",
    answer: "Si vous utilisez régulièrement ce site et souhaitez contribuer à son maintien en ligne, merci de participer aux frais de bande passante.",
  },
  {
    id: 6,
    question: "Comment devenir chef de projet agile ?",
    answer: "Si vous utilisez régulièrement ce site et souhaitez contribuer à son maintien en ligne, merci de participer aux frais de bande passante.",
  },
];



const FaqArea = () => {

    const [faq, setFaq] = useState<number | null>(0);
    const toggleFaq = (i: number) => {
      setFaq(faq === i ? null : i);
    };


  return (
    <>
      <section className="faq-section">
        <div className="pattern" style={{backgroundImage: `url(/assets/images/shape/shape-16.png)`}}></div>
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6 col-md-12 col-sm-12 left-column">
              <div className="accordion-content">
                <div className="main-title">
                  <h3>Quelques questions</h3>
                  <h2>Un design où les idées <br /><span className="gradient-color color-two">prennent leur envol</span></h2>
                </div>
                <ul className="accordion-box">
                  {faq_data.map((item , i) => (
                    <li className={`accordion block ${faq === i ? 'active-block' : ''}`} key={i}>
                      <div className={`acc-btn ${faq === i ? 'active' : ''}`} onClick={() => toggleFaq(i)}>
                        <h3>{item.question}</h3>
                        <div className="icon-box"><i className="icon-13"></i></div>
                      </div>
                      <div className={`acc-content ${faq === i ? 'current' : ''}`}>
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
              <div className="faq-image image-two">
                <figure className="image"><img src="assets/images/resource/faq-2.jpg" alt="" /></figure>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default FaqArea;