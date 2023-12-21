import React from 'react'
import './body.css'
import {FaPlay} from 'react-icons/fa'
export default function Songrow({track}) {

    
  return (
    <div className='songrow'>
        <div className='songrow-img'>
        <img src={track.album.images[0].url} alt=''/>
        </div>
       
        <div className='songrow-container'>
            <h1>{track.name}</h1>
       
        <p>
          <div className='fa-play'>
          <FaPlay/>
          </div>
        
            {
                track.artists.map((artist)=>artist.name).join(',')
            }
            {track.album.name}
        </p>
        </div>
    </div>
  )
}
