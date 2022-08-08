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
     return  <div key={course.id}>
        <input 
        type='radio'
        />
       </div>
     })}
    </div>
  );
}

export default App;
