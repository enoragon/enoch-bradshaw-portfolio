import React, { Component } from 'react';
import { Container, Row, Col, Image } from 'react-bootstrap';
import LongCard from '../components/LongCard/LongCard'

class Home extends Component{
    render(){
        return (
            <Container>
                <div>
                    <h1 className="text-center">Meet the team</h1>
                    <Row>
                        <Col md="4" className="offset-md-2">
                            <Row className="d-flex justify-content-center">
                                <Image src="https://via.placeholder.com/150" roundedCircle/>
                            </Row>
                            <Row className="d-flex justify-content-center">
                                <p>Noodle Expert</p>
                            </Row>
                        </Col>
                        <Col md="4">
                            <Row className="d-flex justify-content-center">
                                <Image src="https://via.placeholder.com/150" roundedCircle/>
                            </Row>
                            <Row className="d-flex justify-content-center">
                                <p>Human</p>
                            </Row>
                        </Col>

                    </Row>
                    <Row>
                        <Col md="4">
                            <Row className="d-flex justify-content-center">
                                <Image src="https://via.placeholder.com/150" roundedCircle/>
                            </Row>
                            <Row className="d-flex justify-content-center">
                                <p>Developer</p>
                            </Row>
                        </Col>
                        <Col md="4">
                            <Row className="d-flex justify-content-center">
                                <Image src="https://via.placeholder.com/150" roundedCircle/>
                            </Row>
                            <Row className="d-flex justify-content-center">
                                <p>Artist</p>
                            </Row>
                        </Col>
                        <Col md="4">
                            <Row className="d-flex justify-content-center">
                                <Image src="https://via.placeholder.com/150" roundedCircle/>
                            </Row>
                            <Row className="d-flex justify-content-center">
                                <p>Game Designer</p>
                            </Row>
                        </Col>
                    </Row>
                </div>
                <LongCard isImageOnLeft={true} image={'https://via.placeholder.com/200'} title={'Here are some stupid fucking blurbs about me'} text={'I am a digital spider because I make things with the web. The apps I create are non stationary, they are mobile. Most software is developed for the real reality, but I also enjoy developing for the other realities: augmented and virtual.\n\nI\'m a Heelys wearing, noodle enthusiast that births interactive apps with his fingers and brain. Fun fact:     I am definitely not a lizard person'} />
            </Container>
        );
    }
}

export default Home;