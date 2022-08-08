import {useState} from 'react'
const optional = [
  {
    id : 1,
    name : 'java'
  },
  {
    id : 2,
    name : 'PHP'
  },
  {
    id : 3,
    name : 'Python'
  }
]
function App() {
  const[check,setChecked] = useState([])
  const handlechecked = (id)=>{
    setChecked(pre => {
      const ischecked = check.includes(id);
      if(ischecked){
      return   check.filter(item => item != id)
      }else{
      return  [...pre,id]
      }
    });
    console.log(check)
  }
  return (
    <div className="App">
     {optional.map(course =>(
       <div key={course.id}>
        <input 
        type='checkbox'
        checked = {check.includes(course.id)}
        onChange={()=>handlechecked(course.id)}
        />{course.name}
       </div>
     ))}
     <button>Register</button>
    </div>
  );
}

export default App;
