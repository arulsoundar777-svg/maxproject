import React from 'react'
import './Cart.css';


import { useSelector,useDispatch } from 'react-redux'
import { deleteFromCart,updateQuantity } from '../redux/CartSlice';

const Cart = () => {
const cartitems1=useSelector((state)=>state.cart.cartitems);
const dispatch=useDispatch()

const incrementCart=(id,quantity)=>{
         dispatch(updateQuantity({id, quantity : quantity+1}))
      }


  const decrementCart=(id,quantity)=>{
    if(quantity>1){
         dispatch(updateQuantity({id, quantity : quantity-1}))
    }
  }

  return (
    <div className='container'>
          <div class="row row-cols-4">

  {cartitems1.map((item)=>(
 
 <div class="col-3" key={item.id}>

         <div class="card" >
   <img src={item.img} width={450}heigth={300} class="card-img-top" alt="..."/>
   <div class="card-body">
     <h4>{item.price}</h4>
     <p class="card-text">{item.title}</p>
     <button class="btn btn-dark darkbtn" onClick={()=>dispatch(deleteFromCart(item))}>Remove</button>
     
     <div className='' style={{display:'flex',justifyContent:'center',marginBottom:'20px'}}>
      <div className='qntbtn'>
        <button class="btn btn-light quanbtn" onClick={()=>{decrementCart(item.id,item.quantity)}}>-</button>
            {item.quantity}
        <button class="btn btn-light quanbtn1" onClick={()=>{incrementCart(item.id,item.quantity)}} >+</button>
     </div></div>
 </div> </div>  </div>
   ))}
   </div> </div>
  )}
export default Cart

