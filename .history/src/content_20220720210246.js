import {useState,useEffect,useRef}from 'react'
function Content() {
  const[count,setCount] = useState(0)
  const handleCountRun = ()=>{
    setCount(prev => prev -1);
  }
  const handleCountStop = ()=>{
    
  }
    return (
      <div className="title">
        <h1>{count}</h1>
        <button onClick={handleCountRun}>Run</button>
        <button onClick={handleCountStop}>Stop</button>
      </div>
    );
  }
export default Content;