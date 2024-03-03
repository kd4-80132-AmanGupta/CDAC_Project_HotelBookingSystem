import axios from "axios";
import { useState, useEffect } from "react";
import Cart from "./HotelCart";

const HotelSearch = () =>{
    const url = "http://localhost:5020/hotels/getAll";
    const [hotels, setHotel] = useState([]);

    useEffect(()=>{
        getHotel();
    })
    async function getHotel(){
        const data = await fetch(url);
        data.json().then((result)=>{
            console.log(result);
        });

    }

}

export default HotelSearch;