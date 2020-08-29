import React from 'react';
import {Container, Row} from 'react-bootstrap';
import Footer from '../../Component/Footer';
import Home from '../../Component/Admin/Home';

function Admin() {

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
