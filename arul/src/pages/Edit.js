
import React, { useEffect, useState } from 'react'

import { useParams } from 'react-router-dom';

import { toast,ToastContainer } from 'react-toastify';


const Edit = () => {

 const{id}=useParams();
 const [productsItems,setproductsItems]=useState ({})
 
    useEffect(()=>{

     fetch(`http://localhost:6200/getmaxid/${id}`)
       .then((res)=>res.json())
       .then((data)=>setproductsItems(data))
      },[])

 const handleUpdate=(event)=>{
    event.preventDefault();

       const form = event.target;
       const age = form.age.value.trim();
       const img = form.img.value.trim();
       const food = form.food.value.trim();
       const des = form.des.value.trim();
       const price = form.price.value.trim();
       const quantity = 1;
   
       const newData = { age, img, food, des, price, quantity };

    fetch(`http://localhost:6200/maxedit/${id}`,{

        method:"PATCH",
        headers:{
            'content-type':'application/json'
        },
        body:JSON.stringify(newData),
        })

        .then((res)=>res.json())
        .then((data)=>{
        toast.warn("successfully updated");
        window.location.href="/update";

        })
    }

 return (
 <div>
<ToastContainer />
    <div className="container mt-4">
      <ToastContainer />

      <div className="card shadow-sm p-4">
        <h2 className="text-center mb-4">Edit Food Item</h2>

        <form onSubmit={handleUpdate}>
          <div className="mb-3">
            <label htmlFor="age" className="form-label"><b>Age</b></label>
            <input type="text" name="age" id="age" className="form-control" defaultValue={productsItems.age} />
          </div>

          <div className="mb-3">
            <label htmlFor="img" className="form-label"><b>Image URL</b></label>
            <input type="text" name="img" id="img" className="form-control"  defaultValue={productsItems.img}/>
          </div>

          <div className="mb-3">
            <label htmlFor="food" className="form-label"><b>Food Name</b></label>
            <input type="text" name="food" id="food" className="form-control" defaultValue={productsItems.food} />
          </div>

          <div className="mb-3">
            <label htmlFor="des" className="form-label"><b>Description</b></label>
            <input type="text" name="des" id="des" className="form-control" defaultValue={productsItems.des} />
          </div>

          <div className="mb-3">
            <label htmlFor="price" className="form-label"><b>Price</b></label>
            <input type="number" name="price" id="price" className="form-control" defaultValue={productsItems.price}/>
          </div>

          <div className="text-center">
            <button type="submit" className="btn btn-primary px-5">Update</button>
          </div>
        </form>
      </div>
    </div>

    </div>

  )

}


export default Edit