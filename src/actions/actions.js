import {ADD_ITEM,    EDIT_ITEM,    DELETE_ITEM} from './actionsTypes'

export const add_items=(itemspassed)=>{
    //console.log(itemspassed)
   return{
       type:ADD_ITEM,
       payload:itemspassed
   }
}

export const delete_item=(id)=>{
    //console.log(itemspassed)
   return{
       type:DELETE_ITEM,
       payload:id
   }
}