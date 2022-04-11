import React, { useState } from 'react'
import { Navigate } from 'react-router-dom'
import { useAuthContext } from '../context/authContext'

const Login = () => {
    const [email, setEmail]=useState('')
    const [password, setPassword]=useState('')
    const {user, signUpWithEmail, signInWithGmail}=useAuthContext()

    const onSubmit=(e)=>{
        e.preventDefault();
        if (!email || !password) {
          alert("enter email and password");
        } else {
          signUpWithEmail({ email, password });
        }
    }
  return user? (<Navigate to='/'/>):(
    <div className="container">
    <div className='form-card'>
      <h1 className='title'>Join the chat room</h1>
      <form onSubmit={onSubmit}>
       <p className='label'>Email</p>
       <input value={email} onChange={(e)=>setEmail(e.target.value)} className='input' type="email" placeholder="email"/>
       <p className='label'>Password</p>
       <input value={password} onChange={(e)=>setPassword(e.target.value)}  className='input' type='password' placeholder='Password'/>
       <button  className='submit-btn'>Sign in</button>

      </form>
      <button type='submit' onClick={signInWithGmail} className='social-btn'>Sign in with gmail</button>
    </div>
   </div>)
  
}

export default Login