import React, { Component } from 'react';
import { Container, Row, Col, Image, Card } from 'react-bootstrap'

class Home extends Component{
    render(){
        return (
            <Container>
                <Row className="justify-content-md-center mt-5">
                    <Col xs sm="4" md="3" className="d-flex justify-content-sm-end">
                        <Image src="https://via.placeholder.com/150" roundedCircle/>
                    </Col>
                    <Col xs sm="6" md="5" className="d-flex align-items-center">
                        <div>
                            <Row>
                                <h1>Enoch Bradshaw</h1>
                            </Row>
                            <Row>
                                <p>Interactive Developer, Artist, Human</p>
                            </Row>
                        </div>
                    </Col>
                </Row>
                <Row className="mt-5 justify-content-md-center">
                    <Card style={{ width: '70%' }} bg="ghost" variant="dark">
                        <Card.Body>
                            <Card.Title>Shit about this dude</Card.Title>
                            <Card.Text>
                                Blurbs and other shit about the piece of human trash that is me.
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Row>
                <Row className="mt-5 justify-content-md-center">
                    <Card style={{ width: '70%' }} bg="ghost" variant="dark">
                        <Card.Body>
                            <Card.Title>More shit about this fucker</Card.Title>
                            <Card.Text>
                                Blurbs and other shit about the piece of human trash that is me.
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Row>
                <Row className="mt-5 justify-content-md-center">
                    <Card style={{ width: '70%' }} bg="ghost" variant="dark">
                        <Card.Body>
                            <Card.Title>Even more shit about this stupis ass bitch</Card.Title>
                            <Card.Text>
                                Blurbs and other shit about the piece of human trash that is me.
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Row>
            </Container>
        );
    }
}

export default Home;
