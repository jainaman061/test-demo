import React from 'react'
import "../CSS/SeatInput.css"
const SeatInput = ({key,text,noofseat,changeNoofSeats}) => {
  const chage_seats=(val)=>{
    changeNoofSeats({...noofseat,[val.target.name]:Number(val.target.value) })
    window.localStorage.setItem(
      "seats",
      JSON.stringify({
        ...noofseat,
        [val.target.name]:Number(val.target.value)
      })
    )
  }
  return (
    <div className='form-check-label'>
    <span className='text'>
    {
        text
    }
    </span>
    <input type='number' className='seats-input' placeholder='0' max={30} min={0} name={text} onChange={chage_seats} value={noofseat[text]}></input>
    </div>
  )
}

export default SeatInput