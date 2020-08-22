import React, {useState} from 'react';
import QuizWizard from '../../Component/QuizWizard';
import {Container, Row, Col, Button, Form, Jumbotron, Alert} from 'react-bootstrap';
import '../Home/style.css';

function App() {

  const [screen, setScreen] = useState("second"); 
  const [name, setName] = useState("Dummy"); 
  const [age, setAge] = useState("lala"); 
  
  return (
    <Container>
      <Row> 
        {screen === "first" ? (
            <Col className="container">
              <div className="vertical-center">
                <Jumbotron>
                  <Alert variant="light">
                    <h1>
                      bla bla bla bla bla
                    </h1>
                  </Alert>
                 <Form onSubmit={()=>setScreen("second")}>
                  <Form.Group>
                      <Form.Control size="lg" type="text" placeholder="name" onChange={(e)=>setName(e.target.value)} required/>
                      </Form.Group>
                      <Form.Group>
                      <Form.Control size="lg" type="number" placeholder="age" max="150" onChange={(e)=>setAge(e.target.value)} required/>
                  </Form.Group>
                  <Button size="lg" type="submit">Continue</Button>
                </Form>
                </Jumbotron>
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
