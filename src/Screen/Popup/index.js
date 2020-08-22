import React, {useState} from 'react';
import {Button, Modal} from 'react-bootstrap';

function Popup(props) {
    
    const name = props.info[0];
    const age = props.info[1];
    const score = props.info[2];
    const [email, setEmail] = useState('email')

    return (
      <Modal
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
       
        <Modal.Body closeButton>
          <h4>{name}, {age}, {score}, {email}</h4>
          <p>
            Cras mattis consectetur purus sit amet fermentum. Cras justo odio,
            dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac
            consectetur ac, vestibulum at eros.
          </p>
          <Button onClick={props.onHide}>Close</Button>
        </Modal.Body>
      </Modal>
    );
  }

  export default Popup;