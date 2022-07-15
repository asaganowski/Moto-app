import React from "react";
import './Appointments.scss';
import { appointmentArray} from "../data";
import {
   
    useNavigate
} from "react-router-dom";
import Button from 'react-bootstrap/Button';
//import Select from 'react-select';
import photo from "../images/appointments.jpeg";


export default function Appointments() {


let navTo = useNavigate();


const handleDelete = el =>{
  
    const index = appointmentArray.map(data => data.Date).indexOf(el); 
    
    appointmentArray.splice(index,1);
       
    navTo("/appointments")
}

return (
    <div className="appointmentContent">
        <div className="beginning">
            <img src={photo} alt="homePhoto" className="homePhoto"/>
        <h1 className="typewriting">Your Appointments:</h1>
        </div>
    <br/>
    
   
<br/>

        <table>
        <tbody>

        
    {
        appointmentArray.map((data) => {
            
            return(
               
                <tr key={data.Date}>
                    {Object.keys(data).map(prop => {
                        
                       if(prop==="Date"){
                        return <td key={prop} label={prop}>{data[prop].slice(0,22)}
                        </td>
                       }else{
                       
                            return <td key={prop} label={prop}>{data[prop]}
                            </td>
                       }
                    }
                    
                    

                            
                    )}

                  <td>
                    
                    <Button variant="danger" onClick={() => handleDelete(data.Date)} >
                    Cancel
  </Button>
  </td>
                </tr>
            )
           
                })}
            
        

        </tbody>
       
        </table>
    
</div>
   
    );
 }


