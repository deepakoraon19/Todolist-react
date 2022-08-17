import React, { useState } from 'react'
import Cross from "../images/icon-cross.svg"
import Check from "../images/icon-check.svg"

export default function Tasks({task,markEl,removeEntry}){
    
    return <div >
        {/* {console.log(item)} */}
    <div className='txt-box flex'>
    <div className='circle' onClick={()=>{markEl(task.id)}}>
    {task.completed===true?<img className="check" src={Check}/>:<></>}
      </div>
    <p className='txt'>{task.value}</p>
    {/* {console.log(props)} */}
    <img src={Cross} className='cross' alt="cross" onClick={()=>{removeEntry(task.id)}}></img>
    </div>
    </div>
}