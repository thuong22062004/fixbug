import {useState,useEffect}from 'react'
function Content() {
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