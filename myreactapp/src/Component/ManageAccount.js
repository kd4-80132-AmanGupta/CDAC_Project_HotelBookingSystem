import React from 'react';
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import { useState,useEffect } from 'react';
import axios from 'axios';
import '../Styles/common.css';
import Profile from './Profile';
import ChangePassword from './ChangePassword';


function ManageAccount() {
                  return(<>
                    <Profile/>
                  <ChangePassword/>
                        </>    
                  )
            }
export default ManageAccount;