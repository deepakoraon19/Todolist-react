import React, { useState } from "react";
import Tasks from "./Tasks";
import BgImg from "../images/bg-desktop-dark.jpg";
import ToggleImg from "../images/icon-sun.svg";
export default function SearchBar(props) {
  const [list, setList] = useState([]);
  const [ids,setIds] = useState(0)
  const [display,setDisplay] = useState("All")
  let sendData = (e) => {
    if (e.key == "Enter") {
      setList([...list, {id: ids, value:e.target.value, completed:false}]);
      setIds(ids+1)
      e.target.value = "";
      console.log(list); 
    }
  };


  let markElement = (id) => {
    setList(list.map((item)=>{
      if(item.id===id){        
        item.completed = true;
      }
      return item
    }))
  };


  let removeEntry = (id) => {
    setList(
      list.filter((el, i = 0) => {
        if (el.id !== id) {
          return true;
        }
        i++;
      })
    );
  };


  const removeCompleted = () => {

    setList(list.filter((item)=>{
        if(item.completed===false){
          return true
        }
    }))    
  };
  return (
    <>
      <img className="bg-img" src={BgImg} alt="coming soon" />
      <div className="to-do flex column">
        <div className="heading flex align-items">
          <div className="heading-txt">TODO</div>
          <img className="mode" src={ToggleImg} alt="coming soon" />
        </div>

        <div className="input-box flex align-items">
          {/* <div className="circle"></div> */}
          <input
            type="text"
            className="input-txt-box"
            onKeyPress={(e) => {
              sendData(e);
            }}
          ></input>
        </div>
        <div className="tasks">
          <section>
            {
            list.map((item) => {
              // if(display==='All')
              return (
                <div key={item.id}>
                  <Tasks                  
                    task={item}                                       
                    removeEntry={removeEntry}
                    markEl={markElement}                    
                  ></Tasks>
                  <hr className="line"></hr>
                </div>
              );
            })}
          </section>
          <div className="bottom-bar flex space-between align-items">
            <span>{list.length} items left</span>
            <div className="flex space-between">
              <div className="bottom-btn">All</div>
              <div className="bottom-btn">Active</div>
              <div className="bottom-btn">Completed</div>
            </div>
            <span className="bottom-btn" onClick={removeCompleted}>Clear Completed</span>
          </div>
        </div>
      </div>
    </>
  );
}
