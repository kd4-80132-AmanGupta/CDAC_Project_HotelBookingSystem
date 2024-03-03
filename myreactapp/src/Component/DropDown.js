import React from 'react'
import { Dropdown } from 'react-bootstrap'
const DropDown = () => {
  return (
    <div> <Dropdown>
    <Dropdown.Toggle style={{marginTop:"1px",color:"black",fontWeight:"bold"}} variant="success" id="dropdown-basic">
          Hi 
      </Dropdown.Toggle>
          <Dropdown.Menu>
              <Dropdown.Item href="/user/manage-acc">Manage Account</Dropdown.Item>
              <Dropdown.Item href="/user/booking-history">Booking History</Dropdown.Item>
              <Dropdown.Item href="/user/logout">Logout</Dropdown.Item>
          </Dropdown.Menu>
    </Dropdown></div>
  )
}

export default DropDown