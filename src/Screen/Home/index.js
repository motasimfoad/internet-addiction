import React, {useState} from 'react';
import QuizWizard from '../../Component/QuizWizard';
import {Container, Row, Col, Button, Form, Card, Alert} from 'react-bootstrap';
import '../Home/style.css';
import Footer from '../../Component/Footer';
import ReactGa from 'react-ga';

function App() {

  ReactGa.initialize("UA-154721739-1");
  ReactGa.pageview('Motasim Foads IAT');

  const [screen, setScreen] = useState("first"); 
  const [name, setName] = useState("Dummy"); 
  const [age, setAge] = useState("lala"); 
  
  return (
    <Container>
      <Row> 
        {screen === "first" ? (
            <Col className="container">
              <div className="vertical-center">
                <Card>
                <Card.Body>
                  <Alert variant="light">
                      <h2>
                        Internet Addiction Test (IAT) by Dr. Kimberly Young
                      </h2>
                      <h4>
                        Developed by Motasim Foad
                      </h4>
                      <p>
                      Internet Addiction Test (IAT) is a reliable and valid measure of addictive use of the Internet, developed by Dr. Kimberly Young. 
                      It consists of 20 items that measure the mild, moderate, and severe levels of Internet Addiction.
                      To begin, answer the following questions and continue.
                      </p>
                    </Alert>
                  <Form onSubmit={()=>setScreen("second")}>
                        <Form.Group>
                        <Form.Control size="lg" type="text" placeholder="name" onChange={(e)=>setName(e.target.value)} required/>
                        </Form.Group>
                        <Form.Group>
                        <Form.Control size="lg" type="number" placeholder="age" max="150" onChange={(e)=>setAge(e.target.value)} required/>
                        </Form.Group>
                    <Button variant="outline-secondary" size="lg" type="submit">Continue</Button>
                  </Form>
                </Card.Body>
                </Card>
              </div>
            </Col>
        ) : (
          <QuizWizard info={[name, age]} />
      )}
      </Row>
      <Footer />
    </Container>
  );
}

export default App;
