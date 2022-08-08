import {useState,useEffect}from 'react'
const tabs = ['posts','comments','albums','users']
function Content() {
  const [title,setTitle]=useState('');
  const [post,setPost]=useState([]);
  const[type,setType] = useState('posts')
    useEffect(()=>{
        fetch(`https://jsonplaceholder.typicode.com/${type}`)
        .then(res=>res.json())
        .then(posts =>{
            setPost(posts)
        })
    },[type])
  
    return (
      <div className="title">
        {tabs.map(tab=>(
          <button key={tab}
          style = {type === tab ? {background:'gray'}:{}}
           onClick={()=>setType(tab)}
          >{tab}</button>
        ))}
        <input 
        value={title}
        onChange = {e=>setTitle(e.target.value)}
        />
        <ul>
            {post.map(post=>(
                <li key={post.id}>{post.title || post.name}</li>
            ))}
        </ul>
      </div>
    );
  }
export default Content;