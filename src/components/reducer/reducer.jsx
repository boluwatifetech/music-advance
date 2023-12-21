export const initialState={
    user:null,
playlists:[],

item:null,
token:null,
playState:true
}


const reducer=(state,action)=>{


switch(action.type){
    case 'SET-USER':
        return{
            ...state,
            user:action.user
        }
        case 'SET-TOKEN':
            return{
                ...state,
                token:action.token
            }
            case 'SET-PLAYLIST':
                return{
                    ...state,
                    playlists:action.playlists
                }
                case 'DISCOVER-WEEKLY':
                    return{
                        ...state,
                        discover_weekly:action.discover_weekly,
                    }
                    
                    case 'CURRENT-PLAYING':
                        return{
                            ...state,
                            currently_playing:action.currently_playing
                        }

                        case 'PLAYSTATE':
                            return{
                                ...state,
                                playerState:action.playerState
                            }
        default:
            return state;
}
}

export default reducer;