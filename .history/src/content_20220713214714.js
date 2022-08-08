import {useState,useEffect}from 'react'
function Content() {
  const [post,setPost]=useState([]);
    // useEffect(()=>{
       
       
    // })
    fetch('https://jsonplaceholder.typicode.com/posts')
    .then(res=>res.json())
    .then(posts =>{
        
    })
    return (
      <div className="title">
        <input 
        value={title}
        onChange = {e=>setTitle(e.target.value)}
        />
      </div>
    );
  }
export default Content;