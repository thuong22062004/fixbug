import {useReducer} from 'react';
//const init
const initState = 0 
// Actions
const Up = 'up';
const Down = 'down';
//reducer
const reducer = (state,actions)=>{
  switch(actions){
     case Up :
      return state + 1 
      break;
    case Down :
       return state -1
       break;
  }
}
function App() {
  // dispatch
  const [count,dispatch]= useReducer(reducer,initState)
  return (
    <div className="App">
      <h1>{count}</h1>
      <button
        onClick = {()=>{dispatch(Up)}}
      >UP</button>
      <button
        onClick = {()=>{dispatch(Down)}}
      >Down</button>
    </div>
  );
}

export default App;
