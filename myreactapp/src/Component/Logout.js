import { Link, useHistory } from 'react-router-dom';
import { Dropdown } from 'react-bootstrap'
import { toast } from 'react-toastify';
const Logout = () => {
    const history = useHistory();

    sessionStorage.clear();

    history.push("/");
    toast.success('Logout successfully');
  };

  export default Logout;