import React from 'react'
import './Footer.css';


import call from '../icons/call.png';
import badge from '../icons/badge.png';
import mail from '../icons/mail.png';
import facebook from '../icons/facebook.png';
import instagram from '../icons/instagram.png';
import twitter from '../icons/twitter.png';
import download from '../icons/download.png';

function Footer() {
  return (
    <div>
     
    <section class="ten">
      <div class="row6">
        <div class="col19">
       <h4 class="head3">Subscribe to our awesome emails.</h4>
       <p>Get our latest offers and news straight in your inbox.</p>
       <br></br>
       <br></br>
       <input type="search" placeholder="Please enter an email address"/>
       <button class="btn5" type="submit">Subscribe</button>
        </div>
        <div class="col20">
            <h4 class="head3">Download our apps</h4>
            <p>Shop our products and offers on-the-go.</p>
             </div>
        </div>  
        <br></br>
        <hr></hr>

    </section>
    <section class="eleven">
    <div class="row7">
        <div class="col21">
        <h4 class="head4">Women</h4>
        <p class="p1">Tops<br></br>Sportswear<br></br>Bottoms<br></br>Winterwear<br></br>Ethnicwear</p>
        </div>
        <div class="col22">
          <h4 class="head4">Men</h4>
        <p class="p1">Tops<br></br>Sportswear<br></br>Bottoms<br></br>Winterwear<br></br>Shoes</p>  
        </div>
        <div class="col23">
         <h4 class="head4">Kids</h4>
        <p class="p1">Tops<br></br>Shirts<br></br>Jeans<br></br>Winterwear<br></br>Sports<br></br>Ballerina</p>   
        </div>
        {/* <div class="col24">
          <h4 class="head4">URB_N</h4>
        <p class="p1">Tops<br></br>Sportswear<br></br>Bottoms<br></br>Winterwear<br></br>T-shirts</p>  
        </div> */}
        {/* <div class="row8"> */}

        <div class="col25">
            <h4 class="head4">Help</h4>
        <p class="p1">Contact us<br></br>Shipping<br></br>Returns<br></br>Exchange<br></br>Policy<br></br>Help center</p>
            
        </div>
        <div class="col26">
             <h4 class="head4">About</h4>
             <p class="p1">About us<br></br>Write to us<br></br>Careers<br></br>Store<br></br>Max Cares<br></br>Landmark</p>
            
        </div>

        {/* </div> */}
        
    </div> 
    <hr></hr> 
    </section>

    <section class="twelve">
        <div class="row9">
            <div class="col27">
                <img src={call}/>
             <p>Talk to us <br></br>1800-123-1444</p>
            </div>
            <div class="col28">
                <img src={badge}/>
              <p>Helpcentre<br></br>help.maxfashion.com</p>  
            </div>
            <div class="col29">
                <img src={mail}/>
              <p>Write to us <br></br>help@maxfashions.in</p>  
            </div>
            <div class="col30">
              <img class="i8" src={facebook} width="30px"/>
              <img class="i8" src={instagram} width="30px"/>
              <img class="i8" src={twitter} width="30px"/>
            </div>
        </div>
        <hr></hr>
        <br></br>
        <div class="row10">
            <div class="col31">
             <img class="i9" src={download} width="100px"/>
            </div>
             <div class="col32">
               <p>© 2025 Retail World Limited.<br></br>Terms & Conditions - Privacy Policy</p> 
            </div>
        </div>
        

    </section>

    </div>
  )
}

export default Footer;