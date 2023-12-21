import React from 'react'
import Coverall from '../coverall/coverall'
import {AppProvider} from '../datayer/datalayer'
import reducer,  {initialState} from '../reducer/reducer'

export default function Conatainerapp() {
  return (
    <div>
      <AppProvider initialState={initialState} reducer={reducer}>
      <Coverall/>
      </AppProvider>
     
    
      
    </div>
  )
}
