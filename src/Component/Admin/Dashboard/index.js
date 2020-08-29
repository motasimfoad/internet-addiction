import React from 'react';
import {Col, Card} from 'react-bootstrap';
import { Bar, Doughnut } from 'react-chartjs-2';
import {Mild, Modarate, Severe, CA, CB, CC, CD, CE, CF, CG, CH, CI} from '../../Admin/GraphAnalyzer';

function Dashboard(props) {
 
const mild = Mild();
const modarate = Modarate();
const severe = Severe();
const a = CA();
const b = CB();


 const data2 = {
  labels: ['MILD', 'MODARATE', 'SEVERE'],
  datasets: [
    {
      label: 'Number of People vs Age Range',
      backgroundColor: [
      '#1abc9c',
      '#f39c12',
      '#e74c3c',],
      hoverBackgroundColor: [
      '#16a085',
      '#e67e22',
      '#c0392b',
      ],
      data: [mild, modarate, severe]
    }
  ]
};

const data3 = {
  labels: ['10-19', '20-29', '30-39', '40-49', '50-59', '60-69', '70-79', '80-89', '90-100'],
  datasets: [
    {
      label: 'Number of People vs Age Range',
      backgroundColor: '#1abc9c',
      hoverBackgroundColor: '#16a085',
      data: [a, b, 7]
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
       <Card>
         <Card.Header>
         Number of People vs Addiction Stages
         </Card.Header>
         <Card.Body>
         <Doughnut
          data={data2}
          width={100}
          height={50}
          options={{
            maintainAspectRatio: true
          }}
        />
         </Card.Body>
       </Card>
       <Card>
        
         <Card.Body>
         <Bar
          data={data3}
          width={100}
          height={50}
          options={{
            maintainAspectRatio: true
          }}
        />
         </Card.Body>
       </Card>
       
     
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
