import React from "react";
import { Row, Container, Col} from 'react-bootstrap';
<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/latest/css/bootstrap.min.css"></link>

export default function MensajeGivit() {
  return (
    <Container>
      <Row><p> </p></Row>
      <Row><p> </p></Row>
      <Row>
      <Col style={{backgroundColor : "3FDB71"}}> </Col>
      <Col xs = {12}><h2 className="text-center">¡Felicidades por tu registro!</h2></Col>
      <Col> </Col>
      </Row>
      <Row><p> </p></Row>
      <Row><p> </p></Row>
      <Row><p> </p></Row>
      <Row><p> </p></Row>
      <Row>
      <Col> </Col>
      <Col xs = {12}><h2 className="text-center">Ya eres parte de Givit</h2></Col>
      <Col> </Col>
      </Row>
    </Container>
  );
}