import {useState,useEffect,useRef}from 'react'
function Content() {
  const[count,setCount] = useState(99)
  let timerId = useRef()
  const handleCountRun = ()=>{
    timerId.current =setInterval(()=>{
      setCount(prev => prev -1);
    },1000)
  }
  const handleCountStop = ()=>{
    clearInterval(timerId.current)
    console.log(timerId.current)
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