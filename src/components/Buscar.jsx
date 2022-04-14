
import {Accordion, Badge} from 'react-bootstrap';
import { Row, Container, Col, Button} from 'react-bootstrap';


function Buscar(){

    let admins = require('./Jsons/Beneficiarios.json');

    console.log()
return(<>
        
        <Container>
          <Row  className="justify-content-center">
            <Col xs lg="2">
            </Col>
            <Col md="auto">
                <h1>
                    Organizaciones Disponibles
                </h1>
            </Col>
            <Col xs lg="2">
            </Col>

          </Row>
        </Container> 

        <Container>
          <Row>
            <Col >
            </Col>
            <Col xs={16} md = {6}>
                        <Accordion defaultActiveKey="0">
                    {
                        admins["Beneficiarios"].map( (name, index) =>{

                            return (
                                <div>
                                <Accordion.Item eventKey={index}>
                                    <Accordion.Header> {name}
                                        <Badge  pill>
                                            {
                                                admins[name] && admins[name].length || 0
                                            }
                                        </Badge>
                                    </Accordion.Header>
                                    <Accordion.Body>
                                        <h2>Puntos de Donación disponibles:</h2>

                                    {
                                        admins[name] && admins[name].map((punto)=>{
                                            return (<div>
                                                <li>{punto}</li>
                                            </div>)
                                        })
                                    
                                    }
                                    <Button href='/donar'>"Donar!"</Button>
                                    </Accordion.Body>
                                </Accordion.Item>
                                </div>
                            )
                        })
                            
                        
                    }   
                    </Accordion>      
            </Col>
            <Col>
            </Col>
          </Row>
    </Container>

    </>);
}

export default Buscar;