import {useState,useEffect}from 'react'
function Content() {
  const[countdown,setCountdown]=useState(180)
  useEffect(() => {
    setInterval(() => {
      setCountdown(prev=>prev-1)
      console.log('countdown')
    }, 1000);

  }, []);

    return (
      <div className="title">
       <h1>{countdown}</h1>
      </div>
    );
  }
export default Content;