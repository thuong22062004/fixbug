import {useState,useEffect}from 'react'
function Content() {
  const[count,setCount] = useState(0)
  useEffect(()=>{
    if(count > 3){
      setCount(0)
    }
  },[count])
  const handleCount = ()=>{
     setCount(count + 1)
  }
    return (
      <div className="title">
        <h1>{count}</h1>
        <button onClick={handleCount}>Run</button>
      </div>
    );
  }
export default Content;