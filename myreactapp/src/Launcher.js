import Home from "./Home";
import About from "./About";
import Dashboard from "./Dashboard";
import './common.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import NotFound from "./NotFound";
import {Link, Route, Switch} from 'react-router-dom';
 

const logo= "http://localhost:3000/logo.jpg"
function Launcher() {
    return ( <div className="container">
        <img src={logo} alt="logo" className="logo"/>
        <hr/>
        <Link to="/home">Home</Link> {" | "}
        <Link to="/about">About us</Link> {" | "}
        <Link to="/db">Dashboard</Link> {" | "}
        <hr/>
        <Switch>
            <Route exact path="/" component={Home}></Route>
            <Route exact path="/home" component={Home}></Route>
            <Route exact path="/about" component={About}></Route>
            <Route exact path="/db" component={Dashboard}></Route>
            <Route exact path="**" component={NotFound}></Route>
        </Switch>
    </div> );
}

export default Launcher;