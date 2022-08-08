import {useState,useRef} from 'react'
import Content from './content.js'
function App() {
  const [count,setCount]= useState(0)
  const handleIcrease =()=>{
     setCount(count+1);
  }
  return (
    <div className="App">
      <Content />
     <h1>{count}</h1>
     <button onClick={handleIcrease}>Click</button>
    </div>
  );
}

export default App;
