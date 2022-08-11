import React, { useState } from 'react'
import Cross from "../images/icon-cross.svg"
import Check from "../images/icon-check.svg"

export default function Tasks(props){
    
    return <div >
    <div className='txt-box flex'>
    <div className='circle' onClick={(id)=>{props.markEl(props.id)}}>
     <img onClick={(e)=>{ console.log(e);e.target.style.display="block"}} className="check" src={Check}/>
    </div>
    <p className='txt'>{props.task}</p>
    {/* {console.log(props)} */}
    <img src={Cross} className='cross' alt="cross" onClick={()=>{props.removeEntry(props.id)}}></img>
    </div>
    </div>
}