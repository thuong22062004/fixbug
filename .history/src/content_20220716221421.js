import {useState,useEffect}from 'react'
const tabs = ['posts','comments','albums','users']
function Content() {
  const [title,setTitle]=useState('');
  const [post,setPost]=useState([]);
  const[type,setType] = useState('posts')
  const [showGoTO,setShowGoTo] = useState(false)
    useEffect(()=>{
        fetch(`https://jsonplaceholder.typicode.com/${type}`)
        .then(res=>res.json())
        .then(posts =>{
            setPost(posts)
        })
    },[type])
  useEffect(()=>{
        function handleScroll(){
          if(window.scrollY >= 200){
            setShowGoTo(true)
          }else{
            setShowGoTo(false)
          }
        }
        window.addEventListener('scroll',handleScroll)
  },[])
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
        {showGoTO && <button
          style = {{
              position : 'fixed',
              bottom : 20,
              right:20
          }}
        ></button>}
      </div>
    );
  }
export default Content;