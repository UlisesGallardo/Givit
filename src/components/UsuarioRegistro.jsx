import React from 'react';
import {
  MDBInput,
  MDBCol,
  MDBRow,
  MDBCheckbox,
  MDBBtn,
  MDBIcon
} from 'mdb-react-ui-kit';

import { Row, Container, Col} from 'react-bootstrap';
import { useNavigate  } from "react-router-dom";


export default function Registro() {

  let navigate = useNavigate();

  const handleSubmit = ()=>{
      navigate('/buscar');
  }

  return (

    <Container>
          <Row>
            <Col >
            </Col>
            <Col xs={12} md = {6}>
                        <form className='mt-5'  onSubmit={handleSubmit}>
                        <MDBRow className='mb-4'>
                            <MDBCol>
                            <MDBInput id='form3Example1' label='Nombre' />
                            </MDBCol>
                            <MDBCol>
                            <MDBInput id='form3Example2' label='Apellidos' />
                            </MDBCol>
                        </MDBRow>
                        <MDBInput className='mb-4' type='email' id='form3Example3' label='Correo electrónico' />
                        <MDBInput className='mb-4' type='password' id='form3Example4' label='Contraseña' />

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

    
  );
}