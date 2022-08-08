const init = {
    job : '',
    jobs : []
}
// useReducer
 export const reducer = (state,actions)=>{
  // state la init  nếu init là object chưa 2 phan tu thi state cug v
  console.log(state)
  switch(actions.type){
    case Set_Job :
      return {
         ...state,
         job : actions.dataBack
      } 
      case Add_job :
        return{
          ...state,
          jobs : [...state.jobs,actions.dataBack]
        }
        case Delete_job :
         const OldArrjob = [...state.jobs]
          OldArrjob.splice(actions.dataBack,1);
        return{
            ...state,
            jobs : OldArrjob
        }
  } 
   return state
}
export default reducer