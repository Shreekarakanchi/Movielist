import { useState } from "react";

const Serieslist = () => {
    let [seriesData,setData]=useState([
        {
          title:"Family man ",
          gener:"action",
          cost:"manoj vajapayee",
          quote:"Let we see later"
    
        },
      
        {
          title:"Family man ",
          gener:"action",
          cost:"manoj vajapayee",
          quote:"Let we see later"
    
        },
        {
          title:"Family man ",
          gener:"action",
          cost:"manoj vajapayee",
          quote:"Let we see later"
    
        },
        {
          title:"Family man ",
          gener:"action",
          cost:"manoj vajapayee",
          quote:"Let we see later"
    
        },
      ])
    return (      
    <div className="data">
 {seriesData.map((value)=>{
   return(
     <div className="display">
       <h1>Title:{value.title}</h1>
       <h2>gener:{value.gener}</h2>
       <h2>cost and quote:{value.quote}</h2>
     </div>
   )
 })}
 
 
     </div>);
    
}
 
export default Serieslist;