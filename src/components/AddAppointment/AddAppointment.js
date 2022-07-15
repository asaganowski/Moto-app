import React, {useState} from "react";

import './AddAppointment.scss';
import Select from 'react-select';
import {Button} from 'react-bootstrap';

import 'bootstrap/dist/css/bootstrap.min.css';
import {appointmentArray,typesOfMoto, service,brand,exampleArray} from '../data.js';
import {
  useNavigate
} from "react-router-dom";
import DatePicker from "react-datepicker";
import setHours from "date-fns/setHours";
import setMinutes from "date-fns/setMinutes";
import "react-datepicker/dist/react-datepicker.css";


export default function AddAppointment(){


let navTo=useNavigate()

  
//const [confirmation,setConfirmation] = useState(false)

  const [newAppointment,setNewAppointment] = useState(
    {
        
        "Type of motorcycle": "",
        "Kind of service": "",
        Brand: "",
        Date: "",
        Info: "",
        "=>": "Waiting for confirmation..."
        
    });

    const [selectedValue,setSelectedValue]=useState(null)
    const [selected,setSelected]=useState(null)
    const [selectedVal,setSelectedVal]=useState(null)
    const [date, setDate] = useState(new Date());
    
    const isWeekday = (date) => {
      const day = date.getDay();
      return day !== 0;
    }


    const allAppointmentArr=[]
    
    for(let i=0;i<exampleArray.length;i++){
      
      allAppointmentArr.push(Date.parse(exampleArray[i].Date))
      
    }

    for(let i=0;i<appointmentArray.length;i++){
     
      allAppointmentArr.push(Date.parse(appointmentArray[i].Date))
    }

   console.log(allAppointmentArr)
    const filterTime = (time) =>{
      const currentDate = new Date();
      const selectedDate = new Date(time);
      

        if(allAppointmentArr.every((date)=>{
          
          return date!==selectedDate.getTime() && currentDate.getTime()<selectedDate.getTime()
        }))
          return true ;
        else 
          return false ;
      
    }

    const handleOnChange = e => {
      
      setDate(e)
      
      setNewAppointment({
          ...newAppointment,
          "Date": e.toUTCString()
              });
  };

  const handleChange = e => {
    
    setNewAppointment({
        ...newAppointment,
        [e.target.name]: e.target.value
    });
};

  
  const handleSelectOnChange = (value,id) => {
   
    
    switch(id.name){
        case "Type of motorcycle":
          setSelectedValue(value);
          
          return setNewAppointment({
       
            ...newAppointment,
            "Type of motorcycle": value.label
        
       
          });
    
        case "Brand": 
        setSelectedVal(value)
          
          return setNewAppointment({
            ...newAppointment,
            Brand: value.label
          });

          case "Kind of service": 
          setSelected(value)

          return setNewAppointment({
            ...newAppointment,
            "Kind of service": value.label
          });

    default: break;

  }
}


  const handleOnSubmit = (e) =>{
    e.preventDefault();

    
   

    if(Object.keys(newAppointment).filter((key) => {
      return newAppointment[key] !== ""
    }).length === 6){
        
            
          appointmentArray.push(newAppointment);
            
                navTo(("/appointments"))
               
                
              }else
              alert("Make sure you filled in all the blanks")

      }
      
   
    return (
    <div className="newAppointment">
     <div className="form">
        <form onSubmit={handleOnSubmit}>
          <h3>Please enter the data</h3>
            <hr/>
            
            <label >Brand</label><br/>
                <Select
                    onChange={handleSelectOnChange}
                    options={brand}
                    placeholder=" Brand"
                    name="Brand"
                    id="brand"
                    value={selectedVal}
                    

                  />

<label >Type of motorcycle</label><br/>
              <Select 
                id="mototype"
                name="Type of motorcycle" 
                options ={typesOfMoto}   
                placeholder="Type of motorcycle"
                onChange={handleSelectOnChange}
                value={selectedValue}
            
            />
            
              
<label >Choose type of service</label>
                  <Select 
                    
                    
                    isSearchable
                    id="service"
                    name="Kind of service" 
                    options ={service}   
                    placeholder="Type of service"
                    onChange={handleSelectOnChange}
                    value={selected}
                   
            /><br/>

<label >When would it suit you?</label><br/>
      <DatePicker 
          selected={date}
          dateFormat="dd/MM/yyyy hh:mm aa"
          onChange={handleOnChange} 
          value={date}  
          minDate={new Date()}
          maxDate={new Date().setDate(new Date().getDate()+21)}
          showTimeSelect
          calendarStartDay={1}
          withPortal
          filterTime={filterTime}
          filterDate={isWeekday}
          minTime={setHours(setMinutes(new Date(), 0), 10)}
          maxTime={setHours(setMinutes(new Date(), 0), 18)}
          name="Date"
          
          
        />


            <br/>
                  <textarea
                    placeholder=" Some additional info (if any, type '-')"
                    onChange={handleChange}
                    name="Info"
                  
                  /><br/>
                
                <br/>
                <Button variant="outline-primary" type="submit">
            Submit
          </Button>
          
                </form>
                
                
                </div>
        <br/>
                </div>
    );
  }

  





