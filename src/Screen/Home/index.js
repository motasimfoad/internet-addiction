import React from 'react';
import './style.css';
import { Button, Container, Row, Col, Card } from 'react-bootstrap';
import Question from '../../Components/Question/questions';
import apiQuestions from '../../API/questions';
import Quiz from '../../Components/Test/quiz';
import Result from '../../Components/Test/result';

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
    this.handleAnswerSelected = this.handleAnswerSelected.bind(this);
  }

  componentDidMount() {
    const shuffledAnswerOptions = apiQuestions.map((question) => this.shuffleArray(question.answers));  
  
    this.setState({
      question: apiQuestions[0].question,
      answerOptions: shuffledAnswerOptions[0]
    });
  }

  shuffleArray(array) {
    var currentIndex = array.length, temporaryValue, randomIndex;
  
    // While there remain elements to shuffle...
    while (0 !== currentIndex) {
  
      // Pick a remaining element...
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;
  
      // And swap it with the current element.
      temporaryValue = array[currentIndex];
      array[currentIndex] = array[randomIndex];
      array[randomIndex] = temporaryValue;
    }
  
    return array;
  };

  setUserAnswer(answer) {
    this.setState((state) => ({
      answersCount: {
        ...state.answersCount,
        [answer]: (state.answersCount[answer] || 0) + 1
      },
      answer: answer
    }));
  };

  handleAnswerSelected(event) {
    this.setUserAnswer(event.currentTarget.value);
    if (this.state.questionId < apiQuestions.length) {
        setTimeout(() => this.setNextQuestion(), 300);
      } else {
        setTimeout(() => this.setResults(this.getResults()), 300);
      }
  };

  setResults (result) {
    if (result.length === 1) {
      this.setState({ result: result[0] });
    } else {
      this.setState({ result: 'Undetermined' });
    }
  };

  getResults() {
    const answersCount = this.state.answersCount;
    const answersCountKeys = Object.keys(answersCount);
    const answersCountValues = answersCountKeys.map((key) => answersCount[key]);
    const maxAnswerCount = Math.max.apply(null, answersCountValues);
  
    return answersCountKeys.filter((key) => answersCount[key] === maxAnswerCount);
  };

  setNextQuestion() {
    const counter = this.state.counter + 1;
    const questionId = this.state.questionId + 1;
    this.setState({
      counter: counter,
      questionId: questionId,
      question: apiQuestions[counter].question,
      answerOptions: apiQuestions[counter].answers,
      answer: ''
    });
  }

  renderQuiz() {
    return (
      <Quiz
        answer={this.state.answer}
        answerOptions={this.state.answerOptions}
        questionId={this.state.questionId}
        question={this.state.question}
        questionTotal={apiQuestions.length}
        onAnswerSelected={this.handleAnswerSelected}
    />
    );
  }
  
  renderResult() {
    return (
      <Result quizResult={this.state.result} />
    );
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
        {this.state.result ? this.renderResult() : this.renderQuiz()}
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
