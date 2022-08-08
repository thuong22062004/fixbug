import VideoTest from './videos/video.js'
import {useRef} from 'react'
function App(){
  const video1 = useRef()
   return <div class='App'>
      <VideoTest ref={video1}/> 
   <button>Play</button>
   <button>Pause</button>
   </div>
}
export default App;

