import {useContext}from 'react';
import {TodosContext}from './store/context.js'
function App(){
   const[state,dispatch] = useContext(TodosContext)
   console.log(state)
   return <div class='App'>
      <h1>hello các bạn</h1>
   </div>
}
export default App;
