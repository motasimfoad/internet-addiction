import React, {useState} from 'react';
import {Button, Modal, Form} from 'react-bootstrap';

function Popup(props) {
    
    const name = props.info[0];
    const age = props.info[1];
    const score = props.info[2];
    const [email, setEmail] = useState('email');

    return (
      <Modal
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Body>
          <h4>{name}, {age}, {score}, {email}</h4>
          <Form style={{textAlign:'center'}}>
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