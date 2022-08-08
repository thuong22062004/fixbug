import {TodosContext}from './context.js'
import reducer ,{init}from './reducer.js'
import{useReducer} from 'react';
function ToDoProvider({children}){
    const[state,dispatch]=useReducer(reducer,init)
    return <TodosContext.Provider value={[state,dispatch]}>
        {children}
    </TodosContext.Provider>
}
export default ToDoProvider