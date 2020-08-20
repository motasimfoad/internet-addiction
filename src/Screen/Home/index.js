import React, {useState} from 'react';
import questionList from '../../Constant/Question';

function App() {

const [question] = useState(questionList);
const [questionCounter, setQuestionCounter] = useState(0);
const [score, setScore] = useState(0);

function pointKeepr(point) {
    setQuestionCounter(questionCounter+1)
   console.log(point + 'asdf');
   setScore(score+point);
}

  return (
    <div className="App">
     {question[questionCounter]} <br />
     {question.length} <br />
   
     {questionCounter < question.length-1 ? (
        <div>
            <button onClick={()=>pointKeepr(0)}>0</button>
            <button onClick={()=>pointKeepr(1)}>1</button>
            <button onClick={()=>pointKeepr(2)}>2</button>
            <button onClick={()=>pointKeepr(3)}>3</button>
            <button onClick={()=>pointKeepr(4)}>4</button>
            <button onClick={()=>pointKeepr(5)}>5</button>
        </div>
      ) : (
        <button>No Button</button>
      )}

    <br /> Score : {score}

    </div>
  );
}

export default App;
