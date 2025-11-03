import React, { useState } from 'react';
import { login } from '../Auth';


import { Link, useNavigate } from 'react-router-dom';
import './Login.css'

const Login = () => {

    const [username,setusername]=useState('');
    const [password,setpassword]=useState('');
    const [error,seterror]=useState('');
    const [success,setsucess]=useState('')
     const navigate=useNavigate()

    const handleSubmit=async(e)=>{
        e.preventDefault();
        try{
            const token = await login(username, password);
            console.log('Login successful, token:', token);
            alert('Login successful');
            setusername('')
            setpassword('')
            setsucess('Successfully Logged In')
            seterror('')
            navigate("/")
            
        }catch(err){
            console.log('Login Error',err)
            seterror('Logged In Failed')
            setsucess('')
        
        }
   }

  return (
<div className="login-page">
      <div className="login-form">
        <form onSubmit={handleSubmit}>
          <h2><b>Login</b></h2>
    <label>UserName</label>
    <input 
        type='text'
        name='name' 
        value={username}
        onChange={(e)=>setusername(e.target.value)}/>

 <br></br><br></br>

 <label>Password</label>
    <input 
        type='password'
        name='password' 
        value={password}
        onChange={(e)=>setpassword(e.target.value)}/>

<br></br><br></br>

    <button type='submit'>Login</button>
    {success && <p style={{color:"Green"}}>{success}</p>}
    {error && <p style={{color:'red'}}>{error}</p>}

    <p>New User ? <Link to="/Register">Register </Link></p>

</form>
 </div> </div>)
}

export default Login
