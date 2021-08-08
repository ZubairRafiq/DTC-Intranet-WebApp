import React from 'react';
import { Form,Col,Button } from 'react-bootstrap';
import axios from 'axios';
import parse from 'html-react-parser';

async function simulateNetworkRequest() {
  
    return axios.get('http://localhost:4000/Thres',{      
    }) 
}


export default class ThresBox extends React.Component {

    
    constructor(props){
        super(props);

        this.state = {
            t_id:'',
            listThres: []
        }

        this.getTotal = this.getTotal.bind(this);
        this.fillThresID = this.fillThresID.bind(this);
    };

       

    getTotal () {
        console.log("Hier");

        simulateNetworkRequest().then((output) => {
            console.log(output.data);
            this.setState({
                listThres: output.data
            });
                 
            
          });
    }

    fillThresID(e){ 
        this.setState({
            t_id : e.target.value
        })
    };


    render() {
        return (
            <Form>
                <Form.Row className="align-items-center">
                    <Col xs="3">                       
                        <Form.Control
                            as="input"
                            placeholder="thres_id"
                            onChange={this.fillThresID}
                        >
                        </Form.Control>
                    </Col>
                    <Col>
                        <Form.Control
                            as="input"
                            placeHolder="Fill in Grenzwerte"
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
                                {this.state.listThres.map(c => (
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