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
// useReducer
const reducer = (state,actions)=>{
  switch(actions.type){
    case Set_Job :
      return {
         ...state,
         job : actions.dataBack
      } 
  }
   return state
}
function App() {
  // dispatch
  const [state,dispatch] = useReducer (reducer,init)
  const {job,jobs} = state
  return (
    <div className="App">
      <input 
        value={job}
        placeholder='create job'
        onChange={e =>{
           dispatch(setJob(e.target.value))
        }}
      />
    </div>
  );
}

export default App;
