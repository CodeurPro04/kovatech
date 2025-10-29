import { useState } from "react";
import VideoPopup from "../../modals/video-popup";

// Ajout du style pour l'animation clignotante
const blinkStyle = `
@keyframes blink {
  0% { opacity: 1; }
  50% { opacity: 0.4; }
  100% { opacity: 1; }
}
.blink-animate {
  animation: blink 2s infinite;
}
/* Correction du z-index pour ne pas passer au-dessus de la nav */
.video-section .video-btn {
  position: relative;
  z-index: 1;
}
`;

const VideoAbout = () => {
  const [isVideoOpen, setIsVideoOpen] = useState(false);

  return (
    <>
      {/* Ajout du style dans le composant */}
      <style>{blinkStyle}</style>
      <section className="video-section text-center">
        <div className="background-image" style={{ backgroundImage: `url(/assets/images/digi.jpg)` }}></div>
        <div className="container">
          <div className="video-btn">
            <a
              onClick={() => setIsVideoOpen(true)}
              style={{ cursor: "pointer" }}
              className="lightbox-image blink-animate"
            >
              <img src="assets/images/icons/icon-20.png" alt="" />
            </a>
          </div>
        </div>
      </section>
      {/* video modal start */}
      <VideoPopup
        isVideoOpen={isVideoOpen}
        setIsVideoOpen={setIsVideoOpen}
        videoId={"7vcZxtN_MtI"}
      />
      {/* video modal end */}
    </>
  );
};

export default VideoAbout;