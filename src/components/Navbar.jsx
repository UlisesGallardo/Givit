
import { Nav, Navbar, NavDropdown } from "react-bootstrap";
import { Link } from "react-router-dom";

function NavBar(){
    return (
    <>
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
            <Navbar.Brand href="/inicio">Givit </Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="mr-auto">
                </Nav>
                <Nav>
                    <Navbar.Collapse>
                        <Nav.Link href="/registro" className="justify-content-end">Registro</Nav.Link>
                        <Nav.Link href="/iniciosesion" className="d-flex">Iniciar Sesión</Nav.Link>
                    </Navbar.Collapse>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    </>);
}

export default NavBar;