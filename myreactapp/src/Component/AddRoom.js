import "../../node_modules/bootstrap/dist/css/bootstrap.min.css";
//import "../styles/inputField.css";
import { useState } from "react";
import axios from "axios";

function AddRoomForm() {

    const [roomData,setRoomData] = useState({roomCatagoryId:"1",totalRooms:"",roomPrice:"",hotelId:"5"}); 

    const onTextChange = (e)=>{
       let copy = {...roomData};
       copy[e.target.name] = e.target.value;
       setRoomData(copy);
    }

    const handleSubmit = (event) => {
    
        event.preventDefault(); 
      };
    const url="http://localhost:5020/room/addRoom";
    const addRoom = async ()=>{
        
       await axios.post(url, roomData)
        .then(response => console.log(response.data))
        .catch(error => {
            console.error("Error adding room:", error);
        });
    console.log(roomData);
    }

    return ( 
        <div className="container">
            <form onSubmit={handleSubmit}>
                <h1>Add Room Form</h1>
                <hr/>

                <div className="col-lg-4 offset-lg-4 space">
                <label className="form-label">Room Type</label>
                    <select className="form-select" name="roomCatagoryId" onChange={onTextChange} >
                      <option value ="1">Standard</option>
                      <option value ="2">Deluxe</option>
                      <option value ="3">Suite</option>
                      <option value ="4">Special</option>
                    </select>
                </div>

                <div className="col-lg-4 offset-lg-4 space">
                    <label className="form-label">Total Rooms</label>
                    <input className="form-control" type="number" name="totalRooms" value={roomData.totalRooms} onChange={onTextChange}
                    placeholder="Enter Total Rooms"/>
                </div>

                <div className="col-lg-4 offset-lg-4 space">
                    <label className="form-label">Room Price</label>
                    <input className="form-control" type="number" name="roomPrice"value={roomData.roomPrice} onChange={onTextChange}
                    placeholder="Enter Room Price"/>
                </div>

                {/* <div className="col-lg-4 offset-lg-4 space">
                    <label className="form-label">Total Rooms</label>
                    <input className="form-control" type="file" name="" />
                </div> */}

                <div className="col-lg-4 offset-lg-4 btn-space btn-space">
                  <button className="btn btn-primary" onClick={addRoom}>Add Room</button>
                </div>
                

            </form>

        </div>

     );
}

export default AddRoomForm;