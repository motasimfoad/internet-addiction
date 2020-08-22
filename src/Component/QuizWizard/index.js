import React, {useState} from 'react';
import questionList from '../../Constant/Question';
import ScoreWizard from '../ScoreWizard';
import {Button, Col, Card} from 'react-bootstrap';

function Wizard(info) {

const [question] = useState(questionList);
const [questionCounter, setQuestionCounter] = useState(0);
const [score, setScore] = useState(0);
console.log(info.info[1] + info.info[0]);


function pointKeepr(point) {
   setQuestionCounter(questionCounter+1)
   setScore(score+point);
}

  return (
    <Col className="container">
      {questionCounter <= question.length-1 ? (
        <div className="vertical-center">
          <Card>
            <Card.Body>
              <Card.Subtitle style={{textAlign:"right"}}>
                {questionCounter} out of {question.length} 
              </Card.Subtitle>
              <Card.Text>
                <h5>
                {question[questionCounter]}
                </h5>
              </Card.Text>
                <div>
                  <Button variant="outline-dark" onClick={()=>pointKeepr(0)}>0</Button>
                  <Button variant="outline-dark" onClick={()=>pointKeepr(1)}>1</Button>
                  <Button variant="outline-dark" onClick={()=>pointKeepr(2)}>2</Button>
                  <Button variant="outline-dark" onClick={()=>pointKeepr(3)}>3</Button>
                  <Button variant="outline-dark" onClick={()=>pointKeepr(4)}>4</Button>
                  <Button variant="outline-dark" onClick={()=>pointKeepr(5)}>5</Button>
                </div>
            </Card.Body>
          </Card>
        </div>
      ) : (
        <ScoreWizard score={score}/>
      )}

    </Col>
  );
}

export default Wizard;
