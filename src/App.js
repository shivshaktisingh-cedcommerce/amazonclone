import React from 'react';
import Header from './Header';
import Footer from './Footer';
import {Routes,Route} from "react-router-dom";
import { Home } from './Home';
import { Checkout } from './Checkout';
import Login from './Login';
function App() {
    return(
       <>
      <Header/>
       <Routes>
       <Route path="/" element={<Home/>}/>
       <Route path="checkout" element={<Checkout/>}/>
       <Route path="login" element={<Login/>}/>
      </Routes>
      <Footer/>
       </>
    )
}
export default App;
