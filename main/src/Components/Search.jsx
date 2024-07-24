import React from 'react'
import '../Css/Search.css'
import { CiSearch } from "react-icons/ci";
function Search() {
  return (
    <div>
        <div>
        <CiSearch className='seacrhIcon'/>
        <input type='text' placeholder='Search' className='search'></input>
        </div>
    </div>
  )
}

export default Search
