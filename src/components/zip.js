import React from 'react'

//import Display from './components/display'
class Zip extends React.Component {
    constructor(){
    super();
    this.state = {
        zipCode: " ",
        found : false,
        items : []
    };
     this.handleChange = this.handleChange.bind(this);
    }


    handleChange(event){
            //handler
            //check 5 characters 
         event.preventDefault();
        this.setState({zipCode: event.target.name.value})
        const zip = document.getElementById('data').value
        fetch(`http://ctp-zip-api.herokuapp.com/zip/${zip}`)     
        .then(response => response.json())
        .then(result => {
            this.setState({items : result});
        });
        
        
   
        
    }

   
    render(){
        return (
            
            <div>
                <h1>ZipCode Search</h1> 
               
                <form onSubmit = {this.handleChange} >
                <input id = "data"
                type = "text" 
                name = "name" 
                placeholder = "Enter Zipcode">
                </input>
                <input type ="submit" value ="submit"/>
                
                </form> 

                <br></br>
                <div className = "container">

            
                {this.state.items.map((item) => (
                        <li key={item.RecordNumber}>
                          <p1>{item.City}</p1> 
                          <p>State: {item.State}</p>
                          <p>Location:({item.Long},{item.Lat})</p>
                          <p>Population: {item.EstimatedPopulation}</p> 
                          <p>Total Wages: {item.TotalWages}</p>
                          
                            </li>
                    ))}

                </div>
        
                    
                    
                <br/>
                
                 
                
               
                
    
          </div>
        );

    }
}

export default Zip; 