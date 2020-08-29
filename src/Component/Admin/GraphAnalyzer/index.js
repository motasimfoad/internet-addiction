import {useQuery} from '@apollo/client';
import React from 'react';
import {MILD_COUNT, MODARATE_COUNT, SEVERE_COUNT} from '../../../Constant/GraphQl';

const Mild = () => {
    const { data } = useQuery(MILD_COUNT);
        if (data) {
            return parseInt(data.iat_aggregate.aggregate.count);
      }
  };

const Modarate = () => {
    const { data } = useQuery(MODARATE_COUNT);
        if (data) {
            return parseInt(data.iat_aggregate.aggregate.count);
      }
  };

 const Severe = () => {
    const { data } = useQuery(SEVERE_COUNT);
        if (data) {
            return parseInt(data.iat_aggregate.aggregate.count);
      }
  };
  

export  {Mild, Modarate, Severe};