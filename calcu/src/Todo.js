import React, { useState } from 'react'
import Task from './Task'
import {v4 as uuidv4} from 'uuid'
import './style.css'

function Todo(){
    const [tasks,settasks]=useState([
        {id:uuidv4(),Job:'Sport'},
        {id:uuidv4(),Job:'Lire'},
        {id:uuidv4(),Job:'Coder'}
    ])
    const[task,settask]=useState('')

    const addtask=()=>{
        let ntasks=[...tasks]
        let ntask={}
        ntask.id=uuidv4()
        ntask.Job=task
        ntasks.push(ntask)
        settasks(ntasks)
        settask('')
    }
    const deletetask=(idp)=>{
        let ntasks=tasks.filter((t)=>{
            return t.id!==idp
        })
        settasks(ntasks)
        
    }

    return(
       <div>
        <h1 >ToDo - List</h1>
        
        <form action="">
          <h3> Next Job :</h3>  <input style={{textAlign:"center",width:"380px",paddingBottom:"7px"}} type="text"onChange={(e)=>{settask(e.target.value)}} name="" id="" value={task}/> 
          <input type="button" onClick={addtask} value="Ajouter" id="aj" className='btn-primary'/>
        </form>
        <ul>
        {
            tasks.map((t)=>{ 
                return <li key={t.id}><Task setnotes={settasks} id={t.id} Task_done={t.done} dlt={()=>{deletetask(t.id)}} props={t.Job}/></li>           
            })
               
        }
        </ul>
       </div>
    )
}
export default Todo