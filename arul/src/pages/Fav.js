import React from 'react'
import './Fav.css';


import { useSelector,useDispatch } from 'react-redux'
import { deleteFromfav } from '../redux/FavSlice';
import Navbar from '../priya/Navbar';
import Footer from '../priya/Footer';

const Fav = () => {
const favItems=useSelector((state)=>state.fav.favitems);
const dispatch=useDispatch()


  return (
    <div>
      <Navbar/>
    
    <div  className='container'>
      <h1 CLASS="head1"><center>FAVOURITE ITEMS</center></h1>
          <div class="row row-cols-4">

  {favItems.map((item)=>(
 
 <div class="col-3" key={item.id}>

         <div class="card" >
   <img src={item.img} width={450}heigth={300} class="card-img-top" alt="..."/>
   <div class="card-body">
     <h4>{item.price}</h4>
     <p class="card-text">{item.title}</p>
     <button class="btn btn-dark darkbtn" onClick={()=>dispatch(deleteFromfav(item))}>Remove</button>
     
 </div> </div>  </div>
   ))}
   </div> </div><Footer/>
 </div> )}
export default Fav

