import React from 'react';
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import { useState,useEffect } from 'react';
import axios from 'axios';
import '../Styles/common.css';
import Swal from 'sweetalert2';

const token = sessionStorage.getItem('jwttoken');

const BookingHistory =()=>{
    const[bookings,setBookings] = useState([]);
    const[booking,setBooking] = useState({});
    const[status,setStatus] = useState({s:""});
    const email = sessionStorage.getItem('UserId');
    const url = "http://localhost:5020/booking/getbyemail/"+email;
    var count = 0;
    const config = {
        headers: {
            Authorization: `Bearer ${token}` // Assuming your token is stored in the variable token
        }
    };
    const FetchRecords = async()=>{
        await axios.get(url,config).then((result)=>{
            console.log(result.data);
            setBookings(result.data);
        }).catch((error)=>{
            console.log(error);
        });
    }
    const CancelBooking = async (Id)=>{
        Swal.fire({
            title: "Are you sure you want to cancel booking?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, Cancel it!"
          }).then(async(result) => {
            if (result.isConfirmed) {
                const updateUrl = "http://localhost:5020/booking/delete/"+Id;

                await axios.delete(updateUrl).then((result)=>{
                setStatus({"s":result.data});
                Swal.fire({
                    title: "Cancelled!",
                    text: "Your booking has been cancelled.",
                    icon: "success"
                });
            }).catch((error) => {
                console.log(error);
            });
            }
        });
    }

    useEffect(()=>{
        FetchRecords()
    },[status]);
    
    
    return(<>
            <div className="card card1" style={{marginLeft:"150px"}}>
                <h5 className="card-header" style={{backgroundColor:"aqua",textAlign:"center"}}>Booking History</h5>
                <div className="card-body">
                    <div className="container">
                        <div className="table-responsive">
                            <table className="table table-bordered">
                                <thead>
                                    <tr>
                                        <th>S.No</th>
                                        <th>Customer ID</th>
                                        <th>Room ID</th>
                                        <th>Booking ID</th>
                                        <th>Hotel Name</th>
                                        <th>Check-In</th>
                                        <th>Check-Out</th>
                                        <th>Booking Status</th>
                                        <th>Booking Price</th>
                                        <th colSpan={"2"}>Actions</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    { bookings.map((booking)=>{
                                        return (<>
                                                <tr key={booking.bookingId}>
                                                    <td>{count=count+1}</td>
                                                    <td>{booking.userId}</td>
                                                    <td>{booking.roomId}</td>
                                                    <td>{booking.bookingId}</td>
                                                    <td>{booking.hotelName}</td>                                                    
                                                    <td>{new Date(booking.checkIn).toLocaleString()}</td>
                                                    <td>{new Date(booking.checkOut).toLocaleString()}</td>
                                                    <td>{booking.bookingStatus === true ? "Booked":"Cancelled"}</td>
                                                    <td>{booking.bookingPrice}</td>
                                                    <td><button className='btn btn-warning' onClick={()=>{CancelBooking(booking.bookingId)}}>Cancel</button></td>
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
        </>
    )
}
export default BookingHistory;
