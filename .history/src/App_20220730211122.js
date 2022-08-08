import {useContext}from 'react';
import {TodosContext}from './store/context.js'
import {setJob} from './store/actions.js'
function App(){
   const[state,dispatch] = useContext(TodosContext)
   const {todoInput,todos} = state
   const handleAdd =()=>{
      dispatch(addJob(todoInput))
   }
   return <div class='App'>
      <input 
         value={todoInput}
         placeholder='create job'
         onChange={e =>{
            dispatch(setJob(e.target.value))
         }}
      />
      <button onClick={handleAdd}>Add</button>
   </div>
}
export default App;

