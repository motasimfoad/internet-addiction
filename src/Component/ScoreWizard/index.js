import React, {useState} from 'react';

function ScoreWizard(score) {

  const [finalScore] = useState(score.score); 
  
  return (
    <div className="App">
        {(finalScore < 8 &&
            <div> less 8 </div>)
        || (finalScore < 16 &&
            <div> less 16 </div>)
        || (finalScore <= 25 &&
            <div> less 25 </div>)
        ||
        <div> NONE </div>
        }
    </div>
  );
}

export default ScoreWizard;
