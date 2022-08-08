import {useState,useEffect}from 'react'
function Content() {
  const[countdown,setCountdown]=useState(180)
  const handlPreview = (e)=>{
      const file = e.target.file[0]
      console.log(URL.createObjectURL(file))
  }
    return (
      <div className="title">
      <input 
        type='file'
        onChange={handlPreview}
      />
      </div>
    );
  }
export default Content;