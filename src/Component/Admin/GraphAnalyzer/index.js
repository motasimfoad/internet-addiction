import {useQuery} from '@apollo/client';
import React from 'react';
import {MILD_COUNT, MODARATE_COUNT, SEVERE_COUNT} from '../../../Constant/GraphQl';

const Mild = () => {

    const { loading, error, data } = useQuery(MILD_COUNT);
  
  
  
    if (data) {
  
      return parseInt(data.iat_aggregate.aggregate.count);
      
      //(data.iat_aggregate.aggregate.count);
  
    }
  
    if (error) {
  
      console.error(error);
  
      return <div>Error!</div>;
  
    }
  
    return <div>Loading...</div>;
  
  };
  

export  {Mild};