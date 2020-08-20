import React, {useState} from 'react';
import QuizWizard from '../../Component/QuizWizard'

function App() {

  const [screen, setScreen] = useState("first"); 
  const [name, setName] = useState("Dummy"); 
  const [age, setAge] = useState("lala"); 
  
  return (
    <div className="App">
      {screen === "first" ? (
        <div>
        <h1>
          bla bla bla bla bla
        </h1>
        <input type="text" placeholder="name" onChange={(e)=>setName(e.target.value)}/>
        <input type="number" placeholder="age" onChange={(e)=>setAge(e.target.value)}/>
        <button onClick={()=>setScreen("second")}>Agreed</button>
      </div>
      ) : (
        <QuizWizard info={[name, age]} />
      )}
    </div>
  );
}

export default App;
