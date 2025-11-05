
import React, { useEffect, useState } from 'react'

import { useParams } from 'react-router-dom';

import { toast,ToastContainer } from 'react-toastify';


 const Editer = () => {
 const{id}=useParams();
 const [productsItems,setproductsItems]=useState ({})

    useEffect(()=>{

     fetch(`http://localhost:6200/getuserid/${id}`)
       .then((res)=>res.json())
       .then((data)=>setproductsItems(data))

      },[])

 const handleUpdate=(event)=>{

    event.preventDefault();
    const form = event.target;
    const name = form.name.value.trim();
    const email = form.email.value.trim();
    const password = form.password.value.trim();
    const phone = form.phone.value.trim();
    const gender = form.gender.value.trim();
    const dress = form.dress.value.trim();
    const hobbies = [
      form.hobby1.checked && 'Reading',
      form.hobby2.checked && 'Gaming',
      form.hobby3.checked && 'Cooking',
    ].filter(Boolean); // remove false
    const profilePic = form.profilePic.value.trim();
    const bio = form.bio.value.trim();

    const update={name,email,password,phone,gender,dress,hobbies,profilePic,bio,};
    console.log(update);

    fetch(`https://maxprojectbackend.onrender.com/maxsignedit/${id}`,{

        method:"PATCH",
        headers:{
            'content-type':'application/json'
        },

        body:JSON.stringify(update),
        })
        .then((res)=>res.json())
        .then((data)=>{
        toast.warn("successfully updated");
        window.location.href="/Signupupdate";
        })
    }

 return (
 <div>
<ToastContainer />
    <div class="card update6">
    <div class="card-body update5">
        <h2 className="text-center mb-4">Edit Detial</h2>

        <form onSubmit={handleUpdate}>
          {/* Name */}
          <div className="mb-3">
            <label><b>Name</b></label>
            <input type="text" name="name" defaultValue={productsItems.name} className="form-control" required />
          </div>

          {/* Email */}
          <div className="mb-3">
            <label><b>Email</b></label>
            <input type="email" name="email" defaultValue={productsItems.email} className="form-control" required />
          </div>

          {/* Password */}
          <div className="mb-3">
            <label><b>Password</b></label>
            <input type="password" name="password" defaultValue={productsItems.password} className="form-control" required />
          </div>

          {/* Age */}
          <div className="mb-3">
            <label><b>Phone No</b></label>
            <input type="number" name="phone" defaultValue={productsItems.phone} className="form-control" min="1" required />
          </div>

          {/* Gender (Radio buttons) */}
          <div className="mb-3">
            <label><b>Gender</b></label>
            <div>
              <label className="me-3">
                <input type="radio" name="gender" defaultValue={productsItems.gender} value="Male" required /> Male
              </label>
              <label className="me-3">
                <input type="radio" name="gender" defaultValue={productsItems.gender} value="Female" /> Female
              </label>
              <label>
                <input type="radio"  name="gender" defaultValue={productsItems.gender} value="Other" /> Other
              </label>
            </div>
          </div>

          {/* Favorite Food (Select Dropdown) */}
          <div className="mb-3">
            <label><b>Favorite Dress</b></label>
            <select name="dress" defaultValue={productsItems.dress} className="form-select" required>
              <option value="">Select one</option>
              <option value="Classic">Classic</option>
              <option value="Mordern">Mordern</option>
              <option value="Western">Western</option>
              <option value="Traditional">Traditional</option>
            </select>
          </div>

          {/* Hobbies (Checkboxes) */}
          <div className="mb-3">
            <label><b>Hobbies</b></label>
            <div>
              <label className="me-3">
                <input type="checkbox" defaultValue={productsItems.hobby1} name="hobby1" /> Reading
              </label>
              <label className="me-3">
                <input type="checkbox" defaultValue={productsItems.hobby2} name="hobby2" /> Gaming
              </label>
              <label>
                <input type="checkbox" defaultValue={productsItems.hobby3} name="hobby3" /> Cooking
              </label>
            </div>
          </div>

          {/* Profile Picture URL (Text Input) */}
          <div className="mb-3">
            <label><b>Profile Picture URL</b></label>
            <input type="text" name="profilePic" defaultValue={productsItems.profilePic} className="form-control" required />
          </div>

          {/* Bio (Textarea) */}
          <div className="mb-3">
            <label><b>Short Bio</b></label>
            <textarea name="bio" className="form-control" defaultValue={productsItems.bio} rows="4" required></textarea>
          </div>

          {/* Submit */}
          <div className="mb-3">
            <button type="submit" className="btn btn-success"> Update</button>
          </div>
        </form>
   </div>
   </div></div>
  )
}

export default Editer