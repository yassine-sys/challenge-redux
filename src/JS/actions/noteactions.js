import { ADD, DELETE } from "../constants/actionstypes"

export const add=newNote=>{
    return {
        type:ADD,
        payload:newNote
    }
}

export const deleteNote= (id) => {
    return {
       type: DELETE,
       payload: id
    }
 }