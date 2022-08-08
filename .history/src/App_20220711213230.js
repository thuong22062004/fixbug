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
  const[check,setChecked] = useState(2)
  const handlechecked = (id)=>{
    setChecked(id)
  }
  return (
    <div className="App">
     {optional.map(course =>(
       <div key={course.id}>
        <input 
        type='checkbox'
        checked = {check === course.id}
        onChange={()=>handlechecked(course.id)}
        />{course.name}
       </div>
     ))}
     <button onClick={handleRegis}>Register</button>
    </div>
  );
}

export default App;
