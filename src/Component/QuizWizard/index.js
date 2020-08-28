import React, {useState} from 'react';
import questionList from '../../Constant/Question';
import ScoreWizard from '../ScoreWizard';
import {Button, Col, Card, ProgressBar} from 'react-bootstrap';

function Wizard(info) {

const [question] = useState(questionList);
const [questionCounter, setQuestionCounter] = useState(0);
const [score, setScore] = useState(0);
const name = info.info[0];
const age = info.info[1];
const progressPercent = questionCounter*5;
const [stage, setStage] = useState("none");

function pointKeepr(point) {
   setQuestionCounter(questionCounter+1)
   setScore(score+point);
   stageSetter();
}

const stageSetter = () =>{
    if (score <= 49) {
      return setStage("mild");
    } else if (score <= 79) {
      return setStage("moderate");
    } else if (score <= 100) {
      return setStage("severe");
    } 
    else {
      return setStage("none");
    }
  };

  return (
    <Col className="container">
      {questionCounter <= question.length-1 ? (
        <div className="vertical-center">
          <Card>
            <Card.Body>
              <Card.Title>
                <ProgressBar variant="info" animated now={progressPercent} label={`${progressPercent}%`}/>
              </Card.Title>
              <Card.Text>
                {question[questionCounter]}
              </Card.Text>
                <div>
                  <Button variant="outline-dark" onClick={()=>pointKeepr(0)}>N/A</Button>
                  <Button variant="outline-dark" onClick={()=>pointKeepr(1)}>Rarely</Button>
                  <Button variant="outline-dark" onClick={()=>pointKeepr(2)}>Occasionally</Button>
                  <Button variant="outline-dark" onClick={()=>pointKeepr(3)}>Frequently</Button>
                  <Button variant="outline-dark" onClick={()=>pointKeepr(4)}>Often</Button>
                  <Button variant="outline-dark" onClick={()=>pointKeepr(5)}>Always</Button>
                </div>
            </Card.Body>
          </Card>
        </div>
      ) : (
        <ScoreWizard info={[name, age, score, stage]}/>
      )}
    </Col>
  );
}

export default Wizard;
