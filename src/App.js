import './App.css';

import Navbar from './navbar'
// import Serieslist from './Serieslist';
// import Movielist from './Movielist';
import Home from './Home';
import Footer from './Footer';
import About from './about';
import Add from './Add';
import PageNotfound from './404';
import Popular from './Popular';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';



function App() {


  return (
    <Router>
      <div className="App">

        <Navbar />
        <div className="home">
          {/* <Serieslist/>  */}
          {/* <Movielist/> */}
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route exact path="/about">
              <About />
            </Route>
            <Route exact path="/Add">
              <Add />
            </Route>
            <Route exact path="/Popular">
              <Popular />
            </Route>
            <Route path="*">
              <PageNotfound />
            </Route>
          </Switch>


          <Footer />
        </div>

      </div>
    </Router>
  );
}

export default App;