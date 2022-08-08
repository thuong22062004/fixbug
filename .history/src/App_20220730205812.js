import {useContext}from 'react';
import {TodosContext}from './store/context.js'
import {setJob} from './store/actions.js'
function App(){
   const[state,dispatch] = useContext(TodosContext)
   const {todoInput,todos} = state
   console.log(state)
   return <div class='App'>
      <input 
         value={todoInput}
         placeholder='create job'
         onChange={e =>{
            dispatch(setJob(e.target.value))
         }}
      />
   </div>
}
export default App;

