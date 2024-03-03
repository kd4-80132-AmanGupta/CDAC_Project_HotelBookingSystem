import React from 'react';
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import { useState,useEffect } from 'react';
import axios from 'axios';
import '../Styles/common.css';

function ChangePassword() {

    const url = "http://localhost:5020/users/ChangePassword";
    const[changePass,setChangePass] = useState({emailId:'',oldPassword:'',newPassword:''});

    const OnTextChanged = (e)=>{
      var temp = {...changePass};
      temp[e.target.name] = e.target.value;
      setChangePass(temp);
    }

    const UpdateRecord = ()=>{
      axios.post(url,changePass).then((result)=>{
        console.log(result);
        
      }).catch((error)=>{
        console.log(error);
      });
    }
    
    

    return ( <>
            <div className="container">
                  <div className="card card1" >
                    <h5 className="card-header">Change Password</h5>
                    <div className="card-body">
                    <form className="row g-4" method='post'>
                        <div className="col-md-8">
                            <label htmlFor="emailId" className="form-label">Email ID</label>
                            <input type="email"  className="form-control" name='emailId' onChange={OnTextChanged} />
                        </div>
                        <div className="col-8">
                            <label htmlFor="oldpassword" className="form-label">Old Password</label>
                            <input type="password"  className="form-control" name='oldPassword' onChange={OnTextChanged}/>
                        </div>
                        <div className="col-8">
                            <label htmlFor="newpassword" className="form-label">New Password</label>
                            <input type="password"  className="form-control" name='newPassword' onChange={OnTextChanged}/>
                        </div>
                        <div className="col-8">
                          <button type="submit" className="btn btn-danger b1" onClick={UpdateRecord}>Change Password</button>
                        </div>
                      </form>
                    </div>
                  </div>
                </div>
    </> );
}

export default ChangePassword;