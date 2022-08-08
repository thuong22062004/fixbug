import {useReducer} from 'react';
const init = {
    job : '',
    jobs : []
}
// actions
const Set_Job = 'setjob'// set lại value ,input = '' , set focus
const Add_job = 'addjob'
const Delete_jon = 'deletejob'
// get value is auto take a function
const setJob = dataBack =>{
    return {
      type : Set_Job,
       dataBack
    }
}
const addJob = dataBack =>{
  return {
    type : Add_job,
     dataBack
  }
}
// useReducer
const reducer = (state,actions)=>{
  // state la init  nếu init là object chưa 2 phan tu thi state cug v
  console.log(state)
  switch(actions.type){
    case Set_Job :
      return {
         ...state,
         job : actions.dataBack
      } 
      case Add_job :
        return{
          ...state,
          jobs : [...state.jobs,actions.dataBack]
        }
  }
   return state
}
function App() {
  // dispatch
  const [state,dispatch] = useReducer(reducer,init)
  const {job,jobs} = state
  const handleAdd =()=>{
    dispatch(addJob(job))
  }
  return (
    <div className="App">
      <input 
        value={job}
        placeholder='create job'
        onChange={e =>{
           dispatch(setJob(e.target.value))
        }}
      />
      <button onClick={handleAdd}>Add</button>
      <ul>
        {jobs.map((item,index)=>{
          return <li key={index}>{item}</li>
        })}
      </ul>
    </div>
  );
}

export default App;
