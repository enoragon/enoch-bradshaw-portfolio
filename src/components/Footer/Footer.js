import React, { Component } from 'react';
import { Navbar, Nav, Container, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { footer } from './Footer.module.scss';
import { MdEmail } from 'react-icons/md';
import { FaTwitter, FaInstagram, FaLinkedinIn, FaGithub } from 'react-icons/fa'
import { IconContext } from "react-icons";
import Icon from '../Icon/Icon'

const Footer = ({ className }) => (
    <footer className={`${className} ${footer} bg-ghost`}>
        <Container className="mt-5">
            <Row className="justify-content-md-center">
                <Nav className="flex-row">
                    <Nav.Link as={Link} to="/">Home</Nav.Link>
                    <Nav.Link as={Link} to="/Work">Professional Work</Nav.Link>
                    <Nav.Link as={Link} to="/Art">Art Gallery</Nav.Link>
                    <Nav.Link as={Link} to="/About">About</Nav.Link>
                    <Nav.Link as={Link} to="/Contact">Contact</Nav.Link>
                </Nav>
            </Row>
            <Row className="justify-content-md-center py-5">
                <Icon size="4em" className="mx-3">
                    <MdEmail />
                </Icon>
                <Icon size="4em" className="mx-3">
                    <FaTwitter />
                </Icon>
                <Icon size="4em" className="mx-3">
                    <FaInstagram />
                </Icon>
                <Icon size="4em" className="mx-3">
                    <FaLinkedinIn />
                </Icon>
                <Icon size="4em" className="mx-3">
                    <FaGithub />
                </Icon>
            </Row>
        </Container>
    </footer>
);

export default Footer;
