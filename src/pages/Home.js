import React, { Component } from 'react';
import { Container, Row, Col, Image } from 'react-bootstrap'
import Blurbs from '../components/Blurbs/Blurbs'

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
                <Blurbs blurbTitle="What does this dude develop?">
                    Blurbs and other shit about the <br/> piece of human trash that is me.
                    Blurbs and other shit about the <br/> piece of human trash that is me.
                    Blurbs and other shit about the <br/> piece of human trash that is me.
                    Blurbs and other shit about the <br/> piece of human trash that is me.
                    Blurbs and other shit about the <br/> piece of human trash that is me.
                    Blurbs and other shit about the <br/> piece of human trash that is me.
                    Blurbs and other shit about the <br/> piece of human trash that is me.
                </Blurbs>
                <Blurbs blurbTitle="I would make the title 'Artsy Fartsy' but I don't want 'Fart' in the title so...">
                    One of my favorite things to do is draw with pen. It's a lot like life; 
                    if you f*** it up you have to figure out how to make it right. 
                    I find that beautiful.
                </Blurbs>
                <Blurbs blurbTitle="I am not a ̼͙̈́̚͟͞l̛̲̗̂ì̥z̠̣͍̈́̈́͐à̳̫̯͘͜͞͞ȓ̰͚̼͎̃̾͝d̡̜͉͉̑͋͞͠ ̧͓̱̋͌͝ṕ̹͘ͅe̱̹͋͐́͟r̳̯̺̈́̎͆̓͢s̡͚̫̈́̑̄͘͢ò̧͎̝͔̤͗̀̀͘n͔̠̞̭̽̍̀̍">
                    If you wanted some ̗̑i̖̋ll̟͊u͕̎mi̧͘n͋͟aẗ̞e s̲͆hȉ̧t̆͟ then you stumbled across the wrong webpage.<br/>
                    Just fellow ̞͘h͕̙̊̾̕͜u͇̻͈̇̇͠m̻͖̯̀͂̿ą̧͍̪͖̈́̆̑̊̆ṉ̛͘͢s̞͙̙̞͗̀̅̓ here. Sorry. Your lifelong quest to find the lizard person that 
                    accidentally murdered your entire family because he mistook them for chicken nuggets 
                    will have to go on another day.
                </Blurbs>
            </Container>
        );
    }
}

export default Home;
