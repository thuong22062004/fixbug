import {useReducer} from 'react';
const init = {
    job : '',
    jobs : []
}
// actions
const Set_Job = 'setjob'// set lại value ,input = '' , set focus
const Add_job = 'addjob'
const Delete_jon = 'deletejob'
// useReducer
const reducer = ()=>{

}
function App() {
  // dispatch
  const [state,dispatch] = useReducer (reducer,init)
  // const {job,jobs}
  console.log(init)
  return (
    <div className="App">
      <input 
        placeholder='create job'
      />
    </div>
  );
}

export default App;
