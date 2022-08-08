import {useState} from 'react'
const gifs = ['PC','keyboard','mouse','desk']
function App() {
  const[counter,setCounter] = useState();
  const handleRandom = () =>{
    const idRandom =  Math.floor(Math.random()*gifs)
    setCounter(gifs[idRandom])
  }
  return (
    <div className="App">
      <h1>{counter}</h1>
      <button onClick={handleRandom}>Change</button>
    </div>
  );
}

export default App;
