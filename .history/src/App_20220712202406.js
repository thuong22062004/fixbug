import {useState,useRef} from 'react'
function App() {
  const focusIn = useRef();
 const [injob,setjob] = useState('')
 const [jobs ,setJobs]=useState([]);
 const handleJob = ()=>{
      setJobs(child => [...child,injob]);
      setjob('');
      focusIn.current.focus()
      const localchore = JSON.stringify(jobs)
      localStorage.setItem('job',localchore)
 }
  return (
    <div className="App">
      <input 
      ref={focusIn}
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
