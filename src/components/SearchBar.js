import React, {useState}from 'react'
import Tasks from './Tasks'
import BgImg from "../images/bg-desktop-dark.jpg" 
import ToggleImg from "../images/icon-sun.svg"
export default function SearchBar(props){   
    const [list,setList]=useState([])
    let sendData = (e)=>{        
        if(e.key=="Enter"){           
            setList([...list,e.target.value]) 
            e.target.value=""                        
        }
    }
    let [mark,setMark]=useState([])

    let markEl=(id)=>{
      list.filter((el,i=0)=>{
          if(i==id){setMark([...mark,id])}
      })
      console.log(mark)
    }
    let removeEntry = (id)=>{
      setList (list.filter((el,i=0)=>{
        if(i!=id){
          return true
        }
        i++
      }))
    }
    return <>
    <img className="bg-img" src={BgImg} alt='coming soon' />
    <div className="to-do flex column">
      <div className="heading flex align-items">
        <div className="heading-txt">TODO</div>
        <img className="mode" src={ToggleImg} alt='coming soon'/>
      </div>
      
    <div className="input-box flex align-items">  
     <div className="circle"></div>  
    <input type="text"className="input-txt-box" onKeyPress={(e)=>{sendData(e)}}></input>
    </div>
    <div className='tasks'>
    <ul >
        <div >
        {
        list.map((item,i=0)=>{
            
           return <>
           <Tasks task={item} id={i++} removeEntry={removeEntry} markEl={markEl}></Tasks>
           <hr className='line'></hr>
           </>
        })}
        </div>
    </ul>
    </div>
    </div>
    </>
}