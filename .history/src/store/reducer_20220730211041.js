import {Set_Job,Add_Job}from './constant.js'
export const init = {
    todoInput:'',
    todos : []
}
const reducer = (state,actions)=>{
    console.log(state)
    switch(actions.type){
        case Set_Job :
            return{
                ...state,
                todoInput : actions.dataBack
            }
        case Add_Job :
            return {
                ...state,
                todos : [actions.dataBack]
            }
    }
}
export default reducer;