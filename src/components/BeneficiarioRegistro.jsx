
import React from 'react';
import {
  MDBInput,
  MDBCol,
  MDBRow,
  MDBCheckbox,
  MDBBtn,
  MDBIcon
} from 'mdb-react-ui-kit';

import { Row, Container, Col, Form} from 'react-bootstrap';
import DropzoneComponent from './DropZone';
import { useNavigate  } from "react-router-dom";


function BeneficiarioRegistro(){
    
    let navigate = useNavigate();

    const handleSubmit = ()=>{
        navigate('/mensajegivit');
    }

    return (<>
    
        <Container>
            <Row>
                <Col >
                </Col>
                <Col xs={12} md = {6}>
                        <form className='mt-5' onSubmit={handleSubmit}>
                            <MDBRow className='mb-4'>
                                <MDBCol>
                                <MDBInput id='form3Example1' label='Nombre de la institución' />
                                </MDBCol>
                            </MDBRow>
                            <MDBInput className='mb-4' type='' id='form3Example2' label='Campo' />
                            <MDBInput className='mb-4' type='email' id='form3Example3' label='Correo electrónico' />
                            <MDBInput className='mb-4' type='password' id='form3Example4' label='Contraseña' />
                            <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                                <Form.Label>Misión, Visión y una pequeña descripción sobre tu posición en el desarrollo social</Form.Label>
                                <Form.Control as="textarea" rows={3} />
                            </Form.Group>
                            <DropzoneComponent/>                        
                            <MDBBtn type='submit' className='mb-4' block>
                                Registrar
                            </MDBBtn>

                            <div className='text-center'>
                            <p>
                                ¿Ya tienes cuenta? <a href='/sesion'>Iniciar Sesion</a>
                            </p>
                               
                            </div>
                            </form>
                </Col>
                <Col>
                </Col>
            </Row>
        </Container>
    
    </>);
}

export default BeneficiarioRegistro;