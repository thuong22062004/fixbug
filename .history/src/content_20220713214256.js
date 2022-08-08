import {useState,useEffect}from 'react'
function Content() {
  const [title,setTitle]=useState('');
    useEffect(()=>{
        document.title = title;
        console.log('AfterWard')
    })
    return (
      <div className="title">
        <input 
        value={title}
        onChange = {e=>setTitle(e.target.value)}
        />
        {console.log('Forward')}
      </div>
    );
  }
export default Content;