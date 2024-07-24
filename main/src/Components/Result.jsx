import React from 'react'
import '../Css/Result.css'
import anh02 from '../img/anh02.png'
import anh03 from '../img/anh03.png'
function Result() {
  return (
    <div>
        <div className='result'>
           
           
                <h1>6 Results</h1>
                <select className='sort-select'>
                    <option value="">Sort by</option>
                </select>
                <div className='opt1'>
                    <img src={anh02} style={{ alignItems:"center"}}></img>
                </div>
                <div className='opt2'>
                    <img src={anh03} top="6px" left="6px"></img>
                </div>
        </div>
        <div className='Carlist'></div>
        
    </div>
  )
}

export default Result