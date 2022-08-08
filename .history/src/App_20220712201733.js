import {useState} from 'react'
function App() {
 const [injob,setjob] = useState('')
 const [jobs ,setJobs]=useState([]);
 const handleJob = ()=>{
      setJobs(child => [...child,injob])
 }
  return (
    <div className="App">
      <input 
      value={injob}
      onChange = {e=>setjob(e.target.value)}
      />
      <button onClick={handleJob}>Add</button>
      <ul>
        {jobs.map((job,index)=>
          <li key={index}>{job}</li>
          )}
      </ul>
    </div>
  );
}

export default App;
