import {useState,useEffect,useRef}from 'react'
function Content() {
  const[count,setCount] = useState(99)
  const timerId = useRef();
  const save = useRef()
  useEffect(()=>{
    save.current = count
  },[count])
  const handleCountRun = ()=>{
    timerId.current=setInterval(()=>{
      setCount(prev => prev -1);
    },1000)
  }
  const handleCountStop = ()=>{
    clearInterval(timerId.current)
  }
  console.log(count,save.current)
    return (
      <div className="title">
        <h1>{count}</h1>
        <button onClick={handleCountRun}>Run</button>
        <button onClick={handleCountStop}>Stop</button>
      </div>
    );
  }
export default Content;