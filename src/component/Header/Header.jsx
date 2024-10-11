import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import {NavLink} from "react-router-dom";

export default function Header() {
    return (
        <Navbar expand="lg">
            <Container>
                <NavLink className="navbar-brand" to="/">Quiz App</NavLink>
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <NavLink className="nav-link" to="/">Home</NavLink>
                        <NavLink className="nav-link" to="/user">User</NavLink>
                        <NavLink className="nav-link" to="/admin">Admin</NavLink>
                    </Nav>
                    <Nav>
                        <button className="btn-login">LogIn</button>
                        <button className="btn-signup">SignUp</button>
                        {/*<NavDropdown title="Setting" id="basic-nav-dropdown">
                            <NavDropdown.Item>Login</NavDropdown.Item>
                            <NavDropdown.Item>Profile</NavDropdown.Item>
                            <NavDropdown.Item>LogOut</NavDropdown.Item>
                        </NavDropdown>*/}
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}
