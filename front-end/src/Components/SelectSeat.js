import React, { useContext } from 'react'
import { seats } from '../Data'
import SeatInput from './SeatInput'
import '../CSS/SelectSeat.css'
import BsContext from '../Context/BsContext'
const SelectSeat = () => {
  const context=useContext(BsContext)
  const {noofseat,changeNoofSeats}=context
  return (
    <div className='SS_Wrapper'>
    <h1 className='SS_heading'>Select Seats:</h1>
    <div className='SS_main_container'>
    {seats.map((el,index)=>{
      return(
        <SeatInput key={index} text={el} noofseat={noofseat} changeNoofSeats={changeNoofSeats}/>
      )
    })}
    </div>
    </div>
  )
}

export default SelectSeat