import ModalVideo from "react-modal-video"; 
import "react-modal-video/css/modal-video.css";  


const VideoPopup = ({
  isVideoOpen,
  setIsVideoOpen,
  videoId = "7vcZxtN_MtI", 
  
}:any ) => {
  return (
    <>
      <ModalVideo
        channel="youtube"
        // autoplay
        isOpen={isVideoOpen}
        videoId={videoId}
        onClose={() => setIsVideoOpen(false)}
      />
    </>
  );
};

export default VideoPopup;

