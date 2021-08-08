import React, { Component } from 'react'
import { NavLink} from "react-router-dom";
import Button from 'react-bootstrap/Button';

export class home extends Component {
	render() {
		return (
			<div>
				
		<NavLink to="/dtc_webdemo">
    <Button className="dtc_button" variant="secondary" size="lg"  >
      DTC Webdemo <hr/> 
    </Button>{' '}
    </NavLink>
    
    <NavLink to="/webdemo_liste">
    <Button className="dtc_button" variant="secondary" size="lg" >
      DTC Webdemo Liste <hr/> 
    </Button>{' '}
    </NavLink>
    
    <NavLink to="/react_graph">
    <Button className="dtc_button" variant="secondary" size="lg" >
      React Graph <hr/> 
    </Button>
    </NavLink>
			</div>
		)
	}
}

export default home
