import {useState} from 'react'
goods = [100,300,400,500]
function App() {
  const[counter,setCounter] = useState(1);
  return (
    <div className="App">
      <h1>{counter}</h1>
      <button onClick={()=>setCounter()}>UP</button>
    </div>
  );
}

export default App;
