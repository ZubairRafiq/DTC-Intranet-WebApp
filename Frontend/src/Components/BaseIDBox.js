import React from 'react';
import axios from 'axios';
import { Button, Form, Col, Table, FormGroup, ListGroup } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useState, useEffect } from 'react';
import parse from 'html-react-parser';


var Convert = require('ansi-to-html');
var convert = new Convert();

const InitElements = [
  { id: '1', data: { label: 'Node 1' }, position: { x: 250, y: 5 } },
  // you can also pass a React component as a label
  { id: '2', data: { label: <div>Node 2</div> }, position: { x: 100, y: 100 } },
  { id: 'e1-2', source: '1', target: '2', animated: true },
];

const tableList = {
    IDInput : "DTC ID",
    beschreibungInput : "Beschreibung",
    UrInput : "Ursachen",
    MaßInput : "Maßnahmen",
}

var myMDT = { 
  DTC: '',
  Beschreibung: '',
  Ursachen: '',
  Maßnahmen: '',
  baseID: [],
  desID: [],
  causeID: [],
  actionID: [],
  eventID: [],
  functionID: [],
  keyID: [],
  operationID: [],
  localID: [],
  action: [],
  description: [],
  cause: [],
  event: [],
  function: [],
  keyword: [],
  localization: [],
  operation: [],
};

async function getBase(e_id,xx,s_str) {
  
  return axios.get('http://localhost:4000/Base/'+e_id+'&'+xx+'&'+s_str+'&'+'*',{
   
  }) 
}

async function getBaseByIDOut(id) {
  
  return axios.get('http://localhost:4000/Base/'+'*'+'&'+'*'+'&'+'*'+'&'+id,{
    params: {
        
    }
  }) 
}

async function getMaxBase() {
  
  return axios.get('http://localhost:4000/Base/') 
}

async function updateMySQLDTC(DTC) {
  
  return axios.put('http://localhost:4000/DTC/'
  
  +DTC.b_id+'&'+DTC.d_id+'&'+DTC.c_id
  +'&'+DTC.a_id+'&'+DTC.e_id+'&'+DTC.f_id+'&'+DTC.k_id+'&'+DTC.o_id+'&'+DTC.n_id) 
  
  }

async function insertNewBaseID(e_id,xx,s_str,baseID) {
  
  return axios.post('http://localhost:4000/Base/'+e_id+'&'+xx+'&'+s_str+'&'+baseID) 
  
}







// SELECTED BOX
function SelectedBox(){
  return (
    <Form>
        <ListGroup>
            {myMDT.description.map(desc => (
            <ListGroup.Item>{desc}</ListGroup.Item>
            ))}
        </ListGroup>

        <ListGroup>
            {myMDT.cause.map(c => (
            <ListGroup.Item>{c}</ListGroup.Item>
            ))}
        </ListGroup>

        <ListGroup>
            {myMDT.action.map(a => (
            <ListGroup.Item>{a}</ListGroup.Item>
            ))}
        </ListGroup>

        <ListGroup>
            {myMDT.event.map(e => (
            <ListGroup.Item>{e}</ListGroup.Item>
            ))}
        </ListGroup>

        <ListGroup>
            {myMDT.function.map(f => (
            <ListGroup.Item>{f}</ListGroup.Item>
            ))}
        </ListGroup>

        <ListGroup>
            {myMDT.keyword.map(k => (
            <ListGroup.Item>{k}</ListGroup.Item>
            ))}
        </ListGroup>

        <ListGroup>
            {myMDT.operation.map(o => (
            <ListGroup.Item>{o}</ListGroup.Item>
            ))}
        </ListGroup>
    </Form>       
  )
}

const flowStyles = { height: 300 };


export default class BaseIDBox extends React.Component {

  constructor(props){
      super(props);
      this.state = {
          elements : InitElements,
          e_id: '',
          xx: '',
          s_str: '',
          baseID: '', 
          selectedBaseID: '',     
          loadedBaseID: '',
        }
      this.fillInE = this.fillInE.bind(this);
      this.fillInX = this.fillInX.bind(this);
      this.fillInS = this.fillInS.bind(this);
      this.fillInB = this.fillInB.bind(this);
      this.getTotal = this.getTotal.bind(this);
      this.getBaseByID = this.getBaseByID.bind(this);  
      this.insertBase = this.insertBase.bind(this);
      this.replaceBase = this.replaceBase.bind(this);
      this.getMax = this.getMax.bind(this);
  };

  insertBase(){
      if ((this.state.e_id == "") || (this.state.xx == "") || (this.state.s_str == "") || (this.state.selectedBaseID == "")){
          alert("Please fill all needed info*"+ this.state.e_id + " " + this.state.xx + " " + this.state.s_str + " " + this.state.selectedBaseID);
          //alert(this.state.e_id + this.state.xx + this.state.s_str + this.state.selectedBaseID)
      } else {
        console.log("Hier");

        insertNewBaseID(this.state.e_id,this.state.xx,this.state.s_str,this.state.selectedBaseID).then((output) => {
            console.log(output);
            let temp = output.data;
          
    
            console.log('TL');
            console.log(temp.base_id);
    
            if (temp.base_id !== ""){
              this.setState({ 
                loadedBaseID : "Inserted",             
              });
    
                    
          } else {
            this.setState({            
              loadedBaseID: 'Error',             
            });
          }      
               
          console.log(this.state);    
          });
      }
  }

  replaceBase(){
    this.setState({
        baseID: this.state.selectedBaseID,
    })
  }

  getBaseByID() {
    console.log("Hier");

    getBaseByIDOut(this.state.selectedBaseID).then((output) => {
        console.log(output);
        let temp = output.data;
      

        console.log('TL');
        console.log(temp.base_id);

        if (temp.base_id !== ""){
          this.setState({ 
            loadedBaseID : temp.base_id,                                                        
          });

                
      } else {
        this.setState({            
          loadedBaseID: 'Not Existed',
        });
      }      
           
      console.log(this.state);    
      });
  }






  
  getTotal () {
      console.log("Hier");

      getBase(this.state.e_id, this.state.xx, this.state.s_str).then((output) => {
          console.log(output);
          let temp = output.data;
        

          console.log('TL');
          console.log(temp);

          if (temp != null){
            this.setState({ 
              baseID : temp.base_id 
             
                                            
            });

                  
        } else {
          this.setState({            
            baseID: ''
                   
          });
        }      
             
        console.log(this.state);    
        });
  }
  
  getMax(){
    getMaxBase().then((output) => {
      //console.log(output);
      if (!output.data.errno){
          //console.log(output)
          this.setState({
            selectedBaseID: output.data[0].AvaiID,
          });
          
      }                             
      
  });   
  }


  fillInE(e) {
    this.setState({
      e_id : e.target.value
    });
  }

  fillInX(e) {
    this.setState({
      xx : e.target.value
    });
  }

  fillInS(e) {
    this.setState({
      s_str : e.target.value
    });
  }

  fillInB(e) {
    this.setState({
      selectedBaseID : e.target.value
    });
  }

  render() {
      return (
        <div className = "suchen">
        <Form>
        <Table striped bordered hover variant="dark">
        <Form.Row className="center">
        
          <Col >
          <Form.Label className="label"><strong>Insert/Update DTC-BaseID Connection</strong></Form.Label>
          
            <Form.Row>
                
                <Col>
                    <Form.Control  as="input" className="input"
                           placeHolder="Fill in e_id"
                           onChange ={this.fillInE} 
                            >

                    </Form.Control>                
                </Col>
                <Col>
                    <Form.Control  as="input" className="input"
                           placeHolder="Fill in xx"
                           onChange ={this.fillInX} 
                            >

                    </Form.Control>          
                </Col>
                <Col>
                    <Form.Control  as="input" className="input"
                           placeHolder="Fill in s_str"
                           onChange ={this.fillInS} 
                            >

                    </Form.Control>          
                </Col>    
         <Col>
              <Button className="sub_button" variant="secondary" onClick={this.getTotal}>GET</Button>
              </Col>
            </Form.Row>
            <hr style={{ backgroundColor: 'black', height: 1}}/>
            
            <ListGroup>
              <Form.Row>
                <Col>
                  <Form.Label className="label1">
                           <strong>Existed Base ID</strong>
                  </Form.Label>
                </Col>
              
               
                <Col>
                  <Form.Control as="input" className="input"
                              value={this.state.selectedBaseID}
                              onChange= {this.fillInB}
                              placeholder="Fill in b_id"
                  >
                         
                  </Form.Control>
                </Col>
                <Col>   
                  <Form.Control as="input" className="input"
                              value={this.state.loadedBaseID}                              
                  >
                         
                  </Form.Control> 
                </Col> 
                <Col>
                
                <Button  variant="secondary" onClick = {this.getBaseByID}>
                  LOAD
                </Button> 
                </Col> 

                <Col>
                
                <Button  variant="secondary" onClick = {this.getMax}
                >
                  AVAILABLE
                </Button> 
                </Col>  
                
                <Col>
                
                <Button  variant="secondary" onClick = {this.insertBase}
                >
                  INSERT/UPDATE
                </Button> 
                </Col>  

               
                

              </Form.Row>
              

              <Form.Group>              
                  <Form.Check value={this.state.baseID} id={this.state.baseID} name="DescCheck" type="checkbox" label={this.state.baseID} />                          
              </Form.Group>

              
              
            </ListGroup>

           
        
            
          
          </Col>  
        </Form.Row>
        </Table>
      </Form>

      </div>
      );
  }
}


