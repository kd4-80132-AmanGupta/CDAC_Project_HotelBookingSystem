import React from 'react';
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import { useState,useEffect } from 'react';
import axios from 'axios';
import '../Styles/common.css';


function Profile() {
    const emailId = "kunal@gmail.com";
    const url = "http://localhost:5020/users/getByEmail/" + emailId;
    const [user,setUser] = useState({name:"",mobileNo:"",emailId:""});
    const[userId,setUserId] = useState(0);
    const [isEditMode, setIsEditMode] = useState(false);

    const OnEditClick = () => {
      setIsEditMode(true);
    };

    const OnSaveClick = () => {
      var updateUrl = "http://localhost:5020/users/updateUser/"+userId;
      axios.post(updateUrl,user).then((response)=>{
        FetchRecord();
      }).catch((error) => {
        console.error(error);
      }).finally(() => {setIsEditMode(false);});
    };

    const FetchRecord = async ()=>{
      await axios.get(url).then((result)=>{
        console.log(result);
        setUser(result.data);
        setUserId(result.data.userId);
      }).catch((error)=>{
        console.log(error);
      });
    }

    const OnTextChanged = (args)=>{
      var usr = {...user};
      usr[args.target.name] = args.target.value;
      setUser(usr);
    }


    useEffect(()=>{
        FetchRecord();
    },[]);

    return (
              <div className="container" >
                  <div className="card card1" >
                    <h5 className="card-header">Profile</h5>
                    <div className="card-body">
                    <form className="row g-4" method='post'>
                        <div className="col-md-8">
                            <label htmlFor="inputName" className="form-label">Name</label>
                            <input type="text" disabled={!isEditMode} className="form-control" name='name' onChange={OnTextChanged} value={user.name}/>
                        </div>
                        <div className="col-8">
                            <label htmlFor="inputMobileNo" className="form-label">Mobile No</label>
                            <input type="text" disabled={!isEditMode} className="form-control" name='mobileNo' value={user.mobileNo} onChange={OnTextChanged} placeholder="i.e. 9898989898"/>
                        </div>
                        <div className="col-8">
                            <label htmlFor="inputEmail4" className="form-label">Email ID</label>
                            <input type="email" disabled={!isEditMode} className="form-control" name='emailId' onChange={OnTextChanged} value={user.emailId}/>
                        </div>
                        <div className="col-8">
                          {isEditMode ? (
                            <button type="button" className="btn btn-primary b1" onClick={OnSaveClick}>
                              Save Changes
                            </button>
                            ) : (
                            <button type="button" className="btn btn-primary b1" onClick={OnEditClick}>
                              Edit
                            </button>
                          )}
                        </div>
                      </form>
                    </div>
                  </div>
                </div>);
            }
export default Profile;