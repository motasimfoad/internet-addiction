import React from 'react';
import {Col} from 'react-bootstrap';
import { Bar } from 'react-chartjs-2';
import {Mild, Modarate, Severe} from '../../Admin/GraphAnalyzer';




function Dashboard(props) {
 
const a = Mild();
const b = Modarate();
const c = Severe();
  
 console.log(a);

 const data2 = {
  labels: ['MILD', 'MODARATE', 'SEVERE'],
  datasets: [
    {
      label: 'Number of People vs Addiction Stages',
      backgroundColor: [
      '#1abc9c',
      '#f39c12',
      '#e74c3c',],
      hoverBackgroundColor: [
      '#16a085',
      '#e67e22',
      '#c0392b',
      ],
      data: [a, b, c]
    }
  ]
};
  

  return (
    <Col>
      {props.screen === true ? (
      <div style={{height:'95vh', textAlign:'center'}}>
       <h1>
         Welcome Steve
       </h1>
       <Bar
          data={data2}
          width={100}
          height={50}
          options={{
            maintainAspectRatio: true
          }}
        />
     
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
