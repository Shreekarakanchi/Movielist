import { useState } from "react";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
const Add = () => {
    let history=useHistory();
    let[id,setid]=useState('')
    let[Movie,setMovie]=useState('')
    let[Director,setDirector]=useState('')
    let handlesSubmit=(e)=>{
       e.preventDefault();
       let data={id,Movie,Director}
       fetch("http://localhost:7000/Movie",{
        method:'POST',
        headers:{'Content-Type':'application/json'},
        body:JSON.stringify(data)
    })
    .then(()=>{
        alert('Data Added successfully')
        history.push('/Popular')
    })
    }
    return ( 
        <div className="addiation">
         <form onSubmit={handlesSubmit}>
         <h1>Add Here Movie's</h1>
            <input type="text"  placeholder="id" required value={id} onChange={(e)=>{setid(e.target.value)}}/><br />
            <input type="text" placeholder="Movie" required  value={Movie} onChange={(e)=>{setMovie(e.target.value)}}/><br />
            <input type="text" placeholder="Director" required value={Director} onChange={(e)=>{setDirector(e.target.value)}} /><br />
            <button>Add</button><br />
            <button>Clear</button>
         </form>
        </div>
     );
}
 
export default Add;