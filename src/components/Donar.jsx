import React from "react";
import { Row, Container, Col} from 'react-bootstrap';
import {
  MDBInput,
  MDBCol,
  MDBRow,
  MDBCheckbox,
  MDBBtn,
  MDBIcon
} from 'mdb-react-ui-kit';
import MensajeDonacion from './MensajeDonacion';

export default function Donar() {
    const [modalShow, setModalShow] = React.useState(false);

  return (
    <>
    <Container>
          <Row>
            <Col >
            </Col>
            <Col xs={12} md = {6}>
                <Container xs={12} md = {6}>
                    <Row><p> </p></Row>
                    <Row><p> </p></Row>
                    <Row>
                        <Col>Prendas de ropa:</Col>
                        <Col>20</Col>
                        <Col><MDBInput></MDBInput></Col>
                    </Row>
                    <Row><p> </p></Row>
                    <Row><p> </p></Row>
                    <Row>
                        <Col>Juguetes:</Col>
                        <Col>30</Col>
                        <Col><MDBInput></MDBInput></Col>
                    </Row>
                    <Row><p> </p></Row>
                    <Row><p> </p></Row>
                    <Row>
                        <Col>Pares de zapatos:</Col>
                        <Col>0</Col>
                        <Col><MDBInput></MDBInput></Col>
                    </Row>
                    <Row><p> </p></Row>
                    <Row><p> </p></Row>
                    <Row>
                        <Col>Víveres no pedecederos:</Col>
                        <Col>34</Col>
                        <Col><MDBInput></MDBInput></Col>
                    </Row>
                    <Row><p> </p></Row>
                    <Row><p> </p></Row>
                    <Row><p> </p></Row>
                    <Row><p> </p></Row>
                    <Row><p> </p></Row>
                    <Row><p> </p></Row>
                    <Row><MDBBtn rounded color = "success" onClick={() => setModalShow(true)}>¡DONAR!</MDBBtn></Row>
                </Container>
            </Col>
            <Col>
            </Col>
          </Row>
    </Container>
    
        <MensajeDonacion
         show={modalShow}
         onHide={() => setModalShow(false)}
         />
    </>
  );
}