import React, {useState, useReducer, useContext} from 'react';
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

// const [a, setA] = useState();


const TodoPrivateListQuery = () => {

  const { loading, error, data } = useQuery(MILD_COUNT);



  if (data) {

    return parseInt (data.iat_aggregate.aggregate.count);
    
    //(data.iat_aggregate.aggregate.count);

  }

  if (error) {

    console.error(error);

    return <div>Error!</div>;

  }

  return <div>Loading...</div>;

};




// const [mildGraph, setMildGraph] = useState();



function Dashboard(props) {
  //const data = useQuery(MILD_COUNT);
  //  const a = useState({TodoPrivateListQuery})
  //console.log([data.data][0]);
const a = TodoPrivateListQuery();
  
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
