import { createStore } from "redux";
import NoteReducer from "../reducer/NoteReducer"
const store=createStore(NoteReducer, 
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())
export default store