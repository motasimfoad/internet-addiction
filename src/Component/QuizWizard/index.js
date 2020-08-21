import React, {useState} from 'react';
import questionList from '../../Constant/Question';
import ScoreWizard from '../ScoreWizard';

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
                <button onClick={()=>pointKeepr(0)}>0</button>
                <button onClick={()=>pointKeepr(1)}>1</button>
                <button onClick={()=>pointKeepr(2)}>2</button>
                <button onClick={()=>pointKeepr(3)}>3</button>
                <button onClick={()=>pointKeepr(4)}>4</button>
                <button onClick={()=>pointKeepr(5)}>5</button>
            </div>
        </div>
      ) : (
        <ScoreWizard score={score}/>
      )}

    </div>
  );
}

export default Wizard;