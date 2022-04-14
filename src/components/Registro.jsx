
import { Link } from "react-router-dom";
import { MDBBtn, MDBBtnGroup } from 'mdb-react-ui-kit';
import { Row, Container, Col, ButtonGroup, Button} from 'react-bootstrap';


function Inicio(){
    return (
    <>
    <div style={{height:"100vh", width:"100vw ", backgroundColor:"#0C1248"}}>
        <Container  >
          <Row><p></p></Row>
          <Row><p></p></Row>
          <Row><p></p></Row>

          <Row  className="justify-content-center " >
            <Col >
            </Col>
                <Col md="auto">
                    <Row >
                      <Button href="/usuarioregistro">Registrar como Donador</Button>
                    </Row> 
                    <Row >
                      <Button href="/puntodonacionregistro" >Registrar como Punto de Donación</Button>
                    </Row> 
                    <Row >
                      <Button href="/beneficiarioregistro">Registrar como Beneficiario</Button>
                    </Row> 
                    
                </Col>
            
            <Col >
            </Col>

          </Row>
         
        </Container> 
        </div>  
      
    </>
    );
}

export default Inicio;
