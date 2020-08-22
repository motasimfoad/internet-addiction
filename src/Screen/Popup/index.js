import React, {useState} from 'react';
import {Button, Modal, Form, Alert} from 'react-bootstrap';
import firebase from '../../Firebase/Config';

function Popup(props) {
    
    const name = props.info[0];
    const age = props.info[1];
    const score = props.info[2];
    const [email, setEmail] = useState('email');

    // const resultGenerator = () =>{
    //     firebase.firestore().collection('IAT').add({
    //       name: props.info[0],
    //       age: props.info[1],
    //       score: props.info[2],
    //       email: email,
    //     })
    //     .then(documentReference => {
    //         console.log('document reference ID', documentReference.id)
    //       })
    //       .catch(error => {
    //         console.log(error.message)
    //       })
    //     props.onHide();
    //   };

      function result(){
        firebase.firestore().collection('IAT').add({
            name: props.info[0],
            age: props.info[1],
            score: props.info[2],
            email: email,
          })
          .then(documentReference => {
              console.log('document reference ID', documentReference.id)
            })
            .catch(error => {
              console.log(error.message)
            })
          
      }


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
                <h4>{name}, {age}, {score}, {email}</h4>
            </Alert>
        <Form onSubmit={()=>result}>
            <Form.Group>
                <Form.Control size="lg" type="email" placeholder="Enter your email address" onChange={(e)=>setEmail(e.target.value)} required/>
            </Form.Group>
            <Button type="submit" variant="outline-dark" size="lg">Submit</Button>
            <Button variant="outline-dark" size="lg" onClick={props.onHide}>Close</Button>
        </Form>
        </Modal.Body>
        </Modal>
    );
  }

  export default Popup;