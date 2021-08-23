import React from 'react';
import { Form,Col,Button } from 'react-bootstrap';
import axios from 'axios';
import parse from 'html-react-parser';


async function simulateNetworkRequest() {
  
    return axios.get('http://localhost:4000/Cause',{      
    }) 
}


export default class CauseBox extends React.Component {

    constructor(props){
        super(props);

        this.state = {
            c_id: '',
            listCause: []
        }
        
        this.getTotal = this.getTotal.bind(this);
        this.fillCauseID = this.fillCauseID.bind(this);
    };


    getTotal(){
        console.log("Hier");

        simulateNetworkRequest().then((output) => {
            console.log(output.data);
            this.setState({
                listCause: output.data
            });
                 
            //console.log(output.data.listDesc);
          });
    }

    fillCauseID(e){ 
        this.setState({
            c_id : e.target.value
        })
    };

    render() {
        return (
            <Form>
                
                <Form.Row className="align-items-center mt-2">
                    <Col xs="3">
                        <Form.Control
                            as="input"
                            placeholder="cause_id"
                            onChange= {this.fillCauseID}
                        >
                        </Form.Control> 
                                                                        
                    </Col>
                    <Col>
                        <Form.Control
                            as="input"
                            placeholder="Fill in Cause"
                        >

                        </Form.Control>                    
                    </Col>
                                            
                </Form.Row>   
                <hr width="50"/>
                <Form.Row>      
                    <Col xs={10}>
                        <Form.Control 
                            as="select"    
                            custom>
                                {this.state.listCause.map(c => (
                                    <option>{parse(c.text)}</option>
                                ))}                                                    
                        </Form.Control>
                    </Col>
                    <Col>
                        <Button variant="primary" onClick={this.getTotal}>Load</Button>                 
                    </Col>                                                                
                </Form.Row>                           

            </Form>
        );
    }
}