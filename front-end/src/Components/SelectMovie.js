import React, { useContext } from 'react'
import { movieList } from '../Data'
import RadioComponent from './RadioComponent'
import '../CSS/SelectMovie.css'
import BsContext from '../Context/BsContext'
const SelectMovie = () => {
  const context=useContext(BsContext)
  const {movie,changeMovie}=context

  const handleChangeMovie=(value)=>{
    changeMovie(value);
    window.localStorage.setItem("movie",value)
    
  }
  return (
    <>
    <h1 className='SM_heading'>Select a Movie</h1>
    <div className='SM_container'>
    {movieList.map((element,index)=>{
        return (
           <RadioComponent text={element} key={index} data={movie} changeSelection={handleChangeMovie}/> 
        )
    })}</div></>
  )
}

export default SelectMovie