import {useState,useRef} from 'react'
function App() {
  const focusIn = useRef();
 const [injob,setjob] = useState('')
 const [jobs ,setJobs]=useState([]);
 const handleJob = ()=>{
      setJobs(child => {
        const totalChore = [...child,injob];
        const localChore = JSON.stringify(totalChore)
        localStorage.setItem('job',localChore);
        return totalChore;
      });
      setjob('');
      focusIn.current.focus()
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
