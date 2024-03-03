import axios from 'axios';
import React from 'react';
import { useState,useEffect } from 'react';
import { ToastContainer, toast } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';
import '../../node_modules/react-toastify/dist/react-toastify'

import '../Styles/forgotpass.css';
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';

const ResetPassword =()=>{
    const history = useHistory();
    const[status,setStatus]=useState(false);
    const[sendEmail,setSendEmail]= useState({emailId:'',OTP:'',newPassword:''});
    const url = "http://localhost:5020/users/resetPassword";

    const OnTextChanged=(e)=>{
        var temp ={...sendEmail};
        temp[e.target.name] = e.target.value;
        setSendEmail(temp);
    }

    const Reset=()=>{
        setSendEmail({emailId:'',OTP:'',newPassword:''});
    }

    const SendMail =()=>{
        axios.post(url,sendEmail).then((result)=>{
            if(result.data === true) {
                console.log(result.data);

                toast.success('Password Reset Successfully');
                history.push('/login');
            }
            else{
                // toast.error('Reset Failed, Enter correct OTP or Email');
                console.log(result.data);
                setStatus(true);
            }
        }).catch((error) => {
            console.log(error);
        })
    }

    useEffect(()=>{
        Reset();
    },[status]);

    return(<>
            <div className="card login-form" style={{marginLeft:"30%",marginTop:"75px",width:"40%"}}>
                <div className="card-body">
                    <h3 className="card-title text-center"><b>Reset Password</b></h3>
                    
                    <div className="card-text form1">
                        {/* <form method='post'> */}
                            <div className="form-group">
                                <label htmlFor="exampleInputEmail1">Email</label>
                                <input type="email" className="form-control form-control-sm mt-2" name='emailId' onChange={OnTextChanged}/>
                            </div>
                            <div className="form-group">
                                <label htmlFor="exampleInputEmail1">Enter OTP</label>
                                <input type="text" className="form-control form-control-sm mt-2" name='OTP' onChange={OnTextChanged}/>
                            </div>
                            <div className="form-group">
                                <label htmlFor="exampleInputEmail1">New Password</label>
                                <input type="text" className="form-control form-control-sm mt-2" name='newPassword' onChange={OnTextChanged}/>
                            </div>
                            <button type="submit" className="btn btn-primary btn-block" onClick={SendMail} style={{marginLeft:"40%"}}>Reset Password</button>
                        {/* </form> */}
                    </div>
                </div>
            </div>
    </>)
}
export default ResetPassword;
