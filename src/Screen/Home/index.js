import React from 'react';
import './style.css';
import { Button, Container, Row, Col, Card } from 'react-bootstrap';

function App() {
  return (
    <Container fluid className="App">
     
     <Row className="justify-content-md-center">
     <Card bg="dark" text="white" className="MainCardContainer">
        <Card.Header>
           <h3>
                Internet Addiction Test (IAT) by Dr. Kimberly Young 
           </h3> 
        </Card.Header>
        <Card.Body>
        <Card.Title>Your age?</Card.Title>
        <Card.Text>
            Some quick example text to build on the card title and make up the bulk
            of the card's content. Some quick example text to build on the card title and make up the bulk
            of the card's content. Some quick example text to build on the card title and make up the bulk
            of the card's content. Some quick example text to build on the card title and make up the bulk
            of the card's content.
        </Card.Text>
        <Button>
            Next
        </Button>
        </Card.Body>
    </Card>
    </Row>
     
    </Container>
  );
}

export default App;
