import React from 'react';
import {Col, Card, Button} from 'react-bootstrap';
import { Bar, Doughnut } from 'react-chartjs-2';
import {Mild, Modarate, Severe, CA, CB, CC, CD, CE, CF, CG, CH, CI} from '../../Admin/GraphAnalyzer';



function Dashboard(props) {
 
const mild = Mild();
const modarate = Modarate();
const severe = Severe();
const a = CA();
const b = CB();
const c = CC();
const d = CD();
const e = CE();
const f = CF();
const g = CG();
const h = CH();
const i = CI();

function refreshPage() {
  window.location.reload(false);
}

 const data1 = {
  labels: ['MILD', 'MODARATE', 'SEVERE'],
  datasets: [
    {
      label: 'Number of People vs Age Range',
      backgroundColor: ['#1abc9c', '#f39c12', '#e74c3c'],
      hoverBackgroundColor: ['#16a085', '#e67e22', '#c0392b'],
      data: [mild, modarate, severe]
    }
  ]
};

const data2 = {
  labels: ['10-19', '20-29', '30-39', '40-49', '50-59', '60-69', '70-79', '80-89', '90-100'],
  datasets: [
    {
      label: 'Number of People',
      backgroundColor: '#34495e',
      hoverBackgroundColor: '#2c3e50',
      data: [a, b, c, d, e, f, g, h, i]
    }
  ]
};

  return (
    <Col>
      {props.screen === true ? (
      <div style={{height:'95vh', textAlign:'center'}}>
        <div>
          <h1>
            Welcome Steve!
          </h1>
         <Button variant="success" onClick={refreshPage}>Log out</Button>
       <br /><br />
      </div>
       <Card >
         <Card.Header>
         Number of People vs Age Range
         </Card.Header>
         <Card.Body>
         <Doughnut
          data={data1}
          width={100}
          height={100}
          options={{
          maintainAspectRatio: true
          }}
        />
         </Card.Body>
       </Card>
       <Card >
        <Card.Header>
         Number of People vs Addiction Stages
         </Card.Header>
         <Card.Body>
         <Bar
          data={data2}
          width={100}
          height={100}
          options={{
            maintainAspectRatio: true
          }}
        />
         </Card.Body>
       </Card>
      </div> 
      ) : (
        <h1>
          Not authenticated!
        </h1>
      )}
    </Col>
  );
}

export default Dashboard;
