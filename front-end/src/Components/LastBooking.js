import React, { useContext, useEffect } from 'react'
import { seats } from '../Data'
import '../CSS/LastBookingDeatils.css'
import BsContext from '../Context/BsContext'
const LastBooking = () => {
  const context = useContext(BsContext)
  const {handleGetBooking,lastbookingdetails}=context
  useEffect(()=>{
    handleGetBooking()
  },[handleGetBooking])
  return (
    <div className='Last_booking_details_container_main'>
      <h2 className='Last_booking_details_header'>Last Booking details : </h2>
      {
        lastbookingdetails?(
          <>
          
          <div className='Seats_Conatiner'>
        <p  className='Seats_header'>Seats:</p>
        <ul className='seats'>
        {seats.map((seat,index)=>(
          <li className='seat_value' key={index} >
           {seat} : {Number(lastbookingdetails.seats[seat])}
          </li>
        ))}

        </ul>
      </div>
      <p className='Slot' style={{textAlign:"left"}}>Slot:<span>{lastbookingdetails.slot}</span><span></span></p>
      <p className='movie'>Movie: <span>{lastbookingdetails.movie}</span></p>
          </>
        ):(
          <p className='No_previous_booking'>No previous booking</p>
        )
      }
     
      </div>
  )
}

export default LastBooking