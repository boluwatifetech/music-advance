import React from 'react'
import {FaPlay,FaPause,FaForward,FaBackward} from 'react-icons/fa'
import { useGlobalContext } from '../datayer/datalayer'
export default function Player() {
  const [{token,playerState},dispatch]= useGlobalContext()

  const changeTrack=async(type)=>{
    await axios.post(`https://api.spotify.com/v1/me/player/${type}`,
    {
      headers:{
        Authroization:'Bearer' + token,
        "Content-Type":"application/json"
      }
    })
  }
  return (
    <div>
<div className='fa-playstatearea'>
    <FaBackward onClick={()=>changeTrack('previous')}/>
   {playerState?<FaPause/>:<FaPlay/>} 
    <FaForward onClick={()=>changeTrack('next')}/>
</div>

    </div>
  )
}
