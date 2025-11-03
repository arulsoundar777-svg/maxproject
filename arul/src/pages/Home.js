import React from 'react'
import './Home.css';
import pic6 from '../Images/pic6.jpg'
import pic7 from '../Images/pic7.jpg'
import pic8 from '../Images/pic8.jpg'
import sec5pic1 from '../Images/sec5pic1.jpg'
import sec6pic1 from '../Images/sec6pic1.jpg'
import sec6pic2 from '../Images/sec6pic2.jpg'
import sec6pic3 from '../Images/sec6pic3.jpg'
import sec6pic4 from '../Images/sec6pic4.jpg'
import Navbar from '../priya/Navbar';
import Footer from '../priya/Footer';


function Home() {
  return (
    <>
    <Navbar/>
      <div>
        <div id="carouselExampleControls" class="carousel slide" data-bs-ride="carousel">
          <div className='sec1a'>
  <div class="carousel-inner">
    <div class="carousel-item active">
      <img src={pic6} class="d-block "width="100%" alt="..."/>
    </div>
    <div class="carousel-item">
      <img src={pic7} class="d-block "width="100%" alt="..."/>
    </div>
    <div class="carousel-item">
      <img src={pic8} class="d-block "width="100%" alt="..."/>
    </div></div>
  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div>
<section class ="sec5a">
    <h2>New New You</h2>
    <img src={sec5pic1} width="100%"/>

</section>
<section class="sec6a">
    <h2>Festivity In Style</h2>
    <div class="row6a">
    <div class="col6a1">
    <img src={sec6pic1} width="250px"/>
    </div>

    <div class="col6a2">
    <img src={sec6pic2} width="250px"/>
    </div>

    <div class="col6a3">
    <img src={sec6pic3} width="250px"/>
    </div>

    <div class="col6a4">
    <img src={sec6pic4} width="250px"/>
    </div>
</div>
</section>

    </div>
    <Footer/>
    </>
  
  )
}

export default Home