import Home from "./Component/Hotel";
import About from "./Component/About";
import Dashboard from "./Component/Dashboard";
import './common.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import NotFound from "./NotFound";
import {Link, Route, Switch} from 'react-router-dom';
import Hotel from "./Component/AddHotel";
import HotelSearch from "./Component/HotelSearch";
 

const logo= "http://localhost:3000/logo.jpg"
function Launcher() {
    return ( <div className="container">
        <img src={logo} alt="logo" className="logo"/>
        <hr/>
        <Link to="/home">Home</Link> {" | "}
        <Link to="/about">About us</Link> {" | "}
        <Link to="/db">Dashboard</Link> {" | "}
        <Link to="/hotel">Hotel</Link> {" | "}
        <Link to="/hotelSearch">HotelSearch</Link> {" | "}
        <hr/>
        <Switch>
            <Route exact path="/" component={Home}></Route>
            <Route exact path="/home" component={Home}></Route>
            <Route exact path="/about" component={About}></Route>
            <Route exact path="/db" component={Dashboard}></Route>
            <Route exact path="/hotel" component={Hotel}></Route>
            <Route exact path="/hotelSearch" component={HotelSearch}></Route>
            <Route exact path="**" component={NotFound}></Route>
        </Switch>
    </div> );
}

export default Launcher;