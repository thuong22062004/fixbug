import {useReducer,useRef} from 'react';
import reducer,{init} from './reducer.js';
import {Set_Job,Add_job,Delete_job } from './constant.js'
function TodoApp() {
  // dispatch
  const [state,dispatch] = useReducer(reducer,init)
  const {job,jobs} = state;
  const RefInput = useRef();
  const handleAdd =()=>{
    dispatch(addJob(job))
    dispatch(setJob(''))
    RefInput.current.focus();
  }
  return (
    <div className="App">
      <input 
        value={job}
        ref = {RefInput}
        placeholder='create job'
        onChange={e =>{
           dispatch(setJob(e.target.value))
        }}
      />
      <button onClick={handleAdd}>Add</button>
      <ul>
        {jobs.map((item,index)=>{
          return <li key={index}>{item}
              <span onClick={()=>{dispatch(deleteJob(index))}}>&times;</span>
          </li>
        })}
      </ul>
    </div>
  );
}

export default TodoApp;
