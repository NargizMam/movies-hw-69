import React from 'react';
import {Container, Nav, Navbar} from "react-bootstrap";

const Toolbar: React.FC = () => {
    return (
        <Navbar expand="lg" className="bg-body-tertiary">
            <Container>
                <Navbar.Brand href="/">Movies</Navbar.Brand>
                <Navbar.Collapse >
                    <Nav className="me-auto">
                        <Nav.Link href="/shows">Home</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default Toolbar;