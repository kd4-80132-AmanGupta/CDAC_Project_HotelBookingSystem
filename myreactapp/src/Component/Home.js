import React from 'react'
import Footer from "./Footer"
import { BrowserRouter as Router, Route} from 'react-router-dom';
import Login from '../Auth/Login';
import Signup from '../Auth/SignUp';
import Hotel from './Hotel';
import AddHotel from './AddHotel';
import Navbar from './Navbar';
import UserDashboard from './User';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'
import Booking from './Booking';
import ManageAccount from './ManageAccount';
import BookingHistory from './History';
import NavbarUser from './NavbarUser';
import DropDown from './DropDown';
import Logout from './Logout';
import EmptyComponent from './Empty';
import HotelManager from './HotelManager';
import WithoutLogin from './WithoutLogin';
import ForgotPassword from './ForgetPassword';
import ResetPassword from './ResetPassword';
import Feedback from './Feedback';
var id = sessionStorage.getItem("RoleId");
const Home = () => {
  return (
    <Router>
    {id ==null ?  <WithoutLogin /> : <EmptyComponent /> }
    <ToastContainer/>
    {/* <AddHotel/> */}
    <routes>
          <Route path="/login" component={Login} />
          <Route path="/logout" component={Logout } />
          {/* <Route path="/navbaruser" component={NavbarUser} /> */}
          <Route path="/signup" component={Signup} />
          <Route path="/user" component={UserDashboard} /> 
          <Route path="/hotelmanager" component={HotelManager} /> 
          <Route path="/booking/:hotelId" component={Booking} /> 
          <Route path="/user/manage-acc" component={ManageAccount} />
          <Route path="/user/booking-history" component={BookingHistory} />
          <Route path="/user/forgot-password" component={ForgotPassword} />
          <Route path="/user/reset-password" component={ResetPassword} />
          <Route path="/user/feedback" component={Feedback} />
    </routes>
    <Footer />
    </Router>
   )
}

export default Home