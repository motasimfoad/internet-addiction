import React, {useState, useEffect} from 'react';
import {Button, Col, Card, Alert} from 'react-bootstrap';
import scoreText from '../../Constant/Score';
import Popup from '../../Screen/Popup';
import {useMutation, gql} from '@apollo/client';

const BASIC_MUTATION = gql`
  mutation MyMutation($age: String, $name: String, $score: String, $email: String, $stage: String) {
    insert_iat(objects: {age: $age, email: $email, name: $name, score: $score, stage: $stage}) {
      returning {
        id,
        email,
        name,
        age,
        score,
        stage
      }
    }
  }
`;

function ScoreWizard(info) {

  const [finalScore] = useState(info.info[2]);
  const [name] = useState(info.info[0]) ;
  const [age] = useState(info.info[1]);
  const [email] = useState("didnt provide")
  const [modalShow, setModalShow] = useState(false);
  const [stage] = useState(info.info[3]);
  const [first_add] = useMutation(BASIC_MUTATION);

  function refreshPage() {
    window.location.reload(false);
  }

  function sendToDb() {
    first_add({
      variables: {
        age: `${age}`,
        name: `${name}`,
        score: `${finalScore}`,
        email: `${email}`,
        stage: `${stage}`
      }
    })
  }

  useEffect(() => {
    sendToDb();
  });

  return (
    <Col className="container">
      <div className="vertical-center">
        <Card>
          <Card.Body>
            <h1>{name},</h1>
            {(finalScore <= 49  &&
                <div> <Alert variant="success"><p>stage: <strong>mild</strong></p> {scoreText[0]}</Alert></div>)
            || (finalScore <= 79 &&
                <div> <Alert variant="warning"><p>stage: <strong>moderate</strong></p> {scoreText[1]}</Alert></div>)
            || (finalScore <= 100 &&
                <div> <Alert variant="danger"><p>stage: <strong>severe</strong></p> {scoreText[2]}</Alert> </div>)
            ||
            <div> NONE </div>
            }
            <Button variant="outline-dark" onClick={() => setModalShow(true)}>Need Assistance?</Button>
            <Button variant="outline-dark" onClick={refreshPage}>Restart</Button>
          </Card.Body>
          
        </Card>
      </div>
        <Popup
          show={modalShow}
          onHide={() => setModalShow(false)}
          info={[name, age, finalScore, stage]}
        />
    </Col>
  );
}

export default ScoreWizard;
