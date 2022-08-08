import{Set_Job} from './constant.js'
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
    }
}
export default reducer;