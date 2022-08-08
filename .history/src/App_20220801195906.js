import VideoTest from './videos/video.js'
import {useRef} from 'react'
function App(){
  const video1 = useRef()
  const handlePlay = ()=>{
      video1.current.play()
  }
  const handlePause = ()=>{
      video1.current.pause()
  }
   return <div class='App'>
      <VideoTest ref={video1}/> 
   <button onclick={handlePlay}>Play</button>
   <button onclick={handlePause}>Pause</button>
   </div>
}
export default App;

