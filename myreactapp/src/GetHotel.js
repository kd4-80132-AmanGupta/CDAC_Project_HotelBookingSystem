import axios from "axios";
import { useState, useEffect } from "react";
import Home from "./Component/Home";

function Hotel() {
  const url = "http://localhost:5020/hotels/";
  const [hotels, setHotel] = useState([]);
  const [hotel, sethotel] = useState({
    userId: "",
    hotelName: "",
    description: "",
    emailId: "",
    pinCode: "",
    state: "",
    address: "",
  });

  const FetchData = async () => {
    const getUrl = url + "getAll";
    await axios.get(getUrl).then((result) => {
      setHotel(result.data);
    });
  };

  useEffect(() => {
    FetchData();
  }, []);

  <Home hotel = {hotels}></Home>

}
