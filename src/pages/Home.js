import React, { Component } from 'react';
import { Container, Row, Col, Image, } from 'react-bootstrap'

class Home extends Component{
    render(){
        return (
            <Container>
                <Row className="justify-content-md-center">
                    <Col xs sm="4" md="3" className="d-flex justify-content-sm-end">
                        <Image src="https://via.placeholder.com/150" roundedCircle/>
                    </Col>
                    <Col xs sm="6" md="5" className="d-flex align-items-center">
                        <div>
                            <Row>
                                <h1>Enoch</h1>
                            </Row>
                            <Row>
                                <p>Interactive Developer, Artist, Human</p>
                            </Row>
                        </div>
                    </Col>
                </Row>
            </Container>
        );
    }
}

export default Home;
