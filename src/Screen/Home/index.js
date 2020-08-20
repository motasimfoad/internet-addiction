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
        <form onSubmit={()=>setScreen("second")}>
          <input type="text" placeholder="name" onChange={(e)=>setName(e.target.value)} required/>
          <input type="number" placeholder="age" max="150" onChange={(e)=>setAge(e.target.value)} required/>
          <button type="submit">Continue</button>
        </form>
        
      </div>
      ) : (
        <QuizWizard info={[name, age]} />
      )}
    </div>
  );
}

export default App;
