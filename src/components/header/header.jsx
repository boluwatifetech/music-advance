import React from 'react'
import {FaUser,FaSearch} from 'react-icons/fa'
import { useGlobalContext } from '../datayer/datalayer'
import './header.css'
export default function header() {
  const [{user},dispatch]=useGlobalContext()
  return (
    <div className='coverall-header'>

        <div className='cover-searchheader'>
<FaSearch className='fa-search'/>
<input type='text' placeholder='search for artist,songs'/>
        </div>

        <div className='cover-rightuser'>
<img src={user?.images[0]?.url} alt={FaUser}/>
<p>{user?.display_name}</p>
        </div>
    </div>
  )
}
