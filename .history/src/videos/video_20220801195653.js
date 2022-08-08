import video1 from './video1.mp4'
import {forwardRef} from 'react'
function VideoTest (props,ref){
    console.log(props)
     return <video
        ref={ref}
        src={video1}
     ></video>
}
export default forwardRef(VideoTest)