import React from 'react'
import { useState, useEffect } from 'react';
import axios from "axios";

const AddHotel = () => {  

    const uId = sessionStorage.getItem('UserId');
    const url = "http://localhost:5020/hotels/";
    const [hotels,setHotels] = useState([]);
    const [hotel,setHotel] = useState({userId : parseInt(uId,10) , hotelName : "" , description : "" , email : "" , pinCode : "" , state : "" , address : "" , hotelUrl : ""});
   // const [hotelUpdate,setHotelUpdate] = useState({userId : uId , hotelName : hotel.hotelName , description : hotel.description , email : hotel.email , pinCode : hotel.pinCode , state : hotel.state , address : hotel.address , hotelUrl : hotel.hotelUrl});
   const [HOTELID,SETHOTELID] = useState({hotelId : ""});
  const token = sessionStorage.getItem('jwttoken');
    const FetchData = async () => {
        try {
            const getUrl = "http://localhost:5020/hotel/GetHotelByManagerId/" + uId;
            const response = await fetch(getUrl);
            if (!response.ok) {
                throw new Error('Failed to fetch data');    
            }
            const data = await response.json();
            setHotels(data);
           // console.log(hotels);
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    };
    const OnTextChanged=(args)=>{
        console.log(hotels);
        var copyOfHotel = {...hotel};
        copyOfHotel[args.target.name]=args.target.value;
        setHotel(copyOfHotel);
    }
    const AddRecord=()=>{
        const postUrl = url + "add";
        console.log(hotel);
        axios.post(postUrl,hotel).then((result)=>{
            console.log(hotel);
            if(result.data.affectedRows!==undefined && result.data.affectedRows>0){
                FetchData();
                Reset();
            }
        });
    }
    // const setForUpdate = () => {
    //     debugger
    //     return {
    //         "userId": uId,
    //         "hotelName": hotel.hotelName,
    //         "description": hotel.description,
    //         "emailId": hotel.emailId,
    //         "pinCode": hotel.pinCode,
    //         "state": hotel.state,
    //         "address": hotel.address,
    //         "hotelUrl": hotel.hotelUrl
    //     };
    // };
    
    const EditRecord = (hotelId) => {
        const hotelToEdit = hotels.find(hotel => hotel.hotelId === hotelId);
        if (hotelToEdit) {
            setHotel({"userId":uId,"hotelName":hotelToEdit.hotelName,"description":hotelToEdit.description,"email":hotelToEdit.email,"pinCode":hotelToEdit.pinCode,"state":hotelToEdit.state,"address":hotelToEdit.address,"hotelUrl":hotelToEdit.hotelUrl});
            console.log(hotel);
            SETHOTELID({"hotelId":hotelToEdit.hotelId});
          //   const updateData = {
          //       "userId": uId,
          //       "hotelName": hotelToEdit.hotelName,
          //       "description": hotelToEdit.description,
          //       "emailId": hotelToEdit.email,
          //       "pinCode": hotelToEdit.pinCode,
          //       "state": hotelToEdit.state,
          //       "address": hotelToEdit.address,
          //       "hotelUrl": hotelToEdit.hotelUrl
          //   };
           
          //  setHotelUpdate(updateData);
        }
         };
         const config = {
          headers: {
              Authorization: `Bearer ${token}` // Assuming your token is stored in the variable token
          }
      };
      const UpdateData = async () => {
        var updateUrl = url + "updateHotel/" + HOTELID.hotelId;
        console.log(hotel);
       // debugger
      // console.log(hotelUpdate);
       await axios.post(updateUrl, hotel, config).then((result) => {  
        //   if ( result.data.affectedRows !== undefined && result.data.affectedRows > 0
        //   ) {
        //     console.log(result);
        //    // FetchData();
        //   }
        console.log(result);
        }).catch((err)=>{console.log(err);});
    }
    

        // const UpdateData=()=>{
        //     var updateUrl = url + "updateHotel/" + hotel.hotelId;
        //     axios.post('http://localhost:5020/hotels/updateHotel/'+hotel.hotelId,hotelUpdate).then((res)=>{
        //         console.log(res);
        //     }).catch((err)=>{
        //         console.log(err);
        //     })
        // }



    const DeleteRecord = (hotelId) => {
        debugger;
        console.log(hotelId);
        var deleteUrl = url + "deleteHotel/" + hotelId;
        axios.post(deleteUrl).then((result) => {
          if (
            result.data.affectedRows !== undefined &&
            result.data.affectedRows > 0
          ) {
            // ShowMessage("Record Deleted successfully!!");
            window.confirm("Confirm to delete",FetchData());
            
          }
        });
      };

    const Reset = ()=>{
        setHotel({userId : "" , hotelName : "" , description : "" , email : "" , pinCode : "" , state : "" , address : "" });
    }
useEffect(()=>{
    FetchData();
   
},[])


  return (
    <div>
    <div className='table-responsive'>
           <table className='table table-bordered'>
               <tbody>
               <tr>
                   <td></td>
                       <td>
                           <input type='text' hidden name='userId'
                           value={hotel.userId}
                           onChange={OnTextChanged}/>
                       </td>
                   </tr>
               <tr>
                   <td>Hotel Name</td>
                       <td>
                           <input type='text' name='hotelName'
                           value={hotel.hotelName}
                           onChange={OnTextChanged}/>
                       </td>
                </tr>
                <tr>
                       <td>Description</td>
                       <td>
                           <input type='text' name='description'
                           value={hotel.description}
                           onChange={OnTextChanged}/>
                       </td>
                </tr>
                <tr>
                       <td>Email</td>
                       <td>
                           <input type='text' name='email'
                           value={hotel.email}
                           onChange={OnTextChanged}/>
                       </td>
                   </tr>
                   <tr>
                       <td>Address</td>
                       <td>
                           <input type='text' name='address'
                           value={hotel.address}
                           onChange={OnTextChanged}/>
                       </td>
                    </tr>    
                   <tr>
                       <td>State</td>
                       <td>
                           <input type='text' name='state'
                           value={hotel.state}
                           onChange={OnTextChanged}/>
                       </td>
                   </tr>
                   <tr>
                       <td>Pin Code</td>
                       <td>
                           <input type='text' name='pinCode'
                           value={hotel.pinCode}
                           onChange={OnTextChanged}/>
                       </td>
                   </tr>
                   <tr>
                       <td>Hotel Image URL</td>
                       <td>
                           <input type='text' name='hotelUrl'
                           value={hotel.hotelUrl}
                           onChange={OnTextChanged}/>
                       </td>
                   </tr>
                   <tr>
                       <td></td>
                       <td>
                           <button className='btn btn-primary' onClick={AddRecord}>Add Record</button>{" "}                        
                           <button className='btn btn-primary' onClick={UpdateData}>Update</button>{" "}
                           <button className='btn btn-primary' onClick={Reset}>Reset</button>{" "}   
                </td>
                   </tr>
               </tbody>
           </table>
       </div>
       <div className="table-responsive">
        <table className=" table table-bordered">
          <thead>
            <tr>
              <td>Hotel Name</td>
              <td>Description</td>
              <td>Email</td>
              <td>Address</td>
              <td>Pincode</td>
              <td>State</td>
              <td>Edit</td>
              <td>Delete</td>
            </tr>
          </thead>
          <tbody>
            {hotels.map((h) => {
              return (
                <tr key={h.hotelId}>
                  <td className="p-3 mb-2 bg-info text-white">
                    {h.hotelName}
                  </td>
                  <td className="p-3 mb-2 bg-info text-white">
                    {h.description}
                  </td>
                  <td className="p-3 mb-2 bg-info text-white">
                    {h.email}
                  </td>
                  <td className="p-3 mb-2 bg-info text-white">
                    {h.address}
                  </td>
                  <td className="p-3 mb-2 bg-info text-white">
                    {h.pinCode}
                  </td>
                  <td className="p-3 mb-2 bg-info text-white">
                    {h.state}
                  </td>
                  <td className="p-3 mb-2 bg-info text-white">
                    <button
                      className="btn btn-secondary"
                      onClick={() => {
                        EditRecord(h.hotelId);
                      }}
                    >
                      Edit
                    </button>
                  </td>
                  <td className="p-3 mb-2 bg-info text-white">
                    <button
                      className="btn btn-danger"
                       onClick={() => {
                         DeleteRecord(h.hotelId);
                       }}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>{" "}
  
   </div>
  )
}

export default AddHotel;

// const [sendata,setData]=useState({
//     userId:hotel.uId,
// })