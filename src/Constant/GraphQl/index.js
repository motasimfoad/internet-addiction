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

const a = gql`
query AgeRange {
    iat_aggregate(where: {age: {_gte: "10", _lte: "19"}}) {
      aggregate {
        count(columns: age)
      }
    }
  }
`;

const b = gql`
query AgeRange {
    iat_aggregate(where: {age: {_gte: "20", _lte: "29"}}) {
      aggregate {
        count(columns: age)
      }
    }
  }
`;

const c = gql`
query AgeRange {
    iat_aggregate(where: {age: {_gte: "30", _lte: "39"}}) {
      aggregate {
        count(columns: age)
      }
    }
  }
`;

const d = gql`
query AgeRange {
    iat_aggregate(where: {age: {_gte: "40", _lte: "49"}}) {
      aggregate {
        count(columns: age)
      }
    }
  }
`;

const e = gql`
query AgeRange {
    iat_aggregate(where: {age: {_gte: "50", _lte: "59"}}) {
      aggregate {
        count(columns: age)
      }
    }
  }
`;

const f = gql`
query AgeRange {
    iat_aggregate(where: {age: {_gte: "60", _lte: "69"}}) {
      aggregate {
        count(columns: age)
      }
    }
  }
`;

const g = gql`
query AgeRange {
    iat_aggregate(where: {age: {_gte: "70", _lte: "79"}}) {
      aggregate {
        count(columns: age)
      }
    }
  }
`;

const h = gql`
query AgeRange {
    iat_aggregate(where: {age: {_gte: "80", _lte: "89"}}) {
      aggregate {
        count(columns: age)
      }
    }
  }
`;

const i = gql`
query AgeRange {
    iat_aggregate(where: {age: {_gte: "90", _lte: "99"}}) {
      aggregate {
        count(columns: age)
      }
    }
  }
`;





export  {MILD_COUNT, MODARATE_COUNT, SEVERE_COUNT, a, b, c, d, e, f, g, h, i};