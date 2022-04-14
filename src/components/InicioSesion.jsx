import React from 'react';
import {
  MDBInput,
  MDBCol,
  MDBRow,
  MDBCheckbox,
  MDBBtn,
  MDBIcon
} from 'mdb-react-ui-kit';

import { useNavigate  } from "react-router-dom";
import { Row, Container, Col} from 'react-bootstrap';


export default function App() {
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
                <form className='container mt-5' onSubmit={handleSubmit}>
                    <MDBInput className='mb-4' type='email' id='form2Example1' label='Correo' />
                    <MDBInput className='mb-4' type='password' id='form2Example2' label='Contraseña' />

                    <MDBRow className='mb-4'>
                        <MDBCol className='d-flex justify-content-center'>
                        <MDBCheckbox id='form2Example3' label='Remember me' defaultChecked />
                        </MDBCol>

                    </MDBRow>

                    <MDBBtn type='submit' className='mb-4' block>
                        Iniciar Sesión
                    </MDBBtn>

                    <div className='text-center'>
                        <p>
                        ¿Aún no tienes una cuenta? <a href='/registro'>Registrar</a>
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