import React from 'react';
import { Form,Col,Row } from 'react-bootstrap';


export default class KeyBox extends React.Component {

    state = {
        listKey : []
    }

    render() {
        return (
            <Form>
                <Form.Row className="align-items-center mt-2">
                    <Col xs="auto">
                        <Form.Label className="mr-sm-2">
                            Key ID
                        </Form.Label>
                    </Col>
                    <Col>
                        <Form.Control
                            as="input"
                            placeHolder="Fill in Keyword"
                        >

                        </Form.Control>                    
                    </Col>
                                            
                </Form.Row>   

                <Form.Row className="mt-2">                    
                        <Form.Control 
                            as="select"
                            className="mr-sm-2"
                            custom>
                                <option value = "0">Choose...</option>      
                                <option value = "1">One</option>
                                <option value = "1">Two</option>
                                <option value = "1">Three</option>                      
                        </Form.Control>
                   
                </Form.Row>                           

            </Form>
        );
    }
}