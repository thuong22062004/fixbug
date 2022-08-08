import {useState} from 'react'
function App() {
 const [injob,setjob] = useState('')

  return (
    <div className="App">
      <input 
      value={injob}
      onChange = {e=>setjob(e.target.value)}
      />
      <button>Add</button>
      <ul>

      </ul>
    </div>
  );
}

export default App;
