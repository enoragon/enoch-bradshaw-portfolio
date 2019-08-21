import React from 'react';
import { Row, Col, Image } from 'react-bootstrap';
import  { longcardRow } from './LongCard.module.scss';



const Img = ({ image }) => (
    <Col md="3">
        <Image src={image} />
    </Col>
);

const CardText = ({ title, text }) => (
    <Col md="9">
        <h2>{title}</h2>
        <p>{text}</p>
    </Col>
);

const LongCard = ({ isImageOnLeft, image, title, text }) => (
    <Row className={longcardRow}>
        {isImageOnLeft ? (
            <>
                <Img image={image} />
                <CardText title={title} text={text} />
            </>
        ) : (
            <>
                <CardText title={title} text={text} />
                <Img image={image} />
            </>
        )}
    </Row>
)

export default LongCard;
