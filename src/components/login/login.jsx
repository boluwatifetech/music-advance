import React from 'react'
import { loginEndPoint } from '../../spotify'
import './login.css'
export default function Login() {
  return (
    <div className='login-spotify'>
        <a href={loginEndPoint} className='atag-login'>login</a>
    </div>
  )
}
