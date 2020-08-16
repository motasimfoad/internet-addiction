import React from 'react';
import './style.css';
import { Button, Container, Row, Col, Card } from 'react-bootstrap';
import Question from '../../Components/Question/questions'

class App extends React.Component{

  constructor(props) {
    super(props);
  
    this.state = {
      counter: 0,
      questionId: 1,
      question: '',
      answerOptions: [],
      answer: '',
      answersCount: {},
      result: ''
    };
  }
  
render(){
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
        <Card.Title>
        <Question content="What is your favourite food?" />
        </Card.Title>
        <Card.Text>
            Some quick example text to build on the card title and make up the bulk
            of the card's content. Some quick example text to build on the card title and make up the bulk
            of the card's content. Some quick example text to build on the card title and make up the bulk
            of the card's content. Some quick example text to build on the card title and make up the bulk
            of the card's content.
        </Card.Text>
        </Card.Body>
        <Card.Footer>
        <Button size="lg">
            Next
        </Button>
        </Card.Footer>
    </Card>
    </Row>
   
   </Container>
  );
}
}

export default App;
