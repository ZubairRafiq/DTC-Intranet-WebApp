import React from 'react';
import { Button, Form, Col, Table, ListGroup } from 'react-bootstrap';
import parse from 'html-react-parser';
import axios from 'axios';
import RelationGraph from '../Components/RelationGraph';
import DesBox from '../Components/DescriptionBox';
//import DTCBox from '../components/DTCBox';
import BaseIDBox from '../Components/BaseIDBox';
import Dropdown from 'react-bootstrap/Dropdown'
import DropdownButton from 'react-bootstrap/DropdownButton';






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
  
  async function getDTCOut(e_id,xx,s_str) {
  
    return axios.get('http://localhost:4000/DTC/'+e_id+'&'+xx+'&'+s_str,{
      
    }) 
  }
  
  async function getDesc(id) {
    
    return axios.get('http://localhost:4000/Desc/'+id,{
      params: {
          ID: id,
      }
    }) 
  }
  
  async function getDescText(text) {
    
    return axios.get('http://localhost:4000/Desc/Text/'+text,{
      
    }) 
  }
  
  async function getUrsText(text) {
    
    return axios.get('http://localhost:4000/Cause/Text/'+text,{
      
    }) 
  }
  
  async function getMasText(text) {
    
    return axios.get('http://localhost:4000/Measure/Text/'+text,{
      
    }) 
  }
  
  async function getEveText(text) {
    
    return axios.get('http://localhost:4000/Event/Text/'+text,{
      
    }) 
  }
  
  async function getFuncText(text) {
    
    return axios.get('http://localhost:4000/Function/Text/'+text,{
      
    }) 
  }
  
  async function getKeyText(text) {
    
    return axios.get('http://localhost:4000/Key/Text/'+text,{
      
    }) 
  }
  
  async function getOpsText(text) {
    
    return axios.get('http://localhost:4000/Operation/Text/'+text,{
      
    }) 
  }
  
  async function getUrs(id) {
    
    return axios.get('http://localhost:4000/Cause/'+id,{
      
    }) 
  }
  
  async function getMas(id) {
    
    return axios.get('http://localhost:4000/Measure/'+id,{
      
    }) 
  }
  
  async function getEve(id) {
    
    return axios.get('http://localhost:4000/Event/'+id,{
      
    }) 
  }
  
  async function getFunc(id) {
    
    return axios.get('http://localhost:4000/Function/'+id,{
      
    }) 
  }
  
  async function getKey(id) {
    
    return axios.get('http://localhost:4000/Key/'+id,{
      
    }) 
  }
  
  async function getOps(id) {
    
    return axios.get('http://localhost:4000/Operation/'+id,{
      
    }) 
  }
  
  async function updateMySQLDTC(DTC) {
    
    return axios.put('http://localhost:4000/DTC/'
    
    +DTC.b_id+'&'+DTC.d_id+'&'+DTC.c_id
    +'&'+DTC.a_id+'&'+DTC.e_id+'&'+DTC.f_id+'&'+DTC.k_id+'&'+DTC.o_id) 
    
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

export default class DtcWebdemo extends React.Component {

  constructor(props){
    super(props);
    this.state = {
        elements : InitElements,
        e_id: '',
        xx: '',
        s_str: '',
        Beschreibung: {},
        Ursachen: '',
        Maßnahmen: '',
        baseID: [],
        action: [],
        actionCombo: [],          
        description: [],
        descCombo: [],
        cause: [],
        causeCombo: [],
        event: [],
        eventCombo: [],
        func: [],
        funcCombo: [],
        keyword: [],
        keyCombo: [],
        localization: [],
        operation: [],
        opsCombo: [],
        name: [],
        
        selectedDesc: '',
        selectedDescID: '',
        
        selectedUrs: '',
        selectedUrsID: '',
        
        selectedMas: '',
        selectedMasID: '',

        selectedEve: '',
        selectedEveID: '',

        selectedFunc: '',
        selectedFuncID: '',

        selectedKey: '',
        selectedKeyID: '',

        selectedOps: '',
        selectedOpsID: '',
      }
    
    this.fillInE = this.fillInE.bind(this);
    this.fillInX = this.fillInX.bind(this);
    this.fillInS = this.fillInS.bind(this);

   

    this.fillInDesc = this.fillInDesc.bind(this);
    this.fillInDescID = this.fillInDescID.bind(this);
    this.getTotal = this.getTotal.bind(this);
    this.createElement = this.createElement.bind(this);
    this.clickCheckBox = this.clickCheckBox.bind(this);
    
    this.insertDesc = this.insertDesc.bind(this);
    this.getDescByID = this.getDescByID.bind(this);
    this.removeDesc = this.removeDesc.bind(this);
    this.updateDTC = this.updateDTC.bind(this);
    
    this.insertUrs = this.insertUrs.bind(this);
    this.getUrsByID = this.getUrsByID.bind(this);
    this.removeUrs = this.removeUrs.bind(this);
    this.fillInUrsID = this.fillInUrsID.bind(this);
    this.fillInUrs = this.fillInUrs.bind(this);

    this.insertMas = this.insertMas.bind(this);
    this.getMasByID = this.getMasByID.bind(this);
    this.removeMas = this.removeMas.bind(this);
    this.fillInMasID = this.fillInMasID.bind(this);
    this.fillInMas = this.fillInMas.bind(this);

    this.insertEve = this.insertEve.bind(this);
    this.getEveByID = this.getEveByID.bind(this);
    this.removeEve = this.removeEve.bind(this);
    this.fillInEveID = this.fillInEveID.bind(this);
    this.fillInEve = this.fillInEve.bind(this);

    this.insertFunc = this.insertFunc.bind(this);
    this.getFuncByID = this.getFuncByID.bind(this);
    this.removeFunc = this.removeFunc.bind(this);
    this.fillInFuncID = this.fillInFuncID.bind(this);
    this.fillInFunc = this.fillInFunc.bind(this);

    this.insertKey = this.insertKey.bind(this);
    this.getKeyByID = this.getKeyByID.bind(this);
    this.removeKey = this.removeKey.bind(this);
    this.fillInKeyID = this.fillInKeyID.bind(this);
    this.fillInKey = this.fillInKey.bind(this);

    this.insertOps = this.insertOps.bind(this);
    this.getOpsByID = this.getOpsByID.bind(this);
    this.removeOps = this.removeOps.bind(this);
    this.fillInOpsID = this.fillInOpsID.bind(this);
    this.fillInOps = this.fillInOps.bind(this);

    this.selectDropDesc = this.selectDropDesc.bind(this);
    this.selectDropCause = this.selectDropCause.bind(this);
    this.selectDropAct = this.selectDropAct.bind(this);
    this.selectDropEvent = this.selectDropEvent.bind(this);
    this.selectDropFunc = this.selectDropFunc.bind(this);
    this.selectDropKey = this.selectDropKey.bind(this);
    this.selectDropOps = this.selectDropOps.bind(this);
};
  
selectDropDesc(ele){
  let temp = this.state.descCombo.find(function(e){return (e.id == ele)});
  this.setState({
    selectedDesc: temp.text,
    selectedDescID: temp.id,
  });
}

selectDropCause(ele){
  let temp = this.state.causeCombo.find(function(e){return (e.id == ele)});
  this.setState({
    selectedUrs: temp.text,
    selectedUrsID: temp.id,
  });
}

selectDropAct(ele){
  let temp = this.state.actionCombo.find(function(e){return (e.id == ele)});
  this.setState({
    selectedMas: temp.text,
    selectedMasID: temp.id,
  });
}

selectDropEvent(ele){
  let temp = this.state.eventCombo.find(function(e){return (e.id == ele)});
  this.setState({
    selectedEve: temp.text,
    selectedEveID: temp.id,
  });
}

selectDropFunc(ele){
  let temp = this.state.funcCombo.find(function(e){return (e.id == ele)});
  this.setState({
    selectedFunc: temp.text,
    selectedFuncID: temp.id,
  });
}

selectDropKey(ele){
  let temp = this.state.keyCombo.find(function(e){return (e.id == ele)});
  this.setState({
    selectedKey: temp.text,
    selectedKeyID: temp.id,
  });
}

selectDropOps(ele){
  let temp = this.state.opsCombo.find(function(e){return (e.id == ele)});
  this.setState({
    selectedOps: temp.text,
    selectedOpsID: temp.id,
  });
}

// ------------------ DESCRIPTION --------------------------------------------------------
removeDesc(){
  let temp = {
    id: this.state.selectedDescID,
    text: this.state.selectedDesc
  }

  let tempArr = this.state.description;

  tempArr = tempArr.filter(function(e){
    return (e.id !== temp.id) & (e.text !== temp.text);
  })

  console.log(tempArr);

  this.setState({
    description: tempArr,
  });
}

fillInDesc(e){
  this.setState({
    selectedDesc: e.target.value,
  });
}

fillInUrs(e){
  this.setState({
    selectedUrs: e.target.value,
  });
}

fillInMas(e){
  this.setState({
    selectedMas: e.target.value,
  });
}

fillInEve(e){
  this.setState({
    selectedEve: e.target.value,
  });
}

fillInFunc(e){
  this.setState({
    selectedFunc: e.target.value,
  });
}

fillInKey(e){
  this.setState({
    selectedKey: e.target.value,
  });
}

fillInOps(e){
  this.setState({
    selectedOps: e.target.value,
  });
}

fillInDescID(e){
  this.setState({
    selectedDescID: e.target.value,
  });
}

insertDesc(){
  let temp = {
    id: this.state.selectedDescID,
    text: this.state.selectedDesc,
  };

  let tempState = this.state.description;

  if (!tempState.find(function(e){return (e.id === temp.id) & (e.text === temp.text) })){
    tempState.push(temp);
    this.setState({
      description: tempState,
    })
  }    
}


getDescByID(){
  if (this.state.selectedDesc === "" && this.state.selectedDescID === ""){
    alert("Please fill in d_id or d_text");
  } else {
    
    if (this.state.selectedDescID){
    getDesc(this.state.selectedDescID).then((output) => {
      
      let temp = output.data.myDescList[0];
      
      
      
      if (temp != null){
        this.setState({              
          selectedDesc: temp.text,
          selectedDescID: temp.id,    
            
        });              
    } else {
      this.setState({            
        selectedDesc: '',
        selectedDescID: '',     
      });
    }      
         
    });
  } else {
    getDescText(this.state.selectedDesc).then((output) => {
         

      this.setState({              
        descCombo: output.data,   
          
      });   

        
    });
  }
  }
  
  
}
// ------------------ URSACHEN --------------------------------------------------------
removeUrs(){
  let temp = {
    id: this.state.selectedUrsID,
    text: this.state.selectedUrs
  }

  let tempArr = this.state.cause;

  tempArr = tempArr.filter(function(e){
    return (e.id !== temp.id) & (e.text !== temp.text);
  })

  console.log(tempArr);

  this.setState({
    cause: tempArr,
  });
}

fillInUrsID(e){
  this.setState({
    selectedUrsID: e.target.value,
  });
}

insertUrs(){
  let temp = {
    id: this.state.selectedUrsID,
    text: this.state.selectedUrs,
  };

  let tempState = this.state.cause;

  if (!tempState.find(function(e){return (e.id === temp.id) & (e.text === temp.text) })){
    tempState.push(temp);
    this.setState({
      cause: tempState,
    })
  }    
}

getUrsByID(){
  if (this.state.selectedUrs == "" && this.state.selectedUrsID == ""){
    alert("Please fill in c_id or c_text");  
  } else {
    if (this.state.selectedUrsID){
      getUrs(this.state.selectedUrsID).then((output) => {
        console.log(output);
        let temp = output.data.myCauseList[0];
    
        console.log('TL');
        
        if (temp != null){
          this.setState({              
            selectedUrs: temp.text,
            selectedUrsID: temp.id,        
          });              
      } else {
        this.setState({            
          selectedUrs: '',
          selectedUrsID: '',     
        });
      }      
           
      console.log(this.state);    
      });
    }
    else {
    getUrsText(this.state.selectedUrs).then((output) => {
      console.log(output);        
    
      this.setState({              
        causeCombo: output.data,   
          
      });   
    
    console.log(this.state);    
    });
    }
  }
  
}
// ------------------ MAßNAHMEN --------------------------------------------------------
removeMas(){
  let temp = {
    id: this.state.selectedMasID,
    text: this.state.selectedMas
  }

  let tempArr = this.state.action;

  tempArr = tempArr.filter(function(e){
    return (e.id !== temp.id) & (e.text !== temp.text);
  })

  console.log(tempArr);

  this.setState({
    action: tempArr,
  });
}

fillInMasID(e){
  this.setState({
    selectedMasID: e.target.value,
  });
}

insertMas(){
  let temp = {
    id: this.state.selectedMasID,
    text: this.state.selectedMas,
  };

  let tempState = this.state.action;

  if (!tempState.find(function(e){return (e.id === temp.id) & (e.text === temp.text) })){
    tempState.push(temp);
    this.setState({
      action: tempState,
    })
  }    
}

getMasByID(){
  if (this.state.selectedMas === "" && this.state.selectedMasID === ""){
    alert("Please fill in a_id or a_text");
  } else {
    if (this.state.selectedMasID){
      getMas(this.state.selectedMasID).then((output) => {
        console.log(output);
        let temp = output.data.myActionList[0];
    
        console.log('TL');
        
        if (temp !== null){
          this.setState({              
            selectedMas: temp.text,
            selectedMasID: temp.id,        
          });              
      } else {
        this.setState({            
          selectedMas: '',
          selectedMasID: '',     
        });
      }      
           
      console.log(this.state);    
      });
    
    } else {
    getMasText(this.state.selectedMas).then((output) => {
      console.log(output);        
    
      this.setState({              
        actionCombo: output.data,   
          
      });   
    
    console.log(this.state);    
    });
    }
  }
  
}
// ------------------ EVENT --------------------------------------------------------
removeEve(){
  let temp = {
    id: this.state.selectedEveID,
    text: this.state.selectedEve
  }

  let tempArr = this.state.event;

  tempArr = tempArr.filter(function(e){
    return (e.id !== temp.id) & (e.text !== temp.text);
  })

  console.log(tempArr);

  this.setState({
    event: tempArr,
  });
}

fillInEveID(e){
  this.setState({
    selectedEveID: e.target.value,
  });
}

insertEve(){
  let temp = {
    id: this.state.selectedEveID,
    text: this.state.selectedEve,
  };

  let tempState = this.state.event;

  if (!tempState.find(function(e){return (e.id === temp.id) & (e.text === temp.text) })){
    tempState.push(temp);
    this.setState({
      event: tempState,
    })
  }    
}

getEveByID(){
  if (this.state.selectedEve === "" && this.state.selectedEveID === ""){
    alert("Please fill in e_id or e_text");
  } else {
    if (this.state.selectedEveID){
      getEve(this.state.selectedEveID).then((output) => {
        console.log(output);
        let temp = output.data.myEventList[0];
    
        console.log('TL');
        
        if (temp !== null){
          this.setState({              
            selectedEve: temp.text,
            selectedEveID: temp.id,        
          });              
      } else {
        this.setState({            
          selectedEve: '',
          selectedEveID: '',     
        });
      }      
           
      console.log(this.state);    
      });
    
    } else {
    getEveText(this.state.selectedEve).then((output) => {
      console.log(output);        
    
      this.setState({              
        eventCombo: output.data,   
          
      });   
    
    console.log(this.state);    
    });
    
    }
  }
  
}
 // ------------------ FUNCTION --------------------------------------------------------
 removeFunc(){
  let temp = {
    id: this.state.selectedFuncID,
    text: this.state.selectedFunc
  }

  let tempArr = this.state.func;

  tempArr = tempArr.filter(function(e){
    return (e.id !== temp.id) & (e.text !== temp.text);
  })

  console.log(tempArr);

  this.setState({
    func: tempArr,
  });
}

fillInFuncID(e){
  this.setState({
    selectedFuncID: e.target.value,
  });
}

insertFunc(){
  let temp = {
    id: this.state.selectedFuncID,
    text: this.state.selectedFunc,
  };

  let tempState = this.state.func;

  if (!tempState.find(function(e){return (e.id === temp.id) & (e.text === temp.text) })){
    tempState.push(temp);
    this.setState({
      func: tempState,
    })
  }    
}

getFuncByID(){
  if (this.state.selectedFunc === "" && this.state.selectedFuncID === ""){
    alert("Please fill in f_id or f_text");
  } else {
    if(this.state.selectedFuncID){
      getFunc(this.state.selectedFuncID).then((output) => {
        console.log(output);
        let temp = output.data.myFuncList[0];
    
        console.log('TL');
        
        if (temp !== null){
          this.setState({              
            selectedFunc: temp.text,
            selectedFuncID: temp.id,        
          });              
      } else {
        this.setState({            
          selectedFunc: '',
          selectedFuncID: '',     
        });
      }      
           
      console.log(this.state);    
      });
    
    } else {
    getFuncText(this.state.selectedFunc).then((output) => {
      console.log(output);        
    
      this.setState({              
        funcCombo: output.data,   
          
      });   
    
    console.log(this.state);    
    });
    }
  }
  
}
 // ------------------ KEYWORD --------------------------------------------------------
 removeKey(){
  let temp = {
    id: this.state.selectedKeyID,
    text: this.state.selectedKey
  }

  let tempArr = this.state.keyword;

  tempArr = tempArr.filter(function(e){
    return (e.id !== temp.id) & (e.text !== temp.text);
  })

  console.log(tempArr);

  this.setState({
    keyword: tempArr,
  });
}

fillInKeyID(e){
  this.setState({
    selectedKeyID: e.target.value,
  });
}

insertKey(){
  let temp = {
    id: this.state.selectedKeyID,
    text: this.state.selectedKey,
  };

  let tempState = this.state.keyword;

  if (!tempState.find(function(e){return (e.id === temp.id) & (e.text === temp.text) })){
    tempState.push(temp);
    this.setState({
      keyword: tempState,
    })
  }    
}

getKeyByID(){
  if (this.state.selectedKey === "" && this.state.selectedKeyID === ""){
    alert("Please fill in k_id or k_text");
  } else {
    if (this.state.selectedKeyID){
      getKey(this.state.selectedKeyID).then((output) => {
        console.log(output);
        let temp = output.data.myKeyList[0];
    
        console.log('TL');
        
        if (temp !== null){
          this.setState({              
            selectedKey: temp.text,
            selectedKeyID: temp.id,        
          });              
      } else {
        this.setState({            
          selectedKey: '',
          selectedKeyID: '',     
        });
      }      
           
      console.log(this.state);    
      });
    
    } else {
    getKeyText(this.state.selectedKey).then((output) => {
      console.log(output);        
    
      this.setState({              
        keyCombo: output.data,   
          
      });   
    
    console.log(this.state);    
    });
    }
  }
  
}

// ------------------ BETRIEB --------------------------------------------------------
removeOps(){
  let temp = {
    id: this.state.selectedOpsID,
    text: this.state.selectedOps
  }

  let tempArr = this.state.operation;

  tempArr = tempArr.filter(function(e){
    return (e.id !== temp.id) & (e.text !== temp.text);
  })

  console.log(tempArr);

  this.setState({
    operation: tempArr,
  });
}

fillInOpsID(e){
  this.setState({
    selectedOpsID: e.target.value,
  });
}

insertOps(){
  let temp = {
    id: this.state.selectedOpsID,
    text: this.state.selectedOps,
  };

  let tempState = this.state.operation;

  if (!tempState.find(function(e){return (e.id === temp.id) & (e.text === temp.text) })){
    tempState.push(temp);
    this.setState({
      operation: tempState,
    })
  }    
}

getOpsByID(){
  if (this.state.selectedOps === "" && this.state.selectedOpsID === ""){
    alert("Please fill in o_id or o_text");  
  } else {
    if (this.state.selectedOpsID){
      getOps(this.state.selectedOpsID).then((output) => {
        console.log(output);
        let temp = output.data.myOpsList[0];
    
        console.log('TL');
        
        if (temp !== null){
          this.setState({              
            selectedOps: temp.text,
            selectedOpsID: temp.id,        
          });              
      } else {
        this.setState({            
          selectedOps: '',
          selectedOpsID: '',     
        });
      }      
           
      console.log(this.state);    
      });
    
    } else {
    getOpsText(this.state.selectedOps).then((output) => {
      console.log(output);        
    
      this.setState({              
        opsCombo: output.data,   
          
      });   
    
    console.log(this.state);    
    });
    }
  }
  
}





createElement(tempData){
  let temp = [];
  //console.log('TEMP DATA');
  console.log(tempData);
  // Base ID
  if (tempData.baseID.length>0){
    temp.push({
      id: '1',
      type: 'input',
      data: {label : 'baseID: '+tempData.baseID[0].id},
      position: { x: 5, y: 6},
    })
  } else {
    temp.push({
      id: '1',
      type: 'input',
      data: {label : 'No Base ID'},
      position: { x: 5, y: 6},
    })
  }

  // Action ID 
  if (tempData.action.length>0){
    let i = 10;
    tempData.action.map(a => { 
         
      temp.push({
        id: a.id.toString(),   
        type: 'input',     
        data: {label : 'a_id:' + a.id},
        position: { x: 100, y: i*50},
      },{ id: 'e1'+'-'+a.id, source: '1', target: a.id.toString(), animated: true });
      i++;
    
    })
    
  } else {
    temp.push({
      id: '2',        
      type: 'input',
      data: {label : 'No Action ID'},
      position: { x: 100, y: 100},
    },{ id: 'e1-2', source: '1', target: '2',animated: true })
  }

  // Desc ID 
  if (tempData.description.length>0){
    let i = 5;
    tempData.description.map(d => { 
         
      temp.push({
        id: d.id.toString(),  
        type: 'input',      
        data: {label : 'd:id:' + d.id},
        position: { x: 200, y: i*50},
      },{ id: 'e1'+'-'+d.id, source: '1', target: d.id.toString(), animated: true });
      i++;
    
    })      
  } else {
    temp.push({
      id: '3',       
      type: 'input', 
      data: {label : 'No Description ID'},
      position: { x: 250, y: 100},
    },{ id: 'e1-3', source: '1', target: '3', animated: true },)
  }

  // Cause ID 
  if (tempData.cause.length>0){
    let i = 2;
    tempData.cause.map(c => { 
         
      temp.push({
        id: c.id.toString(),    
        type: 'input',    
        data: {label : 'c:id:' + c.id},
        position: { x: 300, y: i*50},
      },{ id: 'e1'+'-'+c.id, source: '1', target: c.id.toString(), animated: true });
      i++;
    
    })           
  } else {
    temp.push({
      id: '4',        
      type: 'input',
      data: {label : 'No Cause ID'},
      position: { x: 300, y: 100},
    },{ id: 'e1-4', source: '1', target: '4', animated: true },)
  }

  return temp;
}

clickCheckBox(e) {
  if (e.target.name === "DescCheck"){
    console.log(e.target);
    this.setState({
      selectedDesc: e.target.value,
      selectedDescID: e.target.id,
    })      
  } else if (e.target.name === "UrsCheck"){
    this.setState({
      selectedUrs: e.target.value,
      selectedUrsID: e.target.id,
    })
  } else if (e.target.name === "MasCheck"){
    this.setState({
      selectedMas: e.target.value,
      selectedMasID: e.target.id,
    })
  } else if (e.target.name === "EveCheck"){
    this.setState({
      selectedEve: e.target.value,
      selectedEveID: e.target.id,
    })
  } else if (e.target.name === "FuncCheck"){
    this.setState({
      selectedFunc: e.target.value,
      selectedFuncID: e.target.id,
    })
  } else if (e.target.name === "KeyCheck"){
    this.setState({
      selectedKey: e.target.value,
      selectedKeyID: e.target.id,
    })
  } else if (e.target.name === "OpsCheck"){
    this.setState({
      selectedOps: e.target.value,
      selectedOpsID: e.target.id,
    })
  }
  
  console.log(e.target);
}

updateDTC(){

    let toSend = {
      b_id: '',
      a_id: '',
      d_id: '',
      c_id: '',
      e_id: '',
      f_id: '',
      k_id: '',
      o_id: '',
      n_id: '',
    };

    let tempb = this.state.baseID;
    if (tempb.length>0){
      
      let temp1 = [];
      tempb.map((e)=>{
         temp1.push(e.id); 
      })

      toSend.b_id = temp1.join('-');
    }

    
    let tempa = this.state.action;
    if (tempa.length>0){
      
      let temp1 = [];
      tempa.map((e)=>{
         temp1.push(e.id); 
      })

      toSend.a_id = temp1.join('-');
    }

    let tempd = this.state.description;
    if (tempd.length>0){        
      let temp1 = [];
      tempd.map((e)=>{
         temp1.push(e.id); 
      })

      toSend.d_id = temp1.join('-');
    }

    let tempc = this.state.cause;
    if (tempc.length>0){        
      let temp1 = [];
      tempc.map((e)=>{
         temp1.push(e.id); 
      })

      toSend.c_id = temp1.join('-');
    }

    let tempe = this.state.event;
    if (tempe.length>0){        
      let temp1 = [];
      tempe.map((e)=>{
         temp1.push(e.id); 
      })

      toSend.e_id = temp1.join('-');
    }

    let tempf = this.state.func;
    if (tempf.length>0){        
      let temp1 = [];
      tempf.map((e)=>{
         temp1.push(e.id); 
      })

      toSend.f_id = temp1.join('-');
    }

    let tempk = this.state.keyword;
    if (tempk.length>0){        
      let temp1 = [];
      tempk.map((e)=>{
         temp1.push(e.id); 
      })

      toSend.k_id = temp1.join('-');
    }

    let templ = this.state.localization;
    if (templ.length>0){        
      let temp1 = [];
      templ.map((e)=>{
         temp1.push(e.id); 
      })

      toSend.l_id = temp1.join('-');
    }

    let tempo = this.state.operation;
    if (tempo.length>0){        
      let temp1 = [];
      tempo.map((e)=>{
         temp1.push(e.id); 
      })

      toSend.o_id = temp1.join('-');
    }

    let tempn = this.state.name;
    if (tempn.length>0){        
      let temp1 = [];
      tempn.map((e)=>{
         temp1.push(e.id); 
      })

      toSend.n_id = temp1.join('-');
    }

    console.log('Hier 1 ');
    console.log(toSend);

      updateMySQLDTC(toSend).then((output) => {
        console.log(output);                          
      });
}

getTotal () {
  console.log("Hier");

  getDTCOut(this.state.e_id,this.state.xx,this.state.s_str).then((output) => {
      console.log("OUTPUT");
      console.log(output);
      let temp = output.data;
      let tempE = this.createElement(output.data);

      console.log('TL');
      console.log(tempE);

      if (temp != null){
        this.setState({ 
          baseID: temp['baseID'],             
          action : temp['action'],
          name : temp['name'],
          description : temp['description'],
          cause : temp['cause'],
          event : temp['event'],
          func : temp['function'],
          keyword : temp['keyword'],
          localization : temp['localization'],
          operation : temp['operation'],
          name : temp['name'],   
          elements : tempE,            
        });

              
    } else {
      this.setState({            
        action : [],
        description : [],
        cause : [],
        event : [],
        function : [],
        keyword : [],
        localization : [],
        operation : [], 
        elements : [],
        name : [],         
      });
    }      
         
    console.log(this.state);    
    }).catch((err)=>{alert(err)}); 
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


     render(){
        return (


            <div className="box-field">
  <div className="box-fieldIn" >
 

  
<div className = "suchen">
            <Form>
           
            <Form.Label className="label"><strong>Display DTC Details</strong></Form.Label>
        
          <Col>
          <Form.Row>
          <Col>
                    <Form.Control  as="input" className="input" placeHolder="Fill in e_id" onChange ={this.fillInE} />    
                </Col>
                <Col>
                    <Form.Control  as="input" className="input" placeHolder="Fill in xx" onChange ={this.fillInX} />
         
                </Col>
                <Col>
                    <Form.Control  as="input" className="input" placeHolder="Fill in s_str" onChange ={this.fillInS} />

                      
                </Col>
            
            <Button className="sub_button" variant="secondary" onClick={this.getTotal}>GET</Button>
            <Button className="sub_button" variant="secondary" onClick={this.updateDTC}>UPDATE</Button>
            </Form.Row>
            <hr style={{ backgroundColor: 'black', height: 1}}/>

            <ListGroup >
              <Form.Row>
                <Col>
                  <Form.Label className="label1">
                           <strong> BESCHREIBUNG</strong>
                  </Form.Label>
                </Col>


              </Form.Row>
              

              <Form.Group>
                {this.state.description.map(desc => (
                  <Form.Check value={parse(desc.text)} id={desc.id} name="DescCheck" type="radio" label={parse(desc.text)} onChange={this.clickCheckBox}/>            
                ))}                  
              </Form.Group>
             
            </ListGroup>

            <ListGroup>
            <Form.Row>
                <Col>
                  <Form.Label className="label1">
                           <strong>URSACHEN</strong>
                  </Form.Label>
                </Col>

              </Form.Row>

              <Form.Group>
                {this.state.cause.map(c => (
                  <Form.Check id={c.id} value={parse(c.text)} type="radio" name="UrsCheck" label={parse(c.text)} onChange={this.clickCheckBox}/>                  
                ))}                  
              </Form.Group>
           
            </ListGroup>

            <ListGroup>
                <Form.Row>
                    <Col>
                      <Form.Label className="label1"> 
                              <strong> MAßNAHMEN</strong>
                      </Form.Label>
                    </Col>
               </Form.Row>

                <Form.Group>
                  {this.state.action.map(a => (
                    <Form.Check id={a.id} value={parse(a.text)} type="radio" name="MasCheck" label={parse(a.text)} onChange={this.clickCheckBox}/>    
                  ))}                  
                </Form.Group>
                
              
            </ListGroup>

            <ListGroup>
            <Form.Row>
                <Col>
                  <Form.Label className="label1">
                           <strong> EREIGNISGRUPPE</strong>
                  </Form.Label>
                </Col>
              </Form.Row>

              <Form.Group>
                {this.state.event.map(e => (
                  <Form.Check id={e.id} value={parse(e.text)} name="EveCheck" type="radio" label={parse(e.text)} onChange={this.clickCheckBox}/>
                ))}                  
              </Form.Group>
             
              
            </ListGroup>

            <ListGroup>
              <Form.Row>
                  <Col>
                    <Form.Label className="label1">
                            <strong>FUNKTIONSGRUPPEN</strong>
                    </Form.Label>
                  </Col>

                </Form.Row>

                <Form.Group>
                  {this.state.func.map(f => (
                    <Form.Check id={f.id.toString()} value={parse(f.text)} name="FuncCheck" type="radio" label={parse(f.text)} onChange={this.clickCheckBox}/>            
                  ))}                  
                </Form.Group>
            </ListGroup>

            <ListGroup>
              <Form.Row>
                  <Col>
                    <Form.Label className="label1">
                            <strong> SCHLÜSSELWÖRTER</strong>
                    </Form.Label>
                  </Col>
                </Form.Row>

                <Form.Group>
                  {this.state.keyword.map(k => (
                    <Form.Check id={k.id.toString()} value={parse(k.text)} type="radio" name="KeyCheck" label={parse(k.text)} onChange={this.clickCheckBox}/>
                  ))}                  
                </Form.Group>
              
            </ListGroup>

            <ListGroup>
              <Form.Row>
                  <Col>
                    <Form.Label className="label1">
                            <strong> BETRIEBZUSTÄNDE</strong>
                    </Form.Label>
                  </Col>
                </Form.Row>

                <Form.Group>
                  {this.state.operation.map(o => (
                    <Form.Check id={o.id.toString()} value={parse(o.text)} type="radio" name="OpsCheck" label={parse(o.text)} onChange={this.clickCheckBox} />
                  ))}    
            
                </Form.Group>
                 
            </ListGroup>
            
          
       </Col>  
   
      </Form>
 
    
      <div><DesBox/></div>


      </div>
</div>

<div className="box-fieldIn" >
  

  
<div className = "suchen">
            <Form>
           
            <Form.Label className="label"><strong>Insert/Remove DTC Details</strong></Form.Label>
        <Form.Row className="center">
          <Col>

    <Table striped bordered hover variant="dark" responsive> 
  <thead>
    <tr>
      <th>BESCHREIBUNG</th>
      <th> <Form.Control as="input" className="input" value={this.state.selectedDescID} onChange = {this.fillInDescID} placeholder="Fill in d_id"/></th>
      <th><Button className="sub_button" variant="secondary" onClick = {this.getDescByID}>
                  LOAD
            </Button> </th>
      <th> <Button className="sub_button" variant="secondary" onClick = {this.insertDesc}>
                  INSERT
            </Button> </th>
      <th> <Button className="sub_button" variant="secondary"  onClick = {this.removeDesc}>
              REMOVE
          </Button> </th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td colspan="3" ><Form.Control as="input"  value={parse(this.state.selectedDesc)} onChange= {this.fillInDesc} placeholder="d_text" /></td>
     <td colspan="2"  > <DropdownButton  variant="secondary"
                    alignRight title="Desc Dropdown" id="Desc Dropdown" onSelect={this.selectDropDesc}>
                    {this.state.descCombo.map(desc => (
                      <Dropdown.Item eventKey={desc.id}>{parse(desc.text)}</Dropdown.Item>
                    ))} 
                    
                </DropdownButton></td>
    </tr>
    
  </tbody>

  <thead>
    <tr>
      <th>URSACHEN</th>
      <th><Form.Control as="input" className="input" value={this.state.selectedUrsID} onChange= {this.fillInUrsID} placeholder="Fill in c_id"/></th>
      <th><Button className="sub_button" variant="secondary" onClick = {this.getUrsByID} >
                  LOAD
            </Button> </th>
      <th> <Button className="sub_button" variant="secondary"  onClick = {this.insertUrs}>
                  INSERT
            </Button> </th>
            <th> <Button className="sub_button" variant="secondary"  onClick = {this.removeUrs}>
            REMOVE
          </Button> </th>
      
    </tr>
  </thead>
  <tbody>
    <tr>
      <td colspan="3" > <Form.Control as="input" value={parse(this.state.selectedUrs)} onChange= {this.fillInUrs} placeholder="c_text"/></td>
      <td colspan="2"  > <DropdownButton variant="secondary" alignRight
                        title="Cau Dropdown" id="Desc Dropdown" onSelect={this.selectDropCause} >
                    {this.state.causeCombo.map(c => (
                      <Dropdown.Item eventKey={c.id}>{parse(c.text)}</Dropdown.Item>
                    ))} 
                    
                </DropdownButton>
                    
                </td>
    </tr>
 
  </tbody>

  <thead>
    <tr>
      <th>MAßNAHMEN</th>
      <th><Form.Control as="input" className="input" value={this.state.selectedMasID}onChange= {this.fillInMasID} placeholder="Fill in a_id"/></th>
      <th><Button className="sub_button" variant="secondary" onClick = {this.getMasByID}>
                  LOAD
            </Button> </th>
      <th> <Button className="sub_button" variant="secondary" onClick = {this.insertMas}>
                  INSERT
            </Button> </th>
            <th> <Button className="sub_button" variant="secondary"   onClick = {this.removeMas}>
            REMOVE
          </Button> </th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td colspan="3" > <Form.Control as="input" value={parse(this.state.selectedMas)} onChange= {this.fillInMas} placeholder="a_text"/></td>
     <td colspan="2"><DropdownButton variant="secondary"
                        alignRight title="Act Dropdown" id="Act Dropdown" onSelect={this.selectDropAct}>
                    {this.state.actionCombo.map(a => (
                      <Dropdown.Item eventKey={a.id}>{parse(a.text)}</Dropdown.Item>
                    ))} 
                    
                </DropdownButton></td>
    </tr>
 
  </tbody>

  <thead>
    <tr>
      <th>EREIGNISGRUPPE</th>
      <th><Form.Control as="input" className="input" value={this.state.selectedEveID} onChange= {this.fillInEveID} placeholder="Fill in e_id"/></th>
      <th><Button className="sub_button" variant="secondary" onClick = {this.getEveByID}>
                  LOAD
            </Button> </th>
      <th> <Button className="sub_button" variant="secondary" onClick = {this.insertEve}>
                  INSERT
            </Button> </th>
            <th> <Button className="sub_button" variant="secondary"  onClick = {this.removeEve}>
            REMOVE
          </Button> </th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td colspan="3" > <Form.Control as="input" value={parse(this.state.selectedEve)} placeholder="e_text" onChange= {this.fillInEve}/></td>
      <td colspan="2"> <DropdownButton alignRight variant="secondary"
                        title="Eve Dropdown" id="Eve Dropdown" onSelect={this.selectDropEvent} >
                    {this.state.eventCombo.map(e => (
                      <Dropdown.Item eventKey={e.id}>{parse(e.text)}</Dropdown.Item>
                    ))} 
                    
                </DropdownButton></td>
    </tr>
 
  </tbody>

  <thead>
    <tr>
      <th>FUNKTIONSGRUPPEN</th>
      <th><Form.Control as="input" className="input" value={this.state.selectedFuncID} onChange= {this.fillInFuncID} placeholder="Fill in f_id"/></th>
      <th><Button className="sub_button" variant="secondary"  onClick = {this.getFuncByID}>
                  LOAD
            </Button> </th>
      <th> <Button className="sub_button" variant="secondary" onClick = {this.insertFunc}>
                  INSERT
            </Button> </th>

            <th> <Button className="sub_button" variant="secondary"  onClick = {this.removeFunc}>
            REMOVE
          </Button> </th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td colspan="3" > <Form.Control as="input" value={parse(this.state.selectedFunc)} placeholder="f_text" onChange= {this.fillInFunc}/></td>
      <td colspan="2"><DropdownButton alignRight variant="secondary"
                        title="Func Dropdown" id="Func Dropdown" onSelect={this.selectDropFunc}>
                    {this.state.funcCombo.map(f => (
                      <Dropdown.Item eventKey={f.id}>{parse(f.text)}</Dropdown.Item>
                    ))} 
                    
                </DropdownButton></td>
    </tr>
 
  </tbody>

  <thead>
    <tr>
      <th>SCHLÜSSELWÖRTER</th>
      <th><Form.Control as="input" className="input" value={this.state.selectedKeyID} onChange= {this.fillInKeyID} placeholder="Fill in k_id"/></th>
      <th><Button className="sub_button" variant="secondary"  onClick = {this.getKeyByID}>
                  LOAD
            </Button> </th>
      <th> <Button className="sub_button" variant="secondary" onClick = {this.insertKey}>
                  INSERT
            </Button> </th>
            <th> <Button className="sub_button" variant="secondary"  onClick = {this.removeKey}>
            REMOVE
          </Button> </th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td colspan="3" > <Form.Control as="input" value={parse(this.state.selectedKey)} placeholder="k_text" onChange= {this.fillInKey}/></td>
     <td colspan="2"><DropdownButton alignRight variant="secondary"
                   title="Key Dropdown" id="Key Dropdown"  onSelect={this.selectDropKey}
                >
                    {this.state.keyCombo.map(k => (
                      <Dropdown.Item eventKey={k.id}>{parse(k.text)}</Dropdown.Item>
                    ))} 
                    
                </DropdownButton></td>
    </tr>
 
  </tbody>

  <thead>
    <tr>
      <th>BETRIEBZUSTÄNDE</th>
      <th><Form.Control as="input" className="input" value={this.state.selectedOpsID} onChange= {this.fillInOpsID} placeholder="Fill in o_id"/></th>
      <th><Button className="sub_button" variant="secondary" onClick = {this.getOpsByID}>
                  LOAD
            </Button> </th>
      <th> <Button className="sub_button" variant="secondary" onClick = {this.insertOps}>
                  INSERT
            </Button> </th>
            <th> <Button className="sub_button" variant="secondary"   onClick = {this.removeOps}>
            REMOVE
          </Button> </th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td colspan="3" > <Form.Control as="input" value={parse(this.state.selectedOps)} placeholder="o_text" onChange= {this.fillInOps}/></td>
      <td colspan="2"><DropdownButton alignRight variant="secondary"
                        title="Ops Dropdown" id="Ops Dropdown" onSelect={this.selectDropOps}>
                    {this.state.opsCombo.map(o => (
                      <Dropdown.Item eventKey={o.id}>{parse(o.text)}</Dropdown.Item>
                    ))} 
                    
                </DropdownButton></td>
    </tr>
 
  </tbody>
</Table>
               
          </Col>  
        </Form.Row>
      </Form>
      
      <Form.Label className="label"><strong>Relation Graph</strong></Form.Label>
    <div className="graph"><RelationGraph elements = {this.state.elements} />
      </div>

      <div ><BaseIDBox/></div>
      
                  
                  
            </div>
            
</div>

      </div>



        );
        

    }
}
