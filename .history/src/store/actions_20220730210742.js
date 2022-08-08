import {Set_Job,Add_Job}from './constant.js'
export const setJob = dataBack =>{
   return {
        type : Set_Job,
        dataBack
   }
}
export const addJob = dataBack =>{
    return {
         type : Add_Job,
         dataBack
    }
 }