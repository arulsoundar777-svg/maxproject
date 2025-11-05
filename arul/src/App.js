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
import Upload from './pages/Upload';
import SignupForm from './pages/Signup';
import Update from './pages/Updated';
import Signupupdate from './pages/Signupupdate';
import Edit from './pages/Edit';
import Editer from './pages/Signupedit';
import Form from './pages/Validation';
import Login from './pages/Login';
import Register from './pages/Register';
import ProtectedRoute from './pages/ProtectedRoute';

function App() {
  return (
    <div>
      {/* <Navbar/>
      <Home/>
      <Pro/>
      <Footer/> */}
      <BrowserRouter>
      {/* <Navbar/> */}
      <Routes>

        <Route path="/" element={
          <ProtectedRoute>
          <Home/>
          </ProtectedRoute>

          }/>
        <Route path="/Pro" element={<Pro/> }/>
        <Route path='/Kids' element={<Kids/>}/>
        <Route path='/Women' element={<Women/> }/>
        <Route path="/Cart" element={
          <ProtectedRoute>
          <Cart/>
          </ProtectedRoute>
          }/>
        <Route path="/Fav" element={
        <ProtectedRoute>
          <Fav/>
        </ProtectedRoute>
          }/>
        <Route path="/Upload" element={<Upload/>}/>
        <Route path="/Signup" element={<SignupForm/>}/>
        <Route path="/Update" element={<Update/>}/>
        <Route path="/Signupupdate" element={<Signupupdate/>}/>
        {/* <Route path="/edit/:id" element={<Edit/>}/> */}
        <Route path="/editsignup/:id" element={<Editer/>}/>
        <Route path="/val" element={<Form/>}/>
         <Route path="/Login" element={<Login/>}/>
         <Route path="/Register" element={<Register/>}/>



        </Routes>
        {/* <Footer/>       */}
      </BrowserRouter>
    </div>
  );
}

export default App;



                       