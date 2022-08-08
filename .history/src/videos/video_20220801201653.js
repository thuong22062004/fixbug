import video1 from './video1.mp4'
import {forwardRef,useImperativeHandle,useRef} from 'react'
function VideoTest (props,ref){
    const videoRef = useRef()
    useImperativeHandle(ref,()=>(
        {
            play(){
                videoRef.current.play()
            },
            pause(){
                videoRef.current.pause()
            }
        })
    )
    console.log(props)
     return <video
        ref={videoRef}
        src={video1}
     ></video>
}
export default forwardRef(VideoTest)