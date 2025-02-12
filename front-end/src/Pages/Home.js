import React, { useContext } from 'react'
import SelectMovie from '../Components/SelectMovie'
import '../CSS/Home.css'
import LastBooking from '../Components/LastBooking'
import TimeSchedule from '../Components/TimeSchedule'
import SelectSeat from '../Components/SelectSeat'
import BsContext from '../Context/BsContext'
const Home = () => {

  const context = useContext(BsContext)
  const {movie,handlePostBooking,setErrorPopup,setErrorMesssage}=context
  const handleBookNow=()=>{
    if(!movie){
      setErrorPopup(true)
      setErrorMesssage("please select a movie")

    }
    else{
      handlePostBooking()
    }

  }
  return (
    <div className='container'>
    <div className='wrapper'>
    <div className='Select_movie_component'>
        <SelectMovie/>
        </div>
        <div className='Last_booking_details'>
        <LastBooking />
        </div>
        </div>
        <div className='time_seats_container'>
        <TimeSchedule />
        <SelectSeat />
        
        <button className='BN_btn' onclick={()=>{
          handleBookNow()

        }}>Book Now</button>
        </div>



    </div>
  )
}

export default Home