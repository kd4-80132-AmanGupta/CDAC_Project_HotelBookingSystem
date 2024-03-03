import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import { useHistory, Link } from "react-router-dom"; 
import axios from "axios"; 
import 'bootstrap/dist/css/bootstrap.css';

const Login = () => {
    const history = useHistory();
    const [emailId, setEmailId] = useState('');
    const [password, setPassword] = useState('');
    const [loginid, setloginid] = useState([]);

    const ProceedLoginusingAPI = (e) => {
        e.preventDefault();
        if (validate()) {
            const inputobj = {
                emailId: emailId,
                password: password
            };
            console.log(inputobj);
            
            axios.post("http://localhost:5020/User/Login", inputobj)
                .then((response) => {
                    console.log(response.data.token);
                    if (Object.keys(response.data).length === 0) {
                        toast.error('Login failed, invalid credentials');
                    } else {
                        toast.success('Success');
                       // sessionStorage.clear();
                        sessionStorage.setItem('emailId', emailId);
                        sessionStorage.setItem('jwttoken', response.data.token);
                        sessionStorage.setItem('RoleId', response.data.roleId);
                        sessionStorage.setItem('UserId', response.data.userId);
                        sessionStorage.setItem('UserName', response.data.name);
                           var id = sessionStorage.getItem("RoleId");
                           debugger
                            setloginid(id);
                        if(id==1){
                            history.push("/user");
                            console.log("1");
                        }
                        else{
                            console.log("2");
                            history.push("/hotelmanager");
                        }
                    }
                })
                .catch((error) => {
                    toast.error('Login Failed due to :' + error.message);
                });
        }
    }

    const validate = () => {
        let result = true;
        if (emailId === '' || emailId === null) {
            result = false;
            toast.warning('Please Enter Username');
        }
        if (password === '' || password === null) {
            result = false;
            toast.warning('Please Enter Password');
        }
        return result;
    }

    return (
        <div className="row justify-content-center">
            <div className="offset-lg-3 col-lg-6 m-4" style={{ marginTop: '100px' }}>
                <form onSubmit={ProceedLoginusingAPI} className="container">
                    <div className="card">
                        <div className="card-header">
                            <h2>User Login</h2>
                        </div>
                        <div className="card-body">
                            <div className="form-group">
                                <label>Email Id <span className="errmsg">*</span></label>
                                <input value={emailId} onChange={e => setEmailId(e.target.value)} className="form-control"></input>
                            </div>
                            <div className="form-group">
                                <label>Password <span className="errmsg">*</span></label>
                                <input type="password" value={password} onChange={e => setPassword(e.target.value)} className="form-control"></input>
                            </div>
                        </div>
                        <div className="card-footer">
                            <button type="submit" className="btn btn-success">Login</button> 
                            <p>Don't have an Account? <Link to="/signup">Sign Up Here</Link></p> 
                            <Link to="/user/forgot-password">Forgot Password?</Link>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default Login;