import React from 'react';
import { Link } from 'react-router-dom';
import { Card } from 'react-bootstrap';
import '../index.css';

const Cart = (props) => {
    return (
      <Link to={`/booking/${props.hotel.hotelId}`} className="cart-link">
            <div className='align-items-center'>
            <Card className="mb-3 m-4" style={{ boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.1)' }}>
                <Card.Img src={props.hotel.hotelUrl} alt="hotel" />
                <Card.Body>
                    <Card.Title>{props.hotel.hotelName}</Card.Title>
                    <Card.Text>{props.hotel.description}</Card.Text>
                    <Card.Text>{props.hotel.address}</Card.Text>
                    <Card.Text>{props.hotel.emailId}</Card.Text>
                </Card.Body>
            </Card>
            </div>
           
        </Link>
    );
};

export default Cart;