import React from 'react';
import { Form,Button, Col } from 'react-bootstrap';
import axios from 'axios';


async function simulateNetworkRequest() {
  
    return axios.get('http://localhost:4000/DTC',{
      
    }) 
}

const exDesc = [
    {
        id: 1,
        text: 'abc'
    },
    {
        id: 2,
        text: 'def'
    }
]

export default class DTCBox extends React.Component {

    constructor(props){
        super(props);
        this.state = {
            selected: '',
            listDTC: []
        }

        this.getTotal = this.getTotal.bind(this);
    };
    

    getTotal(){
        console.log("Hier");

        simulateNetworkRequest().then((output) => {
            console.log(output.data['myList']);
            this.setState({
                listDTC: output.data['myList']
            });
                 
            //console.log(output.data);
          });
    }

    render() {
        return (
            <Form>
                
                <Form.Row className="align-items-center">
                    
                                                                                    
                </Form.Row>   
                <hr/>
                <Form.Row>      
                    <Col xs={10}>
                        <Form.Control 
                            as="select"    
                            custom>
                                {this.state.listDTC.map(d => (
                                    <option>{d.id + ' ' + d.text}</option>
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