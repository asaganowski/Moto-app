import React from "react";
import "./Home.scss"
import home_photo from "../images/home-photo.jpeg";
import {Button} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import {
  Link
} from "react-router-dom";


export default function Home(){
  
    return (
      <div className="home">
          
          <div className="contentSide">
            <div className="homeContent">
              <h2 className="typewriting">Welcome to our page!</h2>
              <br/>
              <br/>
              <p>We will take care of your vehicle.</p>
              <br/>
              <p>Our goal is to help you get back to your motorcycle, as soon as possible. Proffessionally and efficiently.</p>
              <br/>
              

              
              <Button variant="info" type="button"><Link to="/addAppointment">Make a reservation</Link></Button>
              
          <small>!Soon new functionalities, paths, adjustment for smaller devices and more!</small>
            </div>
          </div>
        
          
            <img src={home_photo} alt="homePhoto" className="homePhoto"/>
        
        
 
       
      </div>
    );
  }

 