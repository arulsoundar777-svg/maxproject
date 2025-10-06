import React from 'react'
import Map2 from '../mapping/Map2'


import './Product.css';
import{useSelector,useDispatch}from "react-redux"
import { addTocart,deleteFromCart} from '../redux/CartSlice';
import { addTofav,deleteFromfav } from '../redux/FavSlice';

function Women() { 
  
  const cartitems=useSelector((state)=>state.cart.cartitems);
  const favitems=useSelector((state)=>state.fav.favitems)
  
  const dispatch=useDispatch();


  const addCart=(item)=>{
    dispatch(addTocart(item))
  }
 
  const deleteCart=(item)=>{
    dispatch(deleteFromCart(item))
}

  const addfav=(item)=>{
    dispatch(addTofav(item))
  }
 
  const deletefav=(item)=>{
    dispatch(deleteFromfav(item))
}

  return (
    <div>
         <section class="sec7"><br/>
             <div class="container">
   <div class="row row-cols-4">

  {Map2.map((item)=>(
 
 <div class="col" key={item.id}>
 

         <div class="card" >
      
            {
   favitems.find(Items=>Items.id===item.id) ?
(
  <div className='faviucion' onClick={()=>deletefav(item)} >
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-heart-fill" viewBox="0 0 16 16">
  <path fill-rule="evenodd" d="M8 1.314C12.438-3.248 23.534 4.735 8 15-7.534 4.736 3.562-3.248 8 1.314"/>
</svg>
    </div>

)        :
    (
      <div className='faviucion' onClick={()=>addfav(item)}>
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-heart" viewBox="0 0 16 16">
  <path d="m8 2.748-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385.92 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143q.09.083.176.171a3 3 0 0 1 .176-.17C12.72-3.042 23.333 4.867 8 15"/>
</svg>
      </div>
      
  )

} 
   <img src={item.img} width={450}heigth={300} class="card-img-top" alt="..."/>
   
   <div class="card-body">
     <h4>{item.price}</h4>
     <p class="card-text">{item.title}</p>     
{
   cartitems.find(Items=>Items.id===item.id) ?
    (<button class="btn btn-danger cartbutton" onClick={()=>deleteCart(item)} > Remove From Cart </button>)
        :
    (<button class="btn btn-danger cartbutton"  onClick={()=>addCart(item)} > Add To Cart </button>)

}      
   </div> </div>  </div>
   ))}
   </div> 
   </div>
 
         </section>
    </div>
  )
}

export default Women