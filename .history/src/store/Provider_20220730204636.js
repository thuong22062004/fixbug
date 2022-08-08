import {TodosContext}from './context.js'
import reducer ,{init}from './reducer.js'
function ToDoProvider({children}){
    const[state,dispatch]=useReducer (reducer,init)
    return <TodosContext.Provider value={[state,dispatch]}>
        {children}
    </TodosContext.Provider>
}
export default ToDoProvider