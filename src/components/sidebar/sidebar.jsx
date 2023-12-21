import React,{useState,useEffect} from 'react'
import {data} from './sidebardata'
import {FaPlay} from 'react-icons/fa'
import { useGlobalContext } from '../datayer/datalayer'
import './sidebar.css'
export default function Sidebar() {

const [{playlists},dispatch]=useGlobalContext()




  return (
    <div className='coverall-side'>
     
     
       {
        data.map((data)=>{
            const {title,icon,id}=data
            return(
                <>
                <div key={id} className='sidebar-minicover'>
<p>{icon}</p>
<h3>{title}</h3>
                </div>
              
                </>

            )
        })
       }
  <div className='playlist-container'>
                    <h3>playlist</h3>
                  {
                    playlists?.items?.map(play=>(
                        <p>{play.name}</p>
                    )

                  )}
                </div>
    </div>
  )
}
