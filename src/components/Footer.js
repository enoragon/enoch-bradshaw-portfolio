import React, { Component } from 'react';
import { Navbar, Nav, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom'

class Footer extends Component{
    render(){
        return (
            <Navbar fixed="bottom" bg="dark-blue" variant="dark">
                <Row className="justify-content-center">
                    <Col>
                        <Nav className="flex-column">
                            <Nav.Link as={Link} to="/">Home</Nav.Link>
                            <Nav.Link as={Link} to="/Work">Professional Work</Nav.Link>
                            <Nav.Link as={Link} to="/Art">Art Gallery</Nav.Link>
                        </Nav>
                    </Col>
                    <Col >
                        <Nav className="flex-column">
                            <Nav.Link as={Link} to="/About">About</Nav.Link>
                            <Nav.Link as={Link} to="/Contact">Contact</Nav.Link>
                        </Nav>
                    </Col>
                </Row>
            </Navbar>
        );
    }
}

export default Footer;
