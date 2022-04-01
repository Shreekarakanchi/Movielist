import './App.css'
import kgf from './images/kgf.jpg'
import rrr from './images/rrr.avif'
import james from './images/james.avif'
import raj from './images/rajakumar.jpg'

const Home = () => {
    // let [movieName,setName]=useState(   [] )
    // useEffect(()=>{
    //     fetch("http://localhost:7000/Movie")
    // .then(res=>{
    //     return res.json();
    // })
    // .then(data=>{
    //     setName(data)
    // })
    // },[])

    // let clickImage=(id)=>{
    //     var newData= movieName.filter((Value)=>Value.id != id)
    //         setName(newData)
    //         alert('deleted...')
    // }
    // useEffect(()=>{
    //     console.log("it working...");
    // },[movieName])
    return ( 
        <div className="parent">
            <div className="popularseries" >
              <a href="https://www.youtube.com/watch?v=Qah9sSIXJqk" target="-blank">  <img src={kgf} alt=""  width="300px" height="400px"/></a>
               <a href="https://www.youtube.com/watch?v=NgBoMJy386M" target="-blank"> <img src={rrr} alt="" width="300px" height="400px"/></a>
               <a href="https://www.youtube.com/watch?v=kYUD2fYV3ho" target="_blank">  <img src={james} alt=""width="300px" height="400px" /></a>
               <a href="https://www.youtube.com/watch?v=q9Yh9HcOmlo" target="_blank">  <img src={raj} alt="" width="300px" height="400px"/></a>
            </div>
           
            {/* <Serieslisk1 data={movieName} pageTitle="Popular Series" delete={clickImage}/>
            <Serieslisk1 data={movieName.filter((value)=>value.Movie == "KGF-2")} pageTitle="Popular KGF Series"/>
            <Serieslisk1 data={movieName.filter((value)=>value.Director=="Directored by Chethan")} pageTitle="Popular Series"/>
           */}
            </div>  
             );
            
    
}

 
export default Home;