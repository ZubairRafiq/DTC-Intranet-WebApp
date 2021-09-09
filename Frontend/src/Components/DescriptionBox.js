import React from 'react';
import { Table,Form,Col,Button } from 'react-bootstrap';
import axios from 'axios';
import { Label } from 'reactstrap';
import parse from 'html-react-parser';

async function getDesc(id) {
  
    return axios.get('http://localhost:4000/Desc/'+id) 
}

async function getMaxDesc(id) {
  
    return axios.get('http://localhost:4000/Desc/') 
}

async function getCause(id) {
  
    return axios.get('http://localhost:4000/Cause/'+id) 
}

async function getMaxCause(id) {
  
    return axios.get('http://localhost:4000/Cause/') 
}

async function getAct(id) {
  
    return axios.get('http://localhost:4000/Measure/'+id) 
}

async function getMaxAct(id) {
  
    return axios.get('http://localhost:4000/Measure/') 
}

async function getEvent(id) {
  
    return axios.get('http://localhost:4000/Event/'+id) 
}

async function getMaxEvent(id) {
  
    return axios.get('http://localhost:4000/Event/') 
}

async function getFunc(id) {
  
    return axios.get('http://localhost:4000/Function/'+id) 
}

async function getMaxFunc(id) {
  
    return axios.get('http://localhost:4000/Function/') 
}

async function getKey(id) {
  
    return axios.get('http://localhost:4000/Key/'+id) 
}

async function getMaxKey(id) {
  
    return axios.get('http://localhost:4000/Key/') 
}

async function getOps(id) {
  
    return axios.get('http://localhost:4000/Operation/'+id) 
}

async function getMaxOps(id) {
  
    return axios.get('http://localhost:4000/Operation/') 
}

async function putRequest(temp) {
    
    return axios.put({ url: 'http://localhost:4000/Desc',
                        data : {
                                hello:'world',
                                }
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

export default class DesBox extends React.Component {

    constructor(props){
        super(props);

        this.state = {
            d_id: '',
            d_text:'',

            c_id: '',
            c_text:'',

            a_id: '',
            a_text:'',

            e_id: '',
            e_text:'',

            f_id: '',
            f_text:'',

            k_id: '',
            k_text:'',

            o_id: '',
            o_text:'',
            
            listDesc: [],
            listName: [],
            listCause: [],
            listAction: [],
            listEvent: [],
            listFunc: [],
            listKey: [],
            listOps: []
        }

        this.getTotal = this.getTotal.bind(this);
        this.getMax = this.getMax.bind(this);

        this.updateDesc = this.updateDesc.bind(this);
        this.fillDescID = this.fillDescID.bind(this);
        this.fillDescText = this.fillDescText.bind(this);
       

        this.updateCause = this.updateCause.bind(this);
        this.fillCauseID = this.fillCauseID.bind(this);
        this.fillCauseText = this.fillCauseText.bind(this);
       

        this.updateAct = this.updateAct.bind(this);
        this.fillActID = this.fillActID.bind(this);
        this.fillActText = this.fillActText.bind(this);
      

        this.updateEve = this.updateEve.bind(this);
        this.fillEveID = this.fillEveID.bind(this);
        this.fillEveText = this.fillEveText.bind(this);
       

        this.updateFunc = this.updateFunc.bind(this);
        this.fillFuncID = this.fillFuncID.bind(this);
        this.fillFuncText = this.fillFuncText.bind(this);
      
       
        this.updateKey = this.updateKey.bind(this);
        this.fillKeyID = this.fillKeyID.bind(this);
        this.fillKeyText = this.fillKeyText.bind(this);
       
        
        this.updateOps = this.updateOps.bind(this);
        this.fillOpsID = this.fillOpsID.bind(this);
        this.fillOpsText = this.fillOpsText.bind(this);
       
       
    };

        

    getTotal (e) {
        console.log(e.target.name);
        
        switch (e.target.name){
            case "Desc":
                getDesc(this.state.d_id).then((output) => {
                    if (!output.data.errno){
                        //console.log(output)
                        this.setState({
                            listDesc: output.data.myDescList,
                            listName: output.data.myNameList,
                            listCause: output.data.myCauseList,
                            listAction: output.data.myActionList,
                            listEvent: output.data.myEventList,
                            listFunc: output.data.myFuncList,
                            listKey: output.data.myKeyList,
                            listOps: output.data.myOpsList
                        });
                        console.log('Tien loi');
                        console.log(this.state.listDesc);
                    }                             
                    
                });    
                break;
            
            case "Cause":
                getCause(this.state.c_id).then((output) => {
                    if (!output.data.errno){
                        //console.log(output)
                        this.setState({
                            listDesc: output.data.myDescList,
                            listName: output.data.myNameList,
                            listCause: output.data.myCauseList,
                            listAction: output.data.myActionList,
                            listEvent: output.data.myEventList,
                            listFunc: output.data.myFuncList,
                            listKey: output.data.myKeyList,
                            listOps: output.data.myOpsList
                        });
                        console.log('Tien loi');
                        console.log(this.state.listDesc);
                    }                             
                    
                  });
                break;

            case "Act":
                getAct(this.state.a_id).then((output) => {
                    if (!output.data.errno){
                        //console.log(output)
                        this.setState({
                            listDesc: output.data.myDescList,
                            listName: output.data.myNameList,
                            listCause: output.data.myCauseList,
                            listAction: output.data.myActionList,
                            listEvent: output.data.myEventList,
                            listFunc: output.data.myFuncList,
                            listKey: output.data.myKeyList,
                            listOps: output.data.myOpsList
                        });
                        console.log('Tien loi');
                        console.log(this.state.listDesc);
                    }                             
                    
                  });
                break;

            case "Event":
                getEvent(this.state.e_id).then((output) => {
                    if (!output.data.errno){
                        //console.log(output)
                        this.setState({
                            listDesc: output.data.myDescList,
                            listName: output.data.myNameList,
                            listCause: output.data.myCauseList,
                            listAction: output.data.myActionList,
                            listEvent: output.data.myEventList,
                            listFunc: output.data.myFuncList,
                            listKey: output.data.myKeyList,
                            listOps: output.data.myOpsList
                        });
                        console.log('Tien loi');
                        console.log(this.state.listDesc);
                    }                             
                    
                  });
                break;

            case "Func":
                getFunc(this.state.f_id).then((output) => {
                    if (!output.data.errno){
                        //console.log(output)
                        this.setState({
                            listDesc: output.data.myDescList,
                            listName: output.data.myNameList,
                            listCause: output.data.myCauseList,
                            listAction: output.data.myActionList,
                            listEvent: output.data.myEventList,
                            listFunc: output.data.myFuncList,
                            listKey: output.data.myKeyList,
                            listOps: output.data.myOpsList
                        });
                        console.log('Tien loi');
                        console.log(this.state.listDesc);
                    }                             
                    
                  });
                break;

            case "Key":
                getKey(this.state.k_id).then((output) => {
                    if (!output.data.errno){
                        //console.log(output)
                        this.setState({
                            listDesc: output.data.myDescList,
                            listName: output.data.myNameList,
                            listCause: output.data.myCauseList,
                            listAction: output.data.myActionList,
                            listEvent: output.data.myEventList,
                            listFunc: output.data.myFuncList,
                            listKey: output.data.myKeyList,
                            listOps: output.data.myOpsList
                        });
                        console.log('Tien loi');
                        console.log(this.state.listDesc);
                    }                             
                    
                  });
                break;

            case "Ops":
                getOps(this.state.o_id).then((output) => {
                    if (!output.data.errno){
                        //console.log(output)
                        this.setState({
                            listDesc: output.data.myDescList,
                            listName: output.data.myNameList,
                            listCause: output.data.myCauseList,
                            listAction: output.data.myActionList,
                            listEvent: output.data.myEventList,
                            listFunc: output.data.myFuncList,
                            listKey: output.data.myKeyList,
                            listOps: output.data.myOpsList
                        });
                        console.log('Tien loi');
                        console.log(this.state.listDesc);
                    }                             
                    
                  });
                break;
        }                  
    };

    getMax (e) {
        console.log(e.target.name);
        
        switch (e.target.name){
            case "Desc":
                getMaxDesc(this.state.d_id).then((output) => {
                    //console.log(output);
                    if (!output.data.errno){
                        //console.log(output)
                        this.setState({
                            d_id: output.data[0].AvaiID,
                        });
                        console.log('Tien loi');
                        console.log(this.state.listDesc);
                    }                             
                    
                });    
                break;
            
            case "Cause":
                getMaxCause(this.state.c_id).then((output) => {
                    if (!output.data.errno){
                        //console.log(output)
                        this.setState({
                            c_id: output.data[0].AvaiID,
                        });
                        console.log('Tien loi');
                        console.log(this.state.listDesc);
                    }                             
                    
                  });
                break;

            case "Act":
                getMaxAct(this.state.a_id).then((output) => {
                    if (!output.data.errno){
                        //console.log(output)
                        this.setState({
                            a_id: output.data[0].AvaiID,
                        });
                        console.log('Tien loi');
                        console.log(this.state.listDesc);
                    }                             
                    
                  });
                break;

            case "Event":
                getMaxEvent(this.state.e_id).then((output) => {
                    if (!output.data.errno){
                        //console.log(output)
                        this.setState({
                            e_id: output.data[0].AvaiID,
                        });
                        console.log('Tien loi');
                        console.log(this.state.listDesc);
                    }                             
                    
                  });
                break;

            case "Func":
                getMaxFunc(this.state.f_id).then((output) => {
                    if (!output.data.errno){
                        //console.log(output)
                        this.setState({
                            f_id: output.data[0].AvaiID,
                        });
                        console.log('Tien loi');
                        console.log(this.state.listDesc);
                    }                             
                    
                  });
                break;

            case "Key":
                getMaxKey(this.state.k_id).then((output) => {
                    if (!output.data.errno){
                        //console.log(output)
                        this.setState({
                            k_id: output.data[0].AvaiID,
                        });
                        console.log('Tien loi');
                        console.log(this.state.listDesc);
                    }                             
                    
                  });
                break;

            case "Ops":
                getMaxOps(this.state.o_id).then((output) => {
                    if (!output.data.errno){
                        //console.log(output)
                        this.setState({
                            o_id: output.data[0].AvaiID,
                        });
                        console.log('Tien loi');
                        console.log(this.state.listDesc);
                    }                             
                    
                  });
                break;
        }                  
    };

//--------------DESCRIPTION------------------------------------
    updateDesc () {

        if (this.state.d_id === "" | this.state.d_text === ""){
            alert("Please fill in both d_id and d_text");
        } else {
            let data = { id: this.state.d_id, text: this.state.d_text };
            console.log('Hier Update');
            axios.put('http://localhost:4000/Desc/'+data.id+'&'+data.text)
            .then(response => {
                    
                    alert("Status: OK");
                    
            }).catch(error => {
                    alert('Something went wrong!', error);
            });
        }
        
        
    };
                

    fillDescID(e){ 
        this.setState({
            d_id : e.target.value
        })
    }

    fillDescText(e){
        
        this.setState({
            d_text : e.target.value
        })
    }

//--------------CAUSE------------------------------------
updateCause () {

    if (this.state.c_id === "" | this.state.c_text === ""){
        alert("Please fill in both c_id and c_text");
    } else {
        let data = { id: this.state.c_id, text: this.state.c_text };
        console.log('Hier Update');
        axios.put('http://localhost:4000/Cause/'+data.id+'&'+data.text)
        .then(response => {
                
                alert("Status: OK");
                
        }).catch(error => {
                alert('Something went wrong!', error);
        });
    }
    
    
};
            

fillCauseID(e){ 
    this.setState({
        c_id : e.target.value
    })
}

fillCauseText(e){
    this.setState({
        c_text : e.target.value
    })
}

//--------------ACTION------------------------------------
updateAct () {
    if (this.state.a_id === "" | this.state.a_text === "") {
        alert ("Please fill in both a_id and a_text");
    } else {
        let data = { id: this.state.a_id, text: this.state.a_text };
        console.log('Hier Update');
        axios.put('http://localhost:4000/Measure/'+data.id+'&'+data.text)
        .then(response => {
                
                alert("Status: OK");
                
        }).catch(error => {
                alert('Something went wrong! ', error);
        });
    }
    
    
};
            

fillActID(e){ 
    this.setState({
        a_id : e.target.value
    })
}

fillActText(e){
    this.setState({
        a_text : e.target.value
    })
}

//--------------EVENT------------------------------------
updateEve () {
    if (this.state.e_id === "" | this.state.e_text === ""){
        alert("Please fill in both e_id and e_text")
    } else {

    }
    let data = { id: this.state.e_id, text: this.state.e_text };
    
    axios.put('http://localhost:4000/Event/'+data.id+'&'+data.text)
    .then(response => {
            
            alert("Status: OK");
            
    }).catch(error => {
            alert('Something went wrong! ', error);
    });
    
};
            

fillEveID(e){ 
    this.setState({
        e_id : e.target.value
    })
}

fillEveText(e){
    this.setState({
        e_text : e.target.value
    })
}

//--------------FUNCTION------------------------------------
updateFunc () {
    if (this.state.f_id === "" | this.state.f_text === ""){
        alert("Please fill in both f_id and f_text");    
    } else {
        let data = { id: this.state.f_id, text: this.state.f_text };
    
        axios.put('http://localhost:4000/Function/'+data.id+'&'+data.text)
        .then(response => {
        
                alert("Status: OK");
                
        }).catch(error => {
                alert('Something went wrong!', error);
        });
    }
    
    
};
            

fillFuncID(e){ 
    this.setState({
        f_id : e.target.value
    })
}

fillFuncText(e){
    this.setState({
        f_text : e.target.value
    })
}

//--------------KEY------------------------------------
updateKey () {
    if (this.state.k_id === "" | this.state.k_text === ""){
        alert("Please fill in both k_id and k_text");
    } else {

    }
    let data = { id: this.state.k_id, text: this.state.k_text };
    
    axios.put('http://localhost:4000/Key/'+data.id+'&'+data.text)
    .then(response => {
            
            alert("Status: OK");
            
    }).catch(error => {
            alert('Something went wrong! ', error);
    });
    
};
            

fillKeyID(e){ 
    this.setState({
        k_id : e.target.value
    })
}

fillKeyText(e){
    this.setState({
        k_text : e.target.value
    })
}

//--------------OPERATION------------------------------------
updateOps () {
    if (this.state.o_id === "" | this.state.o_text === ""){
        alert("Please fill in both o_id and o_text");    
    } else {
    let data = { id: this.state.o_id, text: this.state.o_text };
    
    axios.put('http://localhost:4000/Operation/'+data.id+'&'+data.text)
    .then(response => {
    
            alert("Status: OK");
            
    }).catch(error => {
            alert('Something went wrong! ', error);
    });
    } 
};
            

fillOpsID(e){ 
    this.setState({
        o_id : e.target.value
    })
}

fillOpsText(e){
    this.setState({
        o_text : e.target.value
    })
}




    render() {
        return (
            <div>
            <Form>
                     <Form.Label className="label"><strong>Update/Insert DTC Content</strong></Form.Label>
                 <Table striped bordered hover variant="dark">
               
                 <Form.Row className="align-items-center mt-2">
                   
                    <Col >
               
                        <Form.Control
                            as="input" className="input"
                            placeholder="des_id"                            
                            onChange={this.fillDescID}
                            value={this.state.d_id}
                        >
                        </Form.Control>
                    </Col>
                    <Col >
                        <Form.Control
                            as="input" className="input1"
                            placeholder="Fill in Description"
                            value={this.state.d_text}
                            onChange={this.fillDescText}
                        >
                        </Form.Control>                    
                    </Col>
                    
                    <Col>
                        <Button name="Desc"  variant="secondary"     onClick={this.getTotal}>Load</Button>                 
                    </Col>
                   
                    <Col>
                        <Button name="Desc"  variant="secondary" onClick={this.getMax}>Available</Button>                 
                    </Col>
                   
                    <Col >
                        <Button   variant="secondary" onClick={this.updateDesc}>
                            Update/Insert
                        </Button>
                        
                    </Col>
                    </Form.Row>
                   
                <Form.Row className="align-items-center mt-2">
                    <Col >
                        
                        <Form.Control
                            as="input" className="input"
                            placeholder="cause_id"                            
                            onChange={this.fillCauseID}
                            value={this.state.c_id}
                        >
                        </Form.Control>
                    </Col>
                    <Col >
                        <Form.Control
                            as="input" className="input1"
                            placeholder="Fill in Cause"
                            value={this.state.c_text}
                            onChange={this.fillCauseText}
                        >
                        </Form.Control>                    
                    </Col>
                    
                    <Col>
                        <Button name="Cause"  variant="secondary" onClick={this.getTotal}>Load</Button>                 
                    </Col>

                    <Col>
                        <Button name="Cause"  variant="secondary" onClick={this.getMax}>Available</Button>                 
                    </Col>

                    <Col >
                        <Button
                             variant="secondary"
                            onClick={this.updateCause}
                        >
                            Update/Insert
                        </Button>
                        
                    </Col>
                                            
                </Form.Row>

                <Form.Row className="align-items-center mt-2">
                    <Col >
                        
                        <Form.Control
                            as="input" className="input"
                            placeholder="action_id"                            
                            onChange={this.fillActID}
                            value={this.state.a_id}
                        >
                        </Form.Control>
                    </Col>
                    <Col >
                        <Form.Control
                            as="input" className="input1"
                            placeholder="Fill in Action"
                            value={this.state.a_text}
                            onChange={this.fillActText}
                        >
                        </Form.Control>                    
                    </Col>
                    
                    <Col>
                        <Button name="Act"  variant="secondary" onClick={this.getTotal}>Load</Button>                 
                    </Col>

                    <Col>
                        <Button name="Act"  variant="secondary" onClick={this.getMax}>Available</Button>                 
                    </Col>

                    <Col >
                        <Button
                             variant="secondary"
                            onClick={this.updateAct}
                        >
                            Update/Insert
                        </Button>
                        
                    </Col>
                                            
                </Form.Row>

                <Form.Row className="align-items-center mt-2">
                    <Col >
                        
                        <Form.Control
                            as="input" className="input"
                            placeholder="event_id"                            
                            onChange={this.fillEveID}
                            value={this.state.e_id}
                        >
                        </Form.Control>
                    </Col>
                    <Col >
                        <Form.Control
                            as="input" className="input1"
                            placeholder="Fill in Event"
                            value={this.state.e_text}
                            onChange={this.fillEveText}
                        >
                        </Form.Control>                    
                    </Col>
                    
                    <Col>
                        <Button name="Event"  variant="secondary" onClick={this.getTotal}>Load</Button>                 
                    </Col>

                    <Col>
                        <Button name="Event"  variant="secondary" onClick={this.getMax}>Available</Button>                 
                    </Col>

                    <Col >
                        <Button
                             variant="secondary"
                            onClick={this.updateEve}
                        >
                            Update/Insert
                        </Button>
                        
                    </Col>
                                            
                </Form.Row>

                <Form.Row className="align-items-center mt-2">
                    <Col >
                        
                        <Form.Control
                            as="input" className="input"
                            placeholder="func_id"                            
                            onChange={this.fillFuncID}
                            value={this.state.f_id}
                        >
                        </Form.Control>
                    </Col>
                    <Col >
                        <Form.Control
                            as="input" className="input1"
                            placeholder="Fill in Function"
                            value={this.state.f_text}
                            onChange={this.fillFuncText}
                        >
                        </Form.Control>                    
                    </Col>
                    
                    <Col>
                        <Button name="Func"  variant="secondary" onClick={this.getTotal}>Load</Button>                 
                    </Col>

                    <Col>
                        <Button name="Func"  variant="secondary" onClick={this.getMax}>Available</Button>                 
                    </Col>

                    <Col >
                        <Button
                             variant="secondary"
                            onClick={this.updateFunc}
                        >
                            Update/Insert
                        </Button>
                        
                    </Col>
                                            
                </Form.Row>

                <Form.Row className="align-items-center mt-2">
                    <Col >
                        
                        <Form.Control
                            as="input" className="input"
                            placeholder="key_id"                            
                            onChange={this.fillKeyID}
                            value={this.state.k_id}
                        >
                        </Form.Control>
                    </Col>
                    <Col >
                        <Form.Control
                            as="input" className="input1"
                            placeholder="Fill in Keyword"
                            value={this.state.k_text}
                            onChange={this.fillKeyText}
                        >
                        </Form.Control>                    
                    </Col>
                    
                    <Col>
                        <Button name="Key"  variant="secondary" onClick={this.getTotal}>Load</Button>                 
                    </Col>

                    <Col>
                        <Button name="Key"  variant="secondary" onClick={this.getMax}>Available</Button>                 
                    </Col>

                    <Col >
                        <Button
                             variant="secondary"
                            onClick={this.updateKey}
                        >
                            Update/Insert
                        </Button>
                        
                    </Col>
                                            
                </Form.Row>

                <Form.Row className="align-items-center mt-2">
                    <Col >
                        
                        <Form.Control
                            as="input" className="input"
                            placeholder="ops_id"                            
                            onChange={this.fillOpsID}
                            value={this.state.o_id}
                        >
                        </Form.Control>
                    </Col>
                    <Col >
                        <Form.Control
                            as="input" className="input1"
                            placeholder="Fill in Operation"
                            value={this.state.o_text}
                            onChange={this.fillOpsText}
                        >
                        </Form.Control>                    
                    </Col>
                    
                    <Col>
                        <Button name="Ops"  variant="secondary" onClick={this.getTotal}>Load</Button>                 
                    </Col>

                    <Col>
                        <Button name="Ops"  variant="secondary" onClick={this.getMax}>Available</Button>                 
                    </Col>

                    <Col >
                        <Button variant="secondary" onClick={this.updateOps} >Update/Insert </Button>
                        
                    </Col>
                                            
                </Form.Row>
</Table>

<br/>
<Form.Label className="label"><strong>View Details</strong></Form.Label>
                <Form.Row>             
                  

                    <Col >
                        <Label className="label1"><strong>Description Info</strong></Label>
                        <Table striped bordered hover>
                            <thead>
                                <tr>
                                    <th>d_id</th>
                                    <th>Text</th>
                                </tr>
                            </thead>
                            <tbody>
                                {this.state.listDesc.map(d=>(
                                    <tr>
                                        <td>{d.id}</td>
                                        <td>{parse(d.text)}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </Table>

                        <Label className="label1"><strong>Action Info</strong></Label>
                        <Table striped bordered hover>
                            <thead>
                                <tr>
                                    <th>a_id</th>
                                    <th>Text</th>
                                </tr>
                            </thead>
                            <tbody>
                                {this.state.listAction.map(a=>(
                                    <tr>
                                        <td>{a.id}</td>
                                        <td>{parse(a.text)}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </Table>

                        <Label className="label1"><strong>Name Info</strong></Label>
                        <Table striped bordered hover>
                            <thead>
                                <tr>
                                    <th>n_id</th>
                                    <th>Text</th>
                                </tr>
                            </thead>
                            <tbody>
                                {this.state.listName.map(n=>(
                                    <tr>
                                        <td>{n.id}</td>
                                        <td>{parse(n.text)}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </Table>

                        <Label className="label1"><strong>Cause Info</strong></Label>
                        <Table striped bordered hover>
                            <thead>
                                <tr>
                                    <th>c_id</th>
                                    <th>Text</th>
                                </tr>
                            </thead>
                            <tbody>
                                {this.state.listCause.map(c=>(
                                    <tr>
                                        <td>{c.id}</td>
                                        <td>{parse(c.text)}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </Table>

                        <Label className="label1"><strong>Event Info</strong></Label>
                        <Table striped bordered hover>
                            <thead>
                                <tr>
                                    <th>e_id</th>
                                    <th>Text</th>
                                </tr>
                            </thead>
                            <tbody>
                                {this.state.listEvent.map(d=>(
                                    <tr>
                                        <td>{d.id}</td>
                                        <td>{parse(d.text)}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </Table>

                        <Label className="label1"><strong>Function Info</strong></Label>
                        <Table striped bordered hover>
                            <thead>
                                <tr>
                                    <th>f_id</th>
                                    <th>Text</th>
                                </tr>
                            </thead>
                            <tbody>
                                {this.state.listFunc.map(f=>(
                                    <tr>
                                        <td>{f.id}</td>
                                        <td>{parse(f.text)}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </Table>

                        <Label className="label1"><strong>Key Info</strong></Label>
                        <Table striped bordered hover>
                            <thead>
                                <tr>
                                    <th>k_id</th>
                                    <th>Text</th>
                                </tr>
                            </thead>
                            <tbody>
                                {this.state.listKey.map(k=>(
                                    <tr>
                                        <td>{k.id}</td>
                                        <td>{parse(k.text)}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </Table>

                        <Label className="label1"><strong>Operation Info</strong></Label>
                        <Table striped bordered hover>
                            <thead>
                                <tr>
                                    <th>o_id</th>
                                    <th>Text</th>
                                </tr>
                            </thead>
                            <tbody>
                                {this.state.listOps.map(o=>(
                                    <tr>
                                        <td>{o.id}</td>
                                        <td>{parse(o.text)}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </Table>
                    </Col>
                    
                   
                </Form.Row>                           

            </Form></div>
        );
    }
}

