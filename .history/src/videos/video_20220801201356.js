import video1 from './video1.mp4'
import {forwardRef,useImperativeHandle,useRef} from 'react'
function VideoTest (props,ref){
    const video1 = useRef()
    useImperativeHandle(ref,()=>(
        {
            play(){
                video1.current.play()
            }
            pause(){
                video1.current.pause()
            }
        })
    )
    console.log(props)
     return <video
        ref={ref}
        src={video1}
     ></video>
}
export default forwardRef(VideoTest)