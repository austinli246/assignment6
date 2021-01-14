import React from 'react';
import axios from 'axios';
class City extends React.Component {
    constructor(){
    super();
   
    this.state = {
       
        items: []
    };
    this.handleChanges = this.handleChanges.bind(this);
    }

    handleChanges(event){
        //handler
        //check 5 characters 
     event.preventDefault();
    //this.setState({city: event.target.name.value})
    const city = document.getElementById('city').value.toUpperCase()
    axios.get(`http://ctp-zip-api.herokuapp.com/city/${city}`)     
    .then(res => {this.setState({items: res.data})
     })
    .catch(console.log('error'))
    //.then(data => console.log(data))

    }
    
    

    


render(){
    return (
        
        <div >
            <h1>City Search</h1> 
           
            <form onSubmit = {this.handleChanges} >
            <input id = "city"
            type = "text" 
            name = "name" 
            // value = {this.state.city}
            placeholder = "Enter Cityname">
            </input>
            <input type ="submit" value ="submit"/>
            
            </form> 

            <br></br>
            <div id = "text">

        
            {this.state.items.map((item) => (
                    <li >
                        <p>{item},</p>
                        </li>
                ))}

            </div>         
            <br/>

      </div>
    );

}
}
export default City;