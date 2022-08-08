import {useState,useEffect}from 'react'
function Content() {
  const [title,setTitle]=useState('');
  const [post,setPost]=useState([]);
    useEffect(()=>{
        document.title = title;
       
    })
    fetch('https://jsonplaceholder.typicode.com/posts')
    .then(res=>res.json())
    .then(posts =>{
        setPost(posts)
    })
    return (
      <div className="title">
        <input 
        value={title}
        onChange = {e=>setTitle(e.target.value)}
        />
        <ul>
            {post.map(post=>(
                <li key={post.id}>{post.title}</li>
            ))}
        </ul>
      </div>
    );
  }
export default Content;