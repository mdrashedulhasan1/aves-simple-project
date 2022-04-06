import logo from './logo.svg';
import './App.css';
import Home from './Pages/Home/Home/Home';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import NotFound from './Pages/NotFound/NotFound';
import About from './Pages/Home/About/About/About';
import ShopNow from './Pages/Home/ShopNow/ShopNow';
import FAQ from './Pages/Home/FAQ/FAQ';
import Blog from './Pages/Home/Blog/Blog';
import AVES from './Pages/Home/AVES/AVES';

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/">
            <Home></Home>
          </Route>
          <Route path="/home">
            <Home></Home>
          </Route>
          <Route  path="/about">
            <About></About>
          </Route>
          <Route  path="/shop-now">
            <ShopNow></ShopNow>
          </Route>
          <Route  path="/faq">
            <FAQ></FAQ>
          </Route>
          <Route  path="/blog">
            <Blog></Blog>
          </Route>
          <Route  path="/aves">
            <AVES></AVES>
          </Route>
          <Route exact path="*">
            <NotFound></NotFound>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
