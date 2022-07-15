import React from "react";
import "./Footer.scss"

export default function Footer(){
  


    return (
      <div className="footer">
          
        
        <p>Copyright <i className="far fa-copyright"></i> All right reserved  </p>
       

    <div className="links">
       <a 
       href="https://github.com/asaganowski"
       target="_blank"
       rel="noreferrer"> 
       <i className="fab fa-github"/>
       </a>
       <a 
       href="https://github.com/asaganowski"
       target="_blank"
       rel="noreferrer"> 
       <i className="far fa-address-card"/>
       </a>
        
        </div>

        <p>Created by Artur Saganowski, 2022</p>
       
      </div>
    );
  }