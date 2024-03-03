import"../../node_modules/bootstrap/dist/css/bootstrap.css";
import axios from "axios";
import { useState, useEffect } from "react";
import Cart from "./HotelCart";
import { Navbar } from "react-bootstrap";
import { Link, useHistory } from 'react-router-dom';
import { toast } from 'react-toastify';
import { Container, Row, Col, FormControl, Button } from 'react-bootstrap';


function Home(props) {
  const url = "http://localhost:5020/hotels/";
  const [hotels, setHotel] = useState([]);
  const [searchInput, setSearchInput] = useState();
  const [htl, sethtl] = useState([]);

  const FetchData = async () => {
    const getUrl = url + "getAll";
    await axios.get(getUrl).then((result) => {
      setHotel(result.data);
    });
  };
  const filterData = async (searchInput, h) => {
    //console.log(htl);
    const filterData = h.filter((hotel)=>hotel.hotelName.includes(searchInput));
    //console.log(filterData);
    return filterData;
  };
  const history = useHistory();

  const logout = () => {
    sessionStorage.clear();

    history.push("/login");
    toast.success('Logout successfully');
  };
  useEffect(() => {
    FetchData();
  }, []);

  useEffect(() => {
    sethtl(hotels);
}, [hotels]);
//   useEffect(()=>{
//     getHotel();
// },[])
// async function getHotel(){
//     const data = await fetch(url);
//     data.json().then((result)=>{
//         console.log(result);
//         setHotel(result);
//         sethtl(result);
//     });

// }

  // useEffect(() => {
  //     sethtl(hotels);
  // }, [searchInput]);
  
  return (
    <>
     {/* <div className='login-btn'>
              <Link className="links" to="/login">Login</Link>
            </div>
            <div className='login-btn'>
              <Link onClick={logout} className="links" to="/logout" >Logout</Link>
            </div> */}
            <Container className="search-container">
            <Row className="align-items-center">
                <Col md={6} className="mb-2 mb-md-0">
                    <FormControl
                        type="text"
                        className="search-input"
                        placeholder="Search"
                        value={searchInput}
                        onChange={(e) => setSearchInput(e.target.value)}
                    />
                </Col>
                <Col md={4} className="mb-2 mb-md-4">
                    <Button
                        className="search-btn"
                        onClick={() => {
                            const data = filterData(searchInput, hotels);
                            data.then((result) => {
                                sethtl(result);
                            });
                            sethtl(data);
                        }}
                    >
                        Search
                    </Button>
                </Col>
            </Row>
        </Container>
      <div className="hotel">
        {htl.map((hotel) => {
          return <Cart hotel={hotel} key={hotel.hotelId}></Cart>;
        })}
      </div>
    </>
  );
}


export default Home;
