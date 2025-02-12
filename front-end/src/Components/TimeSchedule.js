import React, { useContext } from 'react'
import { Slots } from '../Data'
import RadioComponent from './RadioComponent'
import '../CSS/TimeSchedule.css'
import BsContext from '../Context/BsContext'
const TimeSchedule = () => {
  const context=useContext(BsContext)
  const {time,changetime}=context
  const handleChangeItem=(val)=>{
    changetime(val)
    window.localStorage.setItem("slot")
  }
  return (
    <>
    <div className='Slot_container'>
        <h1 className='TS_heading'>
        Select a Schedule
        </h1>
        <div className='TS_main_Conatiner'>
        {Slots.map((element,index)=>{
            return(
                <RadioComponent text={element} key={index} data={time} changeSelection={handleChangeItem} />
            )
        })}

        </div>
    </div>
    </>
  )
}

export default TimeSchedule