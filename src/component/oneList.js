import React from 'react'
import { useDispatch } from 'react-redux'
import { deleteNote } from '../JS/actions/noteactions'
import './List.css'
const OneList = (props) => {
    console.log(props.el.id)
    const dispatch=useDispatch()
    const remove=()=>{
        dispatch(deleteNote(props.el.id))
    }
    return (
        <div className="w3-panel w3-card w3-yellow">
            <ul>company : {props.el.company}</ul>
            <ul>name : {props.el.name}</ul>
            <ul>notes : {props.el.notes}</ul>
            <button href="" className="btn-del" onClick={remove}>delete</button>
        </div>
    )
}

export default OneList
