const Serieslisk1 = (props) => {
    let movieName=props.data;
    let title=props.pageTitle;
    let clickImage=props.delete;
    return ( 
        <div className="sagar">
            <h1 style={{color:"blue",textAlign:"center"}}>{title}..</h1>
        {movieName.map((value)=>{
            return(
                
                <div class="book">
              <h6>{value.id}</h6>      
            <h1>{value.Movie}</h1>
            <h3>{value.Director}</h3>

            <svg id="i-download" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="32" height="32" fill="none" stroke="currentcolor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" onClick={()=> clickImage(value.id)}>
                <path d="M9 22 C0 23 1 12 9 13 6 2 23 2 22 10 32 7 32 23 23 22 M11 26 L16 30 21 26 M16 16 L16 30"  />
            </svg>
        </div>
        
            )
        })}
    </div>
      );
}
 
export default Serieslisk1;