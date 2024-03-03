import { Link, useHistory } from 'react-router-dom';
import { Dropdown } from 'react-bootstrap'
import { toast } from 'react-toastify';
import Navbar from './Navbar';
import AddHotel from './AddHotel';
import ManagerNavbar from './ManagerNavbar';
const HotelManager = () => {
    return(
      <>
        <ManagerNavbar/>
        <AddHotel/>
      </>
    );

  };

  export default HotelManager;