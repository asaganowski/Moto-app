const typesOfMoto = [
    { value: 'chopper', label: 'Chopper'},
    { value: 'naked', label: 'Naked' },
    { value: 'sport', label: 'Sport' },
    { value: 'cross', label: 'Cross' },
    { value: 'tourist', label: 'Tourist' },
    { value: 'other', label: 'Other' }
  ]

  const service = [
    {label: "Preparing for the season", duration: 1,value: "Preparing for the season"},
    {label: "Replacing the tyres", duration: 0.5,value: "Replacing the tyres"},
    {label: "Replacing a clutch", duration: 2,value: "Replacing a clutch"},
    {label: "Replacing the oil and filters", duration: 0.5, value: "Replacing the oil and filters"},
    {label: "Readjusting the valves", duration: 2, value: "Readjusting the valves"}
  ]
  

  const brand = [
    { value: 'bmw', label: 'BMW' },
    { value: 'honda', label: 'Honda' },
    { value: 'suzuki', label: 'Suzuki' },
    { value: 'kawasaki', label: 'Kawasaki' },
    { value: 'triumph', label: 'Triumph' }
  ]

  
  const appointmentArray=[ // previous scheduled appointments

      {
        
        "Type of motorcycle": "Cross",
        "Kind of service": "Replacing a clutch",
        Brand: "Honda",
        Date: "Wed, 20 Jul 2022 12:00:00 GMT+0200 (czas środkowoeuropejski letni)",
        Info: "-",
        "=>":"Waiting for confirmation..."
      },
      {
        
        "Type of motorcycle": "Naked",
        "Kind of service": "Replacing the tyres",
        Brand: "Suzuki",
        Date: "Wed, 27 Jul 2022 16:30:00 GMT+0200 (czas środkowoeuropejski letni)",
        Info: "2008r.",
        '=>': "Confirmed"
         
      }
  ]

  const exampleArray=[ // example data base

    {
      
      "Type of motorcycle": "Cross",
      "Kind of service": "Preparing for the season",
      Brand: "Honda",
      Date: "Fri Jul 22 2022 11:00:00 GMT+0200 (czas środkowoeuropejski letni)",
      Info: "-",
      "=>": "Confirmed"
    },
    {
      
      "Type of motorcycle": "Naked",
      "Kind of service": "Replacing the tyres",
      Brand: "Suzuki",
      Date: "Mon Jul 18 2022 15:00:00 GMT+0200 (czas środkowoeuropejski letni)",
      Info: "-",
      "=>": "Confirmed"
       
    }
]



  export  {appointmentArray,typesOfMoto,service,brand,exampleArray};