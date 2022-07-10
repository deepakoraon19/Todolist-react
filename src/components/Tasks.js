import React from 'react'
import Cross from "../images/icon-cross.svg"

export default function Tasks(props){
    return <li key={props.id}>
    <div className='txt-box flex'>
        <div className='circle'></div>
        <span className='txt'>{props.task}</span>
        <img src={Cross} className='flex-end cross' alt="cross"></img>
    </div>
    </li>
}