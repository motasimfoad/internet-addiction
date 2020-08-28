import React, {useState, useEffect} from 'react';
import {Button, Col, Card, ProgressBar, Alert} from 'react-bootstrap';
import scoreText from '../../Constant/Score';
import Popup from '../../Screen/Popup';
import firebase from '../../Firebase/Config';
import {useMutation, gql} from '@apollo/client';

const BASIC_MUTATION = gql`
mutation MyMutation($age: String, $name: String, $score: String, $email: String, $stage: String) {
  insert_iat(objects: {age: $age, email: $email, name: $name, score: $score, stage: $stage}) {
    returning {
      id,
      email,
      name,
      age,
      score,
      stage
    }
  }
}
`;

function ScoreWizard(info) {

  const [finalScore] = useState(info.info[2]);
  const [name] = useState(info.info[0]) ;
  const [age] = useState(info.info[1]);
  const [email] = useState("didnt provide")
  const [modalShow, setModalShow] = useState(false);
  const [stage] = useState(info.info[3]);
  const [first_add, {loading, error, data}] = useMutation(BASIC_MUTATION);

  console.log(stage +" 2nd page");
  
  function refreshPage() {
    window.location.reload(false);
  }

  // const stageSetter = () =>{
  //   if (finalScore <= 49) {
  //     return setStage("mild");
  //   } else if (finalScore <= 79) {
  //     return setStage("moderate");
  //   } else if (finalScore <= 100) {
  //     return setStage("severe");
  //   } 
  //   else {
  //     return setStage("none");
  //   }
  //   };
  //   console.log("result"+stage);
    

  // function stageSetter() {
  //   if (finalScore <= 49) {
  //     setStage("mild");
  //     console.log(stage);
  //   } else if (finalScore <= 79) {
  //     setStage("moderate");
  //     console.log(stage);
  //   } else if (finalScore <= 100) {
  //     setStage("severe");
  //     console.log(stage);
  //   } 
  //   else {
  //     setStage("none");
  //   }
  // }

  function sendToDb() {
    first_add({
      variables: {
        age: `${age}`,
        name: `${name}`,
        score: `${finalScore}`,
        email: `${email}`,
        stage: `${stage}`
      }
    })
  }

  // setInterval(() => {
  //   stageSetter();
  // }, 1000);

  useEffect(() => {
   
console.log(data);
    // setInterval(() => {
    //   console.log("after" +stage);
    // }, 3000);
   
   //console.log(stage +"asd");
    //sendToDb();
  }, [])

  // useEffect(() => {
  //   firebase.db.collection('IAT').add({
  //     name: name,
  //     age: age,
  //     score: finalScore,
  //     email: "didnt provide email",
  //   })
  // }, [])

  // useEffect(() => {
  //   first_add({
  //     variables: {
  //       age: `%${age}%`,
  //       name: `%${name}%`,
  //       score: `%${finalScore}%`,
  //       email: `%${email}%`,
  //     }
  //   })
  // }, []);

  //console.log(data);

  return (
    <Col className="container">
      <div className="vertical-center">
        <Card>
          <Card.Body>
            <h1>{name},</h1>
            {(finalScore <= 49  &&
                <div> <Alert variant="success"><p>stage: <strong>mild</strong></p> {scoreText[0]}</Alert></div>)
            || (finalScore <= 79 &&
                <div> <Alert variant="warning"><p>stage: <strong>moderate</strong></p> {scoreText[1]}</Alert></div>)
            || (finalScore <= 100 &&
                <div> <Alert variant="danger"><p>stage: <strong>severe</strong></p> {scoreText[2]}</Alert> </div>)
            ||
            <div> NONE </div>
            }
            <Button variant="outline-dark" onClick={() => setModalShow(true)}>Need Assistance?</Button>
            <Button variant="outline-dark" onClick={refreshPage}>Restart</Button>
          </Card.Body>
          
        </Card>
      </div>
        <Popup
          show={modalShow}
          onHide={() => setModalShow(false)}
          info={[name, age, finalScore]}
        />
    </Col>
  );
}

export default ScoreWizard;
