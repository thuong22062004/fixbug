import {useState} from 'react'
const optional = [
  {
    id : 1,
    name : 'java'
  },
  {
    id : 2,
    name : 'java'
  },
  {
    id : 1,
    name : 'java'
  }
]
function App() {
  const[check,setChecked] = useState()
  return (
    <div className="App">
     {optional.map(course =>{
       return <input key={course.id}/>
     })}
    </div>
  );
}

export default App;
