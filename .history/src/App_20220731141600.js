import {useContext}from 'react';
import {TodosContext}from './store'
import {actions} from './store'
function App(){
   const[state,dispatch] = useContext(TodosContext)
   const {todoInput,todos} = state
   const handleAdd =()=>{
      dispatch(actions.addJob(todoInput))
   }
   return <div class='App'>
      <input 
         value={todoInput}
         placeholder='create job'
         onChange={e =>{
            dispatch(actions.setJob(e.target.value))
         }}
      />
      <button onClick={handleAdd}>Add</button>
      <ul>
         {todos.map((item,index)=>{
             return <li key={index}>{item}
             <span onClick={e=>{dispatch(actions.deleteJob(index))}}>&times;</span>
             </li>
         })}
      </ul>
   </div>
}
export default App;

