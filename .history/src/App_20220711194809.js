import {useState} from 'react'
const goods = [100,300,400,500]
function App() {
  const total = goods.reduce((total,elem)=>total + elem)
  const[counter,setCounter] = useState(total);
  return (
    <div className="App">
      <h1>{counter}</h1>
      <button onClick={()=>setCounter(pre => pre + 1)}>UP</button>
    </div>
  );
}

export default App;
