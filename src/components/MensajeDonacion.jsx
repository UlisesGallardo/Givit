import {Modal, Button} from 'react-bootstrap';


function MensajeDonacion(props) {
    return (
      <Modal
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
            Gracias por tu Donación!!!!
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <h4>Ya eres parte de givit</h4>
          <p>
            Envía tu donación lo antes posible a la dirección seleccionada, recibirás correo de confirmación a tu email
            y pronto recibirás más actualizaciones de tu donación
            !Gracias por apoyar!
          </p>
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={props.onHide}>Cerrar</Button>
        </Modal.Footer>
      </Modal>
    );
  }
  
  export default MensajeDonacion;