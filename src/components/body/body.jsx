import React from 'react'
import { useGlobalContext } from '../datayer/datalayer'
import Songrow from './songrow'
import './body.css'
export default function Body() {
    const [{discover_weekly},dispatch]= useGlobalContext()
 console.log(discover_weekly)
    return (
    <div className='coverall-bodysection'>
      
      <div className='cover-body'>
      <div className='img-body'>
            <img 
            src={discover_weekly?.images[0].url}/>
        </div>
        <div className='content-body'>
            <h2>PLAYLIST</h2>
            <h3>discover weekly</h3>
            <p>{discover_weekly?.description}</p>
        </div>
      </div>
        

        <div className='body-songs'>
        </div>
        
        <div className='main-musicarea'>
          {
discover_weekly?.tracks.items.map((item)=>(
  <Songrow track={item.track}/>
))
          }
          </div>
    </div>
  )
}
