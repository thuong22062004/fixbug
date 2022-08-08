import {useState} from 'react'
const goods = [100,300,400,500]
function App() {
  const[counter,setCounter] = useState(()=>{
    const total = goods.reduce((total,elem)=>total + elem);
    return total
  });
  return (
    <div className="App">
      <h1>{counter}</h1>
      <button onClick={()=>setCounter(pre => pre + 1)}>UP</button>
    </div>
  );
}

export default App;
