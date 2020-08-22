import React, {useState, useEffect} from 'react';
import {Button, Col, Card} from 'react-bootstrap';
import scoreText from '../../Constant/Score';
import Popup from '../../Screen/Popup';
import firebase from '../../Firebase/Config';

function ScoreWizard(info) {

  const [finalScore] = useState(info.info[2]);
  const name = info.info[0];
  const age = info.info[1];
  const [modalShow, setModalShow] = useState(false);
  
  function refreshPage() {
    window.location.reload(false);
  }

  useEffect(() => {
    firebase.db.collection('IAT').add({
      name: name,
      age: age,
      score: finalScore,
      email: "didnt provide email",
    })
  }, [])

  return (
    <Col className="container">
      <div className="vertical-center">
        <Card>
          <Card.Body>
            <h1>{name},</h1>
            {(finalScore <= 49  &&
                <div> {scoreText[0]} </div>)
            || (finalScore <= 79 &&
                <div> {scoreText[1]} </div>)
            || (finalScore <= 100 &&
                <div> {scoreText[2]} </div>)
            ||
            <div> NONE </div>
            }
          </Card.Body>
          <Card.Body>
            <Button variant="outline-dark" onClick={() => setModalShow(true)}>Need Assistance?</Button>
            <Button variant="outline-dark" onClick={refreshPage}>Restart</Button>
          </Card.Body>
        </Card>
      </div>
        <Popup
          show={modalShow}
          onHide={() => setModalShow(false)}
          info={[name, age, finalScore]}
        />
    </Col>
  );
}

export default ScoreWizard;
