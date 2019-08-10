import React, { Component } from 'react';
import { Container, Row, Col, Image } from 'react-bootstrap';

class Home extends Component{
    render(){
        return (
            <Container>
                <div>
                    <h1 className="text-center">Meet the team</h1>
                    <Row>
                        <Col md="4" className="d-flex justify-content-center offset-md-2">
                            <Image src="https://via.placeholder.com/150" roundedCircle/>
                        </Col>
                        <Col md="4" className="d-flex justify-content-center">
                            <Image src="https://via.placeholder.com/150" roundedCircle/>
                        </Col>

                    </Row>
                    <Row>
                        <Col md="4" className="d-flex justify-content-center">
                            <Image src="https://via.placeholder.com/150" roundedCircle/>
                        </Col>
                        <Col md="4" className="d-flex justify-content-center">
                            <Image src="https://via.placeholder.com/150" roundedCircle/>
                        </Col>
                        <Col md="4" className="d-flex justify-content-center">
                            <Image src="https://via.placeholder.com/150" roundedCircle/>
                        </Col>
                    </Row>
                </div>
            </Container>
        );
    }
}

export default Home;