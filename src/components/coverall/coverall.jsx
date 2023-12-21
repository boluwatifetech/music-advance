import React,{useState,useEffect} from 'react'
import Sidebar from '../sidebar/sidebar'
import Feed from '../feed/feed'
import {FaBars,FaTimes} from 'react-icons/fa'
import Footer from '../footer/footer'
import './coverall.css'
import Login from '../login/login'
import { useGlobalContext } from '../datayer/datalayer'
import SpotifyWebApi from 'spotify-web-api-js'
import { getTokenFromURI} from '../../spotify'
const spotify=new SpotifyWebApi()


export default function Coverall() {
    const [{user,token},dispatch]=useGlobalContext()
    const [show,setShow]=useState(false)
    
    useEffect(()=>{
        const hash=getTokenFromURI()
        window.location.hash=''
        const _token=hash.access_token;

        if(_token){
dispatch({
type:'SET-TOKEN',
token:_token,
}); 

spotify.setAccessToken(_token);

spotify.getMe().then((user)=>{
    dispatch({
        type:'SET-USER',
        user:user,
    })
});

spotify.getUserPlaylists().then((playlists)=>{
    dispatch({
        type:'SET-PLAYLIST',
        playlists:playlists,
    })
})

spotify.getPlaylist('73jSmaQ9TIl6iPefGpTnJi').then((week)=>{
    dispatch({
        type:'DISCOVER-WEEKLY',
        discover_weekly:week
    })
})

 }
    },[])
  return !token?<Login/>: (
    <div className='container-allapp'>
        <button onClick={()=>setShow(true)}>
            <FaBars className='fa-allapp'/>
        </button>
    <div className='coverall-app' >

<div className={show?'sidebar-coverall':'sidebar-coverall hide'}>
<button onClick={()=>setShow(false)}>
    <FaTimes className='fa-allapp times'/>
</button>
<Sidebar spotify={spotify}/>
</div>

<div className='feed-cover'>
<Feed spotify={spotify}/>
</div>

        </div>
        <div className='footer-cover'>
        <Footer spotify={spotify}/>
        </div>

        </div>
  )
}
