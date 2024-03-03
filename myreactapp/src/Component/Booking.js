import React, { useState, useEffect } from 'react';
import axios from "axios";
import { useParams } from 'react-router-dom';
import { useHistory, Link } from "react-router-dom"; 


const Booking = () => {
  const history = useHistory();
  const url = "http://localhost:5020/hotels/";
  const token = sessionStorage.getItem('jwttoken');
  const userId = sessionStorage.getItem("UserId");
  const { hotelId } = useParams();
  const [hotelById, setHotelById] = useState(null);
  const [checkIn, setCheckInDate] = useState({checkIn : ""});
  const [checkOut, setCheckOut] = useState({checkOut : ""});
  const [noOfRoom, setNoOfRoom] = useState(1);
  const [bookingMessage, setBookingMessage] = useState('');

  useEffect(() => {
    const fetchHotelData = async () => {
      try {
        //debugger
        console.log(hotelId);
        const getUrl = url + "gethotel/" + hotelId;
        const response = await axios.get(getUrl);
        setHotelById(response.data);
      } catch (error) {
        console.error('Error fetching hotel data:', error);
      }
    };

    fetchHotelData();
  }, [hotelId]);

  const bookHotel = async () => {
    // debugger;
    setBookingMessage('Booking in progress...');
    try {
      const postUrl =  "http://localhost:5020/booking/add";
    //debugger
      const bookingData = {
        "hotelId": parseInt(hotelId, 10), // Convert hotelId to integer
        "userId": parseInt(userId, 10), // Convert userId to integer
        "roomId": 2,
        "checkIn": checkIn,
        "checkOut": checkOut,
        "noOfRoom": parseInt(noOfRoom, 10), // Convert noOfRoom to integer
        "bookingPrice": 1000.900 
      };
      const config = {
        headers: {
            Authorization: `Bearer ${token}` // Assuming your token is stored in the variable token
        }
    };
      console.log(bookingData);
      await axios.post(postUrl, bookingData,config).then(()=>{
        history.push('/user')
      });
      setBookingMessage('Your booking is successful.');
    } catch (error) {
      console.error('Error booking hotel:', error);
      setBookingMessage('Failed to book. Please try again.');
    }
  };

  return (
    <div className="container">
  {bookingMessage && <p className="alert alert-success">{bookingMessage}</p>}
  {hotelById ? (
    <div className="border rounded-2xl mt-4 p-4 d-flex justify-content-between align-items-center shadow-sm p-3 mb-5 bg-white rounded">
      <div>
        <h2 style={{fontSize:30}}>{hotelById.hotelName}</h2>
        <p style={{fontSize:16}}>{hotelById.state}</p>
        <p style={{fontSize:16}}>{hotelById.pinCode}</p>
        <p style={{fontSize:16}}>Address: {hotelById.address}</p>
        <p style={{fontSize:16}}>Description: {hotelById.description}</p>
      </div>
      <div className="d-flex">
        <div className="py-3 px-4">
          <label className="form-label" style={{fontSize:18}}>Check in:</label>
          <input type="date" className="form-control" value={checkIn} onChange={e => setCheckInDate(e.target.value)} />
        </div>
        <div className="py-3 px-4 border-start">
          <label className="form-label" style={{fontSize:18}}>Check out:</label>
          <input type="date" className="form-control" value={checkOut} onChange={e => setCheckOut(e.target.value)} />
        </div>
        <div className="py-3 px-4 border-start">
          <label className="form-label" style={{fontSize:18}}>Number of rooms:</label>
          <input type="number" className="form-control" value={noOfRoom} onChange={e => setNoOfRoom(e.target.value)} />
        </div>
      </div>
      <button onClick={bookHotel} className="btn btn-primary mt-4">Book</button>
    </div>
  ) : (
    <div className="text-center mt-4">Loading...</div>
  )}
 
</div>

  
  );
};

export default Booking;