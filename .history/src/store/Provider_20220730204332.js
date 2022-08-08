import {TodosContext}from './context.js'
function ToDoProvider({children}){
    const[state,dispatch]=useReducer (reducer,init)
    return <TodosContext.Provider>
        {children}
    </TodosContext.Provider>
}
export default ToDoProvider