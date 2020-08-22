import React, {useState} from 'react';
import {Button, Col, Card} from 'react-bootstrap';

function ScoreWizard(score) {

  const [finalScore] = useState(score.score); 
  
  return (
    <Col className="container">
      <div className="vertical-center">
        <Card>
          <Card.Body>
            {(finalScore < 8 &&
                <div> less 8 </div>)
            || (finalScore < 16 &&
                <div> less 16 </div>)
            || (finalScore <= 25 &&
                <div> less 25 </div>)
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
