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
      console.log(list)                      
    }
  }
  let [mark,setMark]=useState([])
  
  let markEl=(id)=>{
    list.filter((el,i=0)=>{
      if(i===id){setMark([...mark,id])}
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
  const removeCompleted = ()=>{
   setList(list.map((el,index)=>{
      mark.find((element)=>element===index)
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
  <section >
  {
    list.map((item,i=0)=>{
      
      return <div key={i}>
      <Tasks task={item} id={i++} removeEntry={removeEntry} markEl={markEl}></Tasks>
      <hr className='line'></hr>
      </div>
    })}
    </section>
    <div className='bottom-bar flex space-between align-items' >
    <span>{list.length} items left</span>
    <div className='flex space-between'>
      <div className='bottom-btn'>All</div>
      <div className='bottom-btn'>Active</div>
      <div className='bottom-btn'>Completed</div>        
    </div>
    <span className='bottom-btn'>Clear Completed</span>
    </div>
    
    </div>
    </div>
    </>
  }