import React, {useState} from 'react';
import QuizWizard from '../../Component/QuizWizard'
import { First } from 'react-bootstrap/esm/PageItem';

function App() {

  const [screen, setScreen] = useState("first"); 

  return (
    <div className="App">
      {screen === "first" ? (
        <div>
        <h1>
          bla bla bla bla bla
        </h1>
        <button onClick={()=>setScreen("second")}>Agreed</button>
      </div>
      ) : (
        <QuizWizard />
      )}
    </div>
  );
}

export default App;
