import React, {useState} from 'react';
import questionList from '../../Constant/Question';
import ScoreWizard from '../ScoreWizard';
import {Button, Card} from 'react-bootstrap';

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
    <div className="App">
    
      
    {questionCounter <= question.length-1 ? (
        <div>
            {question[questionCounter]} <br />
            {questionCounter} out of {question.length} <br />
            <div>
                <Button onClick={()=>pointKeepr(0)}>0</Button>
                <Button onClick={()=>pointKeepr(1)}>1</Button>
                <Button onClick={()=>pointKeepr(2)}>2</Button>
                <Button onClick={()=>pointKeepr(3)}>3</Button>
                <Button onClick={()=>pointKeepr(4)}>4</Button>
                <Button onClick={()=>pointKeepr(5)}>5</Button>
            </div>
        </div>
      ) : (
        <ScoreWizard score={score}/>
      )}

    </div>
  );
}

export default Wizard;
