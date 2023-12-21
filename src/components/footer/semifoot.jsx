import React from 'react'

export default function Semifoot({track}) {
  return (
    <div> 
      <div className='songrow-img'>
    <img src={track.album.images[2].url} alt='am a boy'/>
    </div>
   
    <div className='songrow-container'>
        <h1>{track.name}</h1>
   
    <p>
        {
            track.artists.map((artist)=>artist.name).join(',')
        }
        {track.album.name}
    </p>
    </div></div>
  )
}
