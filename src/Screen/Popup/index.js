import React, {useState} from 'react';
import {Button, Modal, Form, Alert, Toast} from 'react-bootstrap';
import firebase from '../../Firebase/Config';
import {useMutation, gql} from '@apollo/client';

const FINAL_MUTATION = gql`
mutation MyMutation($age: String, $name: String, $score: String, $email: String) {
 insert_iat(objects: {age: $age, email: $email, name: $name, score: $score}) {
   returning {
     id
   }
 }
}
`;

function Popup(props) {
    
    const [email, setEmail] = useState('email');
    const [show, setShow] = useState(false);
    const name = props.info[0];
    const age = parseInt(props.info[1]);
    const score = props.info[2];

    const resultGenerator = () =>{
        firebase.db.collection('IAT').add({
          name: props.info[0],
          age: props.info[1],
          score: props.info[2],
          email: email,
        })
        .then(documentReference => {
            setShow(true);
          })
       };

    return (
      <Modal
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
        style={{textAlign:'center'}}
      >
        <Modal.Body>
            <Alert variant="light">
                <h4>Enter your email so that we can send you some suggestion/information regarding internet addiction</h4>
            </Alert>
          <Form onSubmit={resultGenerator}>
              <Form.Group>
                  <Form.Control size="lg" type="email" placeholder="Enter your email address" onChange={(e)=>setEmail(e.target.value)} required/>
              </Form.Group>
              <Button type="submit" variant="outline-dark" size="lg">Submit</Button>
              <Button variant="outline-dark" size="lg" onClick={props.onHide}>Close</Button>
          </Form>
        </Modal.Body>
          <Toast style={{
              position: 'absolute',
              bottom: 0,
              right: 0,
              }} 
            onClose={() => setShow(false)} show={show} delay={5000} autohide>
            <Toast.Body>We will get in touch soon <span role="img" aria-label="happy face">😇</span></Toast.Body>
          </Toast>
      </Modal>
    );
  }

  export default Popup;