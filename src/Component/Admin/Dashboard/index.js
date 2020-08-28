import React from 'react';
import {Col} from 'react-bootstrap';
import { Bar } from 'react-chartjs-2';

function Dashboard(props) {

  return (
    <Col>
      {props.screen === true ? (
      <div style={{backgroundColor:'red', height:'95vh', textAlign:'center'}}>
       <h1>
         Welcome Steve
       </h1>
     
      </div> 
      ) : (
        <h1>
          not authenticated
        </h1>
      )}
    </Col>
  );
}

export default Dashboard;
