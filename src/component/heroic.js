import React,{useState} from "react";
import "./heroic.css";
import rightimg from "../images/1.jpg";


export default function Heroic() 
 { 
  const [text, settext] =useState( "Pink color");
   const [color2, setcolor2] =useState( {backgroundColor: "white"} );
   const [htext,sethtext] =useState( {color: "black"} );
   const change=()=>
   {
     if(color2.backgroundColor ===  "white")
     {
       setcolor2({backgroundColor: "#f0639a"})
       settext(" White color")
       sethtext({color: "white"})
     }
     else{
       setcolor2({backgroundColor: "white"})
       settext(" pink color")
       sethtext({color: "black"      })
     }
    }

  
  
  
  
  
  return <> <div className="hersec container" >
    <div className="sec1" style={color2} >
    <h1 id="h" style={htext}>LUFFY</h1>
    <h1 style={htext}>DONUTS</h1>
    <p style={htext}>try the best donuts in lugano with free delivery! you can combine your own unique taste with donut constructor.</p>
    <button type="button" onClick={change} className="px-4 my-4 mx-3 py-2 b1">{text}</button>
    <div className="pinkbox"></div>
    </div>
   <div className="sec2">
    <img src={rightimg} alt=""  />
   </div>


  </div>
  </>
   }
   
   