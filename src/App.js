import React from "react"
import Zip from "./components/zip"
import './App.css';
import City from './components/city'

class App extends React.Component {
  

  constructor(){
    super();
    
    this.state = {
      
      
    };
  }

 
  render(){
    return (
    <div>

      <Zip/> 
      <City/>
     
    </div>
     

    );
  }
}
export default App;
