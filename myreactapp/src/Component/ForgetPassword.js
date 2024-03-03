import React from 'react';
import { useState,useEffect } from 'react';
import '../Styles/forgotpass.css';
import axios from 'axios';
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';

const ForgotPassword =()=>{
    debugger
    const[email,setEmail]=useState('');
    // const[status,setStatus]= useState(false);
    const history=useHistory();

    const url="http://localhost:5020/users/forgotPassword/"+email;

    
    const CheckMail =async ()=>{
        await axios.get(url).then((result)=>{
            debugger
            if(result.data === true){
                console.log(result.data);
               history.push('/user/reset-password');
            }
            else{
                alert('Invalid EmailId Please try again');
            }
        }).catch((error)=>{
            console.log(error);
        });
    }

    return (<>
            <div className="card login-form" style={{marginLeft:"30%",marginTop:"75px",width:"40%"}}>
                <div className="card-body">
                    <h3 className="card-title text-center"><b>Forgot Password</b></h3>
                    
                    <div className="card-text form1">
                        {/* <form method='get'> */}
                            <div className="form-group">
                                <label htmlFor="exampleInputEmail1">Enter your email address and we will send you an OTP to reset your password.</label>
                                <input type="email" className="form-control form-control-sm mt-2" placeholder="Enter your email address"name='email' value={email} onChange={e=>{setEmail(e.target.value)}}/>
                            </div>

                            <button type="submit" className="btn btn-primary btn-block" onClick={CheckMail} style={{marginLeft:"40%"}}>Send OTP</button>
                        {/* </form> */}
                    </div>
                </div>
            </div>
    </>)
}
export default ForgotPassword;