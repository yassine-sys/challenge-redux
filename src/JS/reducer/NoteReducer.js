import { ADD, DELETE } from "../constants/actionstypes";

const initialState={
   list:[ {id:Math.random(),
    company:"some",
    name:"joe",
    notes:"good"
}]
}
const Note=(state = initialState,action) =>{
    switch(action.type){
        case ADD:
            return {...state,
                list: [...state.list,action.payload]
            }
            case DELETE:
                return {...state.list,list:state.list.filter(el=> el.id!==action.payload)}
        default:
      return state;
    }
}
export default Note