
import axios from 'axios'
const authEndPoint='https://accounts.spotify.com/authorize'
const clientId='8845618fcc774dfcbbb95798c67f8f98'
const redirectUri='http://localhost:5175'
const scopes=['user-read-currently-playing',
'user-read-recently-played',
'user-read-playback-state',
'user-read-playback-position',

'user-top-read',
'user-modify-playback-state',
];


export const getTokenFromURI=()=>{
    return window.location.hash.substring(1).split('&')
    .reduce((initial,item)=>{
        let parts=item.split('=');
        initial[parts[0]]=decodeURIComponent(parts[1])

        return initial;
    },{})
}

export const loginEndPoint=`${authEndPoint}?client_id=${clientId}&redirect_uri=${redirectUri}
&scope=${scopes.join('%20')}&response_type=token&show_dialog=true`;


