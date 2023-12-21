import React,{useEffect,useState} from 'react'
import './footer.css'
import {FaPlay} from 'react-icons/fa'
import axios from 'axios'
import Semifoot from './semifoot'
import Player from '../player/player'
import { useGlobalContext } from '../datayer/datalayer'
import  SpotifyPlayer  from 'react-spotify-web-playback'
export default function Footer() {

  const [{currently_playing},dispatch]=useGlobalContext()

 
  return(
    <div className='coverall-footer'>

      <div className='left'>
 {
currently_playing?.tracks.items.map((item)=>(
  <Semifoot track={item.track}/>
))
          }
      </div>
     
     <div className='middle-footer'>
      <Player/>
     </div>
        
       </div>
  )





   
  
}
