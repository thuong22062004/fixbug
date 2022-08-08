import {Set_Job,Add_Job}from './constant.js'
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
    }
}
export default reducer;