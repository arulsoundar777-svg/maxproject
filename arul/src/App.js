import logo from './logo.svg';
import Navbar from './priya/Navbar';


import Home from './pages/Home';
import Footer from './priya/Footer';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Pro from './product/Pro';
import Kids from './product/Kids';
import Women from './product/Women';
import Cart from './pages/Cart'
import Fav from './pages/Fav';

function App() {
  return (
    <div>
      {/* <Tesr/> */}
      {/* <Navbar/>
      <Home/>
      <Pro/>
      <Footer/> */}
      <BrowserRouter>
      <Navbar/>
      <Routes>

        <Route path="/" element={<Home/>}/>
        <Route path="/Pro" element={<Pro/>}/>
        <Route path='/Kids' element={<Kids/>}/>
        <Route path='/Women' element={<Women/>}/>
        <Route path="/Cart" element={<Cart/>}/>
        <Route path="/Fav" element={<Fav/>}/>

        </Routes>
        <Footer/>      
      </BrowserRouter>
    </div>
  );
}

export default App;



                       