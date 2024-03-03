import React from 'react';
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import { useState,useEffect } from 'react';
import axios from 'axios';
import '../Styles/common.css';
import Swal from 'sweetalert2';
import { Link } from 'react-router-dom/cjs/react-router-dom.min';


const Feedback =()=>{
    const[listHotels,setListHotels] = useState([]);
    var id = sessionStorage.getItem("UserId");
    const url = "http://localhost:5020/hotel/getHotelsByUserId/"+id;
    var count=0;

    const FetchRecords = async()=>{
        await axios.get(url).then((result)=>{
            console.log(result.data);
            setListHotels(result.data);
        }).catch((error)=>{
            console.log(error);
        });
    }
    useEffect(()=>{
        FetchRecords()
    },[]);

    return (<>
            <div className="card card1" style={{marginLeft:"150px"}}>
                <h5 className="card-header" style={{backgroundColor:"aqua",textAlign:"center"}}>Feedback</h5>
                <div className="card-body">
                    <div className="container">
                        <div className="table-responsive">
                            <table className="table table-bordered">
                                <thead>
                                    <tr>
                                        <th>S.No</th>
                                        <th>Hotel Name</th>
                                        <th>Hotel Address</th>
                                        <th>Feedback</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    { listHotels.map((hotel)=>{
                                        return (<>
                                                <tr>
                                                    <td>{count=count+1}</td>
                                                    <td>{hotel.hotelName}</td>
                                                    <td>{hotel.address}</td>
                                                    <td><button className='btn btn-warning'><Link  to="/user/rate&review">Rate & Review</Link></button></td>
                                                </tr>
                                        </>)
                                    })
                                    }
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
    </>)
}
export default Feedback;