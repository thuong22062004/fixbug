import {useState,useRef,useCallback} from 'react'
import Content from './content.js'
function App() {
  const [count,setCount]= useState(0)
  const handleIcrease = useCallback(()=>{
    setCount(prev => prev +1);
 },[])
  return (
    <div className="App">
      <Content onicre = {handleIcrease}/>
     <h1>{count}</h1>
    </div>
  );
}

export default App;
