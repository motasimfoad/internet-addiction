import React, {useState} from 'react';
import {Button, Col, Card} from 'react-bootstrap';
import scoreText from '../../Constant/Score';

function ScoreWizard(info) {

  const [finalScore] = useState(info.info[2]); 

  return (
    <Col className="container">
      <div className="vertical-center">
        <Card>
          <Card.Body>
            {(finalScore < 8 &&
                <div> {scoreText[0]} </div>)
            || (finalScore < 16 &&
                <div> {scoreText[1]} </div>)
            || (finalScore <= 25 &&
                <div> {scoreText[2]} </div>)
            ||
            <div> NONE </div>
            }
          </Card.Body>
        </Card>
      </div>
    </Col>
  );
}

export default ScoreWizard;
