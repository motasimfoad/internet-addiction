import React, {useState} from 'react';

function ScoreWizard(score) {

  const [finalScore] = useState(score.score); 
  
  return (
    <div className="App">
      Your Score {finalScore}
    </div>
  );
}

export default ScoreWizard;
