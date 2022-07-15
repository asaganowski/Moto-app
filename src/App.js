import React from "react";
import {
  Route,
  Routes,
  HashRouter
  
} from "react-router-dom";
import Home from "./components/Home/Home";
import AddAppointment from "./components/AddAppointment/AddAppointment";
import Navbar from "./components/Navbar/Navbar";
import Appointments from "./components/Appointments/Appointments";
import './App.scss';

import Footer from "./components/Footer/Footer";

 
export default function App() {
  

    return (
      <div className="page">
      <HashRouter>
        
        <Navbar/>
        
        <div className="content">
          
          <Routes>
            <Route exact path='/' element={<Home />}/>
            <Route path='/addAppointment' element={<AddAppointment />}/>
            <Route path='/appointments' element={<Appointments />}/>
            
            
          </Routes>
          
          </div>

          <Footer/>

      </HashRouter>
      
      </div>
    );
    
    
   }
  

