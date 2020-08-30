import {useQuery} from '@apollo/client';
import {MILD_COUNT, MODARATE_COUNT, SEVERE_COUNT, a, b, c, d, e, f, g, h, i} from '../../../Constant/GraphQl';

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

const CA = () => {
    const { data } = useQuery(a);
        if (data) {
            return parseInt(data.iat_aggregate.aggregate.count);
      }
  };

  const CB = () => {
    const { data } = useQuery(b);
        if (data) {
            return parseInt(data.iat_aggregate.aggregate.count);
      }
  };

  const CC = () => {
    const { data } = useQuery(c);
        if (data) {
            return parseInt(data.iat_aggregate.aggregate.count);
      }
  };

  const CD = () => {
    const { data } = useQuery(d);
        if (data) {
            return parseInt(data.iat_aggregate.aggregate.count);
      }
  };

  const CE = () => {
    const { data } = useQuery(e);
        if (data) {
            return parseInt(data.iat_aggregate.aggregate.count);
      }
  };

  const CF = () => {
    const { data } = useQuery(f);
        if (data) {
            return parseInt(data.iat_aggregate.aggregate.count);
      }
  };

  const CG= () => {
    const { data } = useQuery(g);
        if (data) {
            return parseInt(data.iat_aggregate.aggregate.count);
      }
  };

  const CH = () => {
    const { data } = useQuery(h);
        if (data) {
            return parseInt(data.iat_aggregate.aggregate.count);
      }
  };

  const CI = () => {
    const { data } = useQuery(i);
        if (data) {
            return parseInt(data.iat_aggregate.aggregate.count);
      }
  };
  
export  {Mild, Modarate, Severe, CA, CB, CC, CD, CE, CF, CG, CH, CI};