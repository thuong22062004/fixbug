import {useState}from 'react'
function Content() {
  const [title,setTitle]=useState('');
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