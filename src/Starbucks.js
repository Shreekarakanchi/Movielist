import './starbucks.css'
import cup from './images/cup.svg'
import chacup from './images/chacup.png'
import logo from './images/user.png'

const Starbucks = () => {
    return ( 
        <div className="starbucks">
        <header>
            <nav>
                <a href=""><img src={cup} alt="" /></a>
                <div className="nav1">
                    <ul type="none">
                        <li><a href="">Home</a></li>
                        <li><a href="">Student Support</a></li>
                        <li><a href="">Degree Search</a></li>
                        <li><a href="">FQA</a></li>
                        <li><a href="">Work For Starbuks</a></li>
                    </ul>
                </div>
                <div className="nav2">
                    <ul>
                        <button className='dark'>Get Info</button>
                        <button className='yellow'>Apply Now</button>
                        
                    </ul>
                </div>
            </nav>
            <div className="yellowbar">
                <p> <span><b>Work for Starbucks? </b></span>
                Chat with current scholars and ASU representatives at our next Virtual Open House on 
                <b> # March 23rd from 9:30 to 11 a.m. PST. <a href="">Register now!</a></b>
                </p>
            </div>
        </header>
        <div className="green">
            <div className="discription">
                <h1>Quality support <br /> crafted for you</h1>
                <p>Resources for Starbucks students at ASU Online</p>
            </div>
            <img src={chacup} alt="" />
        </div>

        <div className="next">
            <ul type="none">
                <li><a href="">Services</a></li>
                <li><a href="">Success Team</a></li>
                <li><a href="">Get Info</a></li>
            </ul>
            <div className="s">
                <h1>Support services for Starbucks partners at ASU</h1>
        <p>Were committed to ensuring all our students have the tools and resources they need to earn a top-ranked degree at ASU Online. Our support services help students navigate the online learning experience and get academic assistance so they can succeed. Browse our support services below.</p>
            </div>
            <div className="happy">
    <div className="h">
        <img src={logo} alt="" />
<h1>Flexible learning</h1>
<h3>The flexibility of online courses allows you to learn from anywhere in the world.There are six start dates each year.</h3>
    </div>
    <div className="h">
    <img src={logo} alt="" />
    <h1>1 to 1 support</h1>
    <h3>You'll receive support from an enrollment coach, financial aid counselor,academic advisor and success coach during your journey</h3>
    </div>
    <div className="h">
    <img src={logo} alt="" />
    <h1>Online tutoring</h1>
    <h3>You can take advantage of several tutoring resources online. Online tutoring is live, free and avilable to all online students</h3>
    </div>
    
   </div>
   <div className="happy">
    <div className="h">
    <img src={logo} alt="" />
    <h1>Career services</h1>
    <h3>Boost your job search skills,build yourresume and engance your interview skills.ASU offers year-round career support.</h3>
    </div>
    <div className="h">
    <img src={logo} alt="" />
    <h1>Disability support</h1>
    <h3>The Disability Resource Center provides services to qualified students with disabilities on all ASU campuses</h3>
    </div>
    <div className="h">
    <img src={logo} alt="" />
    <h1>360 life services</h1>
    <h3>As an online student, you'll have access to a comprehensive support program that offers counselling programs, crisis intervention and more.</h3>
    </div>
    
   </div>
        </div>
        

        </div>
    )
}
 
export default Starbucks;