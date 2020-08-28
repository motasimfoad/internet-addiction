import React, {useState} from 'react';
import QuizWizard from '../../Component/QuizWizard';
import {Container, Row, Col, Button, Form, Card, Alert, OverlayTrigger, Popover} from 'react-bootstrap';
import '../Home/style.css';
import Footer from '../../Component/Footer';
import ReactGa from 'react-ga';
import Home from '../../Component/Admin/Home';

function Admin() {

  const [screen, setScreen] = useState("first"); 
  const [name, setName] = useState(""); 
  const [age, setAge] = useState(0); 
 
  return (
    <Container>
      <Row className="container"> 
       <Home />
      </Row>
        <Footer />
    </Container>
  );
}

export default Admin;
