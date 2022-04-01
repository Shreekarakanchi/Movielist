import './App.css'
import { useState } from "react";
const Movielist = () => {
let[movieName,setMovie]=useState([
    {
        movie:"James",
        actore:"Puneet"
    },
    {
        movie:"Pushp",
        actore:"Allu arjun"
    },
    {
        movie:"Bhajarangi",
        actore:"ShivarajKumar"
    },
    {
        movie:"Bhahuddur",
        actore:"Druva sarja"
    },
    {
        movie:"Sarathi",
        actore:"darshan"
    }
])
    return (  
        
        <div className="pictue">
            <div className='abc'>
                <h1>Movie Center</h1>

            </div>
            {movieName.map((value)=>{
                return(

                    <div className="xyz">
                    <h1>Movie:{value.movie}</h1>
                    <h1>Actore:{value.actore}</h1><br />
                    </div>
                )
            })}
        </div>
    );
}
 
export default Movielist;