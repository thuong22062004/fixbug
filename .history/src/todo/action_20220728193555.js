// actions
// get value is auto take a function
export const setJob = dataBack =>{
    return {
      type : Set_Job,
       dataBack
    }
}
export const addJob = dataBack =>{
  return {
    type : Add_job,
     dataBack
  }
}
export const deleteJob = dataBack =>{
  return {
    type : Delete_job,
     dataBack
  }
}