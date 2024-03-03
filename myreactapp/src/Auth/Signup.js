import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import axios from "axios";

const Signup = () => {
    const [roleId, setRoleId] = useState(7);
    const [name, setUserName] = useState("");
    const [password, setPassword] = useState("");
    const [emailId, setemailId] = useState("");
    const [mobileNo, setMobileNo] = useState("");
  
    const IsValidate = () => {
      let isproceed = true;
      let errormessage = "Please fill the value of ";
      if (name === null || setUserName === "") {
        isproceed = false;
        errormessage += " Fullname";
      }
      if (password === null || password === "") {
        isproceed = false;
        errormessage += " Password";
      }
      if (emailId === null || emailId === "") {
        isproceed = false;
        errormessage += " emailId";
      }
  
      if (!isproceed) {
        toast.warning(errormessage);
      } else {
        if (/^[a-zA-Z0-9]+@[a-zA-Z0-9]+\.[A-Za-z]+$/.test(emailId)) {
        } else {
          isproceed = false;
          toast.warning("Please enter a valid emailId");
        }
      }
      return isproceed;
    };
  
    const handleRadioChange = (event) => {
      setRoleId(Number(event.target.value));
    };
  
    const handlesubmit = (e) => {
  
      e.preventDefault();
      let regobj = {name, password, emailId, mobileNo, roleId };
      console.log(regobj);
      debugger
      if (IsValidate()) {
        axios.post("http://localhost:5020/users/signup", regobj)
          .then((res) => {
            toast.success("Registered successfully.");
          })
          .catch((err) => {
            toast.error("Failed: " + err.message);
          });
      }
    };
  
    return (
      <div className="row justify-content-center">
        <div className="offset-lg-3 col-lg-6 m-4 ">
          <form className="container" onSubmit={handlesubmit} method="post">
            <div className="card">
              <div className="card-header">
                <h1>Registration</h1>
              </div>
              <div className="card-body">
                <div className="row">
                  <div className="col-lg-6">
                    <div className="form-group">
                      <label>
                        Full Name <span className="errmsg">*</span>
                      </label>
                      <input
                        value={name}
                        onChange={(e) => setUserName(e.target.value)}
                        className="form-control"
                      />
                    </div>
                  </div>
                  <div className="col-lg-6">
                    <div className="form-group">
                      <label>
                        Password <span className="errmsg">*</span>
                      </label>
                      <input
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        type="password"
                        className="form-control"
                      />
                    </div>
                  </div>
                  <div className="col-lg-6">
                    <div className="form-group">
                      <label>
                        emailId <span className="errmsg">*</span>
                      </label>
                      <input
                        value={emailId}
                        onChange={(e) => setemailId(e.target.value)}
                        className="form-control"
                      />
                    </div>
                  </div>
                  <div className="col-lg-6">
                    <div className="form-group">
                      <label>
                        Phone <span className="errmsg"></span>
                      </label>
                      <input
                        value={mobileNo}
                        onChange={(e) => setMobileNo(e.target.value)}
                        className="form-control"
                      />
                    </div>
                  </div>
                  <div className="col-lg-6">
                    <div className="form-group">
                      <label>
                        <input
                          type="radio"
                          value={1}
                          checked={roleId === 1}
                          onChange={handleRadioChange}
                        />
                        User
                      </label>
                      &nbsp;&nbsp;&nbsp;
                      <label>
                        <input
                          type="radio"
                          value={2}
                          checked={roleId === 2}
                          onChange={handleRadioChange}
                        />
                        Manager
                      </label>
                  
                    </div>
                  </div>
                </div>
              </div>
              <div className="card-footer">
                <button type="submit" className="btn btn-success">
                  Sign Up
                </button>
                <p>Already have an account? <Link to="/login">Login Here</Link></p> 
              </div>
            </div>
          </form>
        </div>
      </div>
    );
  };
  
  export default Signup;