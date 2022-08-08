import {TodosContext}from './context.js'
function ToDoProvider({children}){
    return <TodosContext.Provider>
        {children}
    </TodosContext.Provider>
}