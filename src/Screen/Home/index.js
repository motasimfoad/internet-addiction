import React, {useState} from 'react';
import QuizWizard from '../../Component/QuizWizard';
import {Container, Row, Col, Button} from 'react-bootstrap';
import '../Home/style.css';

function App() {

  const [screen, setScreen] = useState("first"); 
  const [name, setName] = useState("Dummy"); 
  const [age, setAge] = useState("lala"); 
  
  return (
    <Container fluid>
      <Row> 
        {screen === "first" ? (
            <Col className="container">
              <div className="vertical-center">
                <h1>
                  bla bla bla bla bla
                </h1>
                <form onSubmit={()=>setScreen("second")}>
                  <input type="text" placeholder="name" onChange={(e)=>setName(e.target.value)} required/>
                  <input type="number" placeholder="age" max="150" onChange={(e)=>setAge(e.target.value)} required/>
                  <Button type="submit">Continue</Button>
                </form>
              </div>
            </Col>
            
        
        ) : (
          <QuizWizard info={[name, age]} />
      )}
      </Row>
    </Container>
  );
}

export default App;
