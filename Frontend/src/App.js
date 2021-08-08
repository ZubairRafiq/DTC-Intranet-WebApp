import 'bootstrap/dist/css/bootstrap.min.css';


import Header from './Components/header';
import home from './Components/home';




//import styled from 'styled-components';
import './App.css';
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import DtcWebdemo from './Components/dtc_webdemo';
import webdemo_liste from './Components/liste';
import React_Graph from './Components/react_graph';



function App() {
  return (
   <Router>
    <div className="App">
      <Header/>
     
   
    <Switch>
      <Route exact path="/" component={home}/>  
      <Route path="/webdemo_liste" component={webdemo_liste}/>
      <Route path="/dtc_webdemo" component={DtcWebdemo}/> 
      <Route path="/react_graph" component={React_Graph}/>
      
      
     </Switch>
   

    </div>
    </Router>
  );
}

export default App;
