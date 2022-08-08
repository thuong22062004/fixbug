import video1 from './video1.mp4'
function VideoTest ({videoRef}){
     return <video
        ref={videoRef}
        src={video1}
     ></video>
}
export default VideoTest;