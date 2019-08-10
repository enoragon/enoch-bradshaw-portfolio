import React, { Component } from 'react';
import { Row, Col, Image } from 'react-bootstrap'
import './LongCard.css'



const Img = ({image}) => (
    <Col md="3">
        <Image src={`${image}`} />
    </Col>);

const CardText = ({title, text}) => (
    <Col md="9">
        <h2>{title}</h2>
        <p>{text}</p>
    </Col>);

class LongCard extends Component{
    constructor(props) {
        super(props)
    }

    render(){
        const isImageOnLeft = this.props.isImageOnLeft;
        let card;

        if (isImageOnLeft) {
            card = 
                <Row className="row">
                    <Img image={this.props.image} />
                    <CardText title={this.props.title} text={this.props.text} />
                </Row>;
        }else{
            card = 
                <Row className="row">
                    <CardText title={this.props.title} text={this.props.text} />
                    <Img image={this.props.image} />
                </Row>;
        }

        return (
            card
        );
    }
}

export default LongCard;