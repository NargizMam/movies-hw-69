import React from 'react';
import {Container, Navbar} from "react-bootstrap";

const Toolbar: React.FC = () => {
    return (
        <Navbar expand="lg" className="bg-body-tertiary">
            <Container>
                <Navbar.Brand href="/">Movies</Navbar.Brand>
            </Container>
        </Navbar>
    );
};

export default Toolbar;