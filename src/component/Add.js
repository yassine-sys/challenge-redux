import React, {useState} from 'react'
import { connect, useDispatch } from "react-redux";
import { add } from '../JS/actions/noteactions';
import './Add.css'

const Add = () => {
    const [company,setCompany]=useState('')
    const [name,setName]=useState('')

    const [notes,setNotes]=useState('')
    const dispatch=useDispatch()
const addd = () => {
   dispatch( add({id:Math.random(),  company, name, notes }),setCompany(''),setName(''),setNotes(''));
  };
    return (
        <div >
            <div className="card">

            <b>Company</b><br></br>
            <input type="text" placeholder="New Note" value={company} onChange={e=>setCompany(e.target.value)} /><br></br>
            <b>Name</b><br></br>
            <input type="text" placeholder="Mr Man" value={name} onChange={e=>setName(e.target.value)} /><br></br>
            <b>Notes</b><br></br>
            <input type="text" placeholder="Stuff Stuff Stuff" value={notes} onChange={e=>setNotes(e.target.value)} /><br></br>
            
            <button className="button-add" onClick={addd}>Add contact</button>
            </div>
            
        </div>
    )
}

export default Add
