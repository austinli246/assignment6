import React from "react"
import Zip from "./components/zip"
import './App.css';
import Display from './components/display'

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
     
    </div>
     

    );
  }
}
export default App;
