import {gql} from '@apollo/client';

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


export  {MILD_COUNT, MODARATE_COUNT, SEVERE_COUNT};