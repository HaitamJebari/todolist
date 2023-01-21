import React, { useRef } from 'react'
import './style.css'

function Task({props,dlt,id,Task_done,setnotes}){
    const ref=useRef('') 
    const done=(idp)=>{
      setnotes(prevState=>{
         let newState=prevState.map(note=>{
            if(idp===note.id){
               return{...note,done:!note.done};
            }
            return note;
         })
         return newState
      })
    }
  
    return(
       <div>
        <input type="text" name="" id="inp" value={props} className={`${Task_done ? "rsi" : ""}`} ref={ref} disabled readOnly/>
        <input type="button" onClick={dlt} value="Supprimer" className='btn-danger'/>
        <input type="button" value="Done" id="do" onClick={e=>done(id)} className='btn-info'/>
       </div>
    )
}
export default Task