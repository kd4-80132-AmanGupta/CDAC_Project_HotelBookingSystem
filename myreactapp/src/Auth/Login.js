import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import { useHistory } from "react-router-dom";
import axios from "axios"; 

const Login = () => {

  const history = useHistory();

    const [emailId, setEmailId] = useState('');
    const [password, setPassword] = useState('');
  

    useEffect(() => {
        sessionStorage.clear();
    }, []);

    const ProceedLoginusingAPI = (e) => {
        e.preventDefault();
        if (validate()) {
            const inputobj = {
                emailId: emailId,
                password: password
            };
           console.log(inputobj);
            axios.post("http://localhost:5216/users/Login", inputobj)
                .then((response) => {
                    console.log(response.data);
                    if (Object.keys(response.data).length === 0) {
                        toast.error('Login failed, invalid credentials');
                    } else {
                        toast.success('Success');
                        sessionStorage.setItem('emailId', emailId);
                        sessionStorage.setItem('jwttoken', response.data.jwtToken);
                        history.push("/home");
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
        <div className="row">
            <div className="offset-lg-3 col-lg-6" style={{ marginTop: '100px' }}>
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
                            <button type="submit" className="btn btn-primary">Login</button> 
                        </div>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default Login;
