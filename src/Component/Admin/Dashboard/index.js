import React, {useState} from 'react';
import {Col} from 'react-bootstrap';
import { Bar } from 'react-chartjs-2';
import {gql, useQuery} from '@apollo/client';

const MILD_COUNT = gql`
query Mild {
  iat_aggregate(where: {stage: {_eq: "mild"}}) {
    aggregate {
      count
    }
  }
}
`;

const MODARATE_COUNT = gql`
query Modarate {
  iat_aggregate(where: {stage: {_eq: "modarate"}}) {
    aggregate {
      count
    }
  }
}
`;

const SEVERE_COUNT = gql`
query Severe {
  iat_aggregate(where: {stage: {_eq: "severe"}}) {
    aggregate {
      count
    }
  }
}
`;





const data = {
  labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
  datasets: [
    {
      label: 'stages vs total number',
      backgroundColor: 'rgba(255,99,132,0.2)',
      borderColor: 'rgba(255,99,132,1)',
      borderWidth: 1,
      hoverBackgroundColor: 'rgba(255,99,132,0.4)',
      hoverBorderColor: 'rgba(255,99,132,1)',
      data: [65, 59, 80, 81, 56, 55, 40]
    }
  ]
};

function Dashboard(props) {
  const mild = useQuery(MILD_COUNT);
  console.log(mild.data);

  return (
    <Col>
      {props.screen === true ? (
      <div style={{height:'95vh', textAlign:'center'}}>
       <h1>
         Welcome Steve
       </h1>
       <Bar
          data={data}
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
