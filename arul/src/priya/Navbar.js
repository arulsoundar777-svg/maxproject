import React from 'react'
import './Navbar.css';
import truck from '../icons/truck.png'
import download from '../icons/download.png'
import restore from '../icons/restore.png' 
import gift from '../icons/gift.png'
import map from '../icons/map.png'
import heart from '../icons/heart.png'
import cart from '../icons/cart.png'
import pic1 from '../Images/pic1.jpg'
import pic2 from '../Images/pic2.jpg'
import pic3 from '../Images/pic3.jpg'
import pic4 from '../Images/pic4.jpg'
import pic5 from '../Images/pic5.jpg'
import { Link } from 'react-router-dom';
import Pro from '../product/Pro';
import Kids from '../product/Kids';
import Women from '../product/Women';
import { logout } from '../Auth';


function Navbar() {
  return (
    <div>

        <section class="sec1">
            <ul class ="ul1"><li>
                    <img class="icon1" src={ truck} /> Free shipping
                </li>
                <li>
                    <img class="icon1" src={restore}/> Return to store
                </li>
                <li>
                    <img class="icon1" src={gift}/> online gift card
                </li>
                <li>
                    <img class="icon1" src={map}/> Delivery to
                </li>
                <li>
                    help
                </li>
                  <li>
                     <button  class="btn btn-danger btn111" onClick={logout}>Log out</button>
                </li>
                </ul>
        </section>

        <section class="sec2">

            <div class="col1">
                <div class="col1a">
                    <Link to ="/"><li><img src ={download} width="80px" height="60px" /></li></Link> 
                    </div>
                <div class="col1b">
                    <nav class="navbar navbar-light bg-light">
  <div class="container-fluid">
    <form class="d-flex">
      < input class="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
      <button class="btn btn-outline-success" type="submit">Search</button>
    </form>
  </div>
</nav>
    </div></div>
        <div class="col2">
            <div class="col2a">
                <Link to="/Signup">
                            <h3>SIGN UP/SIGN IN</h3>

                </Link>
                </div>
            <div class="col2b">
                <Link to="/Fav"> <img src={heart} width="23px"/></Link> 
            </div>
            <div class="col2c">
                <Link to="/Cart"><img src={cart} width="23px"/></Link>
            </div>
        </div>
        </section>
    
    <section class="sec3">

        <div class="col3b">
             <Link to={"/Women"}><img src={pic2} width="80px"/><br/><h6>Women</h6></Link>
        </div>
        <div class="col3c">
            <Link to={"/Pro"}><img src={pic3} width="80px"/><br/><h6>Men</h6></Link> 
        </div>
        <div class="col3d">
            <Link to={"/Kids"}><img src={pic4} width="80px"/><br/><h6>Kids</h6></Link> 
        </div>
    
    </section>

    <section class="sec4">
        <h5 className='animate__animated animate__rubberBand'>Flat 400 off on 1999.Code:Max400| Flat 200 off on 1499.Code:Max200.Free Shipping on all Orders..! </h5>
    </section>

    </div>
  )
}

export default Navbar