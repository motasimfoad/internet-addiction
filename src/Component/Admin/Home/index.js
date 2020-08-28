import React, {useState} from 'react';
import {Container, Row, Col, Button, Form, Card, Alert, OverlayTrigger, Popover} from 'react-bootstrap';
import '../Home/style.css';
import Footer from '../../../Component/Footer';

function Home() {

  const [screen, setScreen] = useState("first"); 
  const [name, setName] = useState(""); 
  const [pass, setPass] = useState(0); 
 
  return (
    
      <Col >
              <div className="vertical-center">
                <Card>
                <Card.Body>
                  <Alert variant="light">
                      <h2>
                        Admin Panel
                      </h2>
                    </Alert>
                  <Form>
                        <Form.Group>
                        <Form.Control size="lg" type="text" placeholder="name" onChange={(e)=>setName(e.target.value)} required/>
                        </Form.Group>
                        <Form.Group>
                        <Form.Control size="lg" type="password" placeholder="pass" max="150" onChange={(e)=>setPass(e.target.value)} required/>
                        </Form.Group>
                        <OverlayTrigger placement="right" overlay={
                          !name || !pass ? (
                            <Popover id="Popover-disabled">Fill out the form to enable button !</Popover>
                          ) : (
                            <Popover id="Popover-disabled">Enabled!</Popover>
                          )}>
                          <Button onClick={()=>setScreen("second")} variant="outline-secondary" size="lg" disabled={!name || !pass}>Continue</Button>
                        </OverlayTrigger>
                  </Form>
                </Card.Body>
                </Card>
              </div>
            </Col>
   
  );
}

export default Home;
