import React, {useState} from 'react';
import QuizWizard from '../../Component/QuizWizard';
import {Container, Row, Col, Button, Form, Card, Alert, OverlayTrigger, Popover} from 'react-bootstrap';
import '../Home/style.css';
import Footer from '../../Component/Footer';
import ReactGa from 'react-ga';
import { Link } from "react-router-dom";

// Google Analytics for Motasim Foad
ReactGa.initialize("UA-154721739-1");
ReactGa.pageview('Motasim Foads IAT');
// Google Analytics for Motasim Foad

function App() {

  const [screen, setScreen] = useState("first"); 
  const [name, setName] = useState(""); 
  const [age, setAge] = useState(0); 
 
  return (
    <Container>
      <Row className="container"> 
        {screen === "first" ? (
            <Col >
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
                  <Form>
                        <Form.Group>
                        <Form.Control size="lg" type="text" placeholder="name" onChange={(e)=>setName(e.target.value)} required/>
                        </Form.Group>
                        <Form.Group>
                        <Form.Control size="lg" type="number" placeholder="age" max="150" onChange={(e)=>setAge(e.target.value)} required/>
                        </Form.Group>
                        <OverlayTrigger placement="right" overlay={
                          !name || !age ? (
                            <Popover id="Popover-disabled">Fill out the form to enable button !</Popover>
                          ) : (
                            <Popover id="Popover-disabled">Enabled!</Popover>
                          )}>
                          <Button onClick={()=>setScreen("second")} variant="outline-secondary" size="lg" disabled={!name || !age}>Continue</Button>
                        </OverlayTrigger>
                        <Link to="/admin"><Button variant="outline-secondary" size="lg">Admin</Button></Link>
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
