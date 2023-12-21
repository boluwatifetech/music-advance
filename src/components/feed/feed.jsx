import React from 'react'
import Header from '../header/header'
import Body from '../body/body'
import './feed.css'
export default function Feed({spotify}) {

  console.log(spotify)
  return (
    <div className='coverbody-all'>
      <div>
        <Header spotify={spotify}/>
      </div>
    
    <div className='body'>
      <Body/>
    </div>

    </div>
  )
}
