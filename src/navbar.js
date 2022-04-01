import './navbar.css'
import home from './images/home.png'
import about from './images/user.png'
import add from './images/ribbon.png'
import { Link } from 'react-router-dom'
const Navbar = () => {
    return (  
        <div className="nav1">
            {/* <h1>Navbar Component </h1> */}
            
                <div className="Logo">
                <h2>Seriescenter</h2>
                </div>
                <div className="navlink">
               <ul type="none">
                  <li><Link to='/'><img src={home} alt="" /></Link></li>
                  <li> <Link to='/about'><img src={about} alt="" /></Link></li>
                  <li><Link to='/Add'><img src={add} alt="" /></Link></li>
                  <li><Link to='/Popular'><img src={home} alt="" /></Link></li>
               </ul>
               </div>
        
        </div>
    );
}
 
export default Navbar;