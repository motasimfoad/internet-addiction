import React from 'react';
import {Col} from 'react-bootstrap';
import { Bar } from 'react-chartjs-2';
import {Mild} from '../../Admin/GraphAnalyzer';




function Dashboard(props) {
 
const a = Mild();
  
 console.log(a);

 const data2 = {
  labels: ['MILD', 'MODARATE', 'SEVERE'],
  datasets: [
    {
      label: 'stages vs total number',
      backgroundColor: 'rgba(255,99,132,0.2)',
      borderColor: 'rgba(255,99,132,1)',
      borderWidth: 1,
      hoverBackgroundColor: 'rgba(255,99,132,0.4)',
      hoverBorderColor: 'rgba(255,99,132,1)',
      data: [a, 59, 80]
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
