import {useContext}from 'react';
import {TodosContext}from './store/context.js'
import {setJob,addJob} from './store/actions.js'
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
      <ul>
         {todos.map((item,index)=>{
             return <li key={index}>{item}
             <span onClick={e=>{dispatch(deleteJob(index))}}>&times;</span>
             </li>
         })}
      </ul>
   </div>
}
export default App;

