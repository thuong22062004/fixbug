import video1 from './video1.mp4'
function VideoTest (props){
    console.log(props)
     return <video
        ref={props.ref}
        src={video1}
     ></video>
}
export default VideoTest;