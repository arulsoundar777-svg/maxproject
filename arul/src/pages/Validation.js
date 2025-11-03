import React, { useState } from 'react'

const Form = () => {
    
    const[form,setForm]=useState({
        username:"",
        email:"",
        password:"",
    
      })

      const[error,setError]=useState({})


      const validation=()=>{
        const newError={}
        if(!form.username) newError.username="invalid username";

        if(!form.email) newError.email="invalid email";
       
        else
        if(!/\S+@\S+\.\S+/.test(form.email)) newError.email=" missing error";

         if(!form.password) newError.password="invalid password";
        
         else{
          if(form.password.length<6) newError.password="must in 6 character";
          if(!/[a-z]/.test(form.password)) newError.password="must one lowercase character";
        
          if(!/[A-Z]/.test(form.password)) newError.password="must one uppercase character";
          if(!/[!@#$%&*?]/.test(form.password)) newError.password="must one in special character";
    
        }
        return newError;
      }

       const handleChange=(e)=>{ 
        const{name,value}=e.target;

        setForm({
          ...form,
          [name]:value,
        })
       }

       const handleSumbit=(e)=>{
        e.preventDefault();
        
        const validationerror=validation();
        
        if(Object.keys(validationerror).length===0)
        {
          console.log("form valid",form)
          setForm({
            username:"",
            email:"",
            password:"",
          })
          setError({});
        }
          
          else{
            setError(validationerror)
          }
        
       }
          
      return (
        <div>
      <form onSubmit={handleSumbit}>
            <div class="form1">
                <label><b>USERNAME</b></label>
                <input type="text" name='username'   placeholder='username' onChange={handleChange} value={form.username} className='ms-3'/>
                {error.username&&<p>{error.username}</p>}
    
            </div>
            
            <div className='form2'>
            <label><b>EMAIL</b></label>
            <input type="email"  name='email' placeholder='Enter email' onChange={handleChange} value={form.email} className='ms-3'/>
            {error.email&&<p>{error.email}</p>}
            </div>

            <div class="form3">
                <label><b>PASSWORD</b></label>
                <input type="password"name='password' placeholder='Enter Password'onChange={handleChange} value={form.password} className='ms-3' />
                {error.password&&<p>{error.password}</p>}
            </div>
            
            <button class="btn btn-primary">submit</button>
            
            
            </form>
        </div>
      )
}

export default Form