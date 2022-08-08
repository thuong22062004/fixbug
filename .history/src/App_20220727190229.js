import {useState,useRef,useCallback} from 'react'
import Content from './content.js'
function App() {
  const [count,setCount]= useState(0)
  return (
    <div className="App">
      <button
        onClick = {()=>{setCount(count + 1)}}
      >UP</button>
      <button
        onClick = {()=>{setCount(count - 1)}}
      >Down</button>
    </div>
  );
}

export default App;
