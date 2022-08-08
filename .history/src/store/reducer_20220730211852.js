import {Set_Job,Add_Job,Delete_Job}from './constant.js'
export const init = {
    todoInput:'',
    todos : []
}
const reducer = (state,actions)=>{
    switch(actions.type){
        case Set_Job :
            return{
                ...state,
                todoInput : actions.dataBack
            }
        case Add_Job :
            return {
                ...state,
                todos : [...state.todos,actions.dataBack]
            }
            case Delete_Job :
                const NewArrjob = [state.todos]
                NewArrjob.splice(actions.dataBack,1)
            return {
                ...state,
                todos:NewArrjob
            }
    }
}
export default reducer;