import React from 'react';
import { Row, Col, Image } from 'react-bootstrap';
import  { longcardRow } from './LongCard.module.scss';



const Img = ({ image }) => (
    <Col md="6" xl="4">
        <Image src={image}  style={{maxWidth: "350px"}}  fluid/>
    </Col>
);

const CardText = ({ children, title }) => (
    <Col md="6" xl="8">
        <h2>{title}</h2>
        <p>{children}</p>
    </Col>
);

const LongCard = ({ children, isImageOnLeft, image, title }) => (
    <Row className={longcardRow}>
        {isImageOnLeft ? (
            <>
                <Img image={image} />
                <CardText title={title}>{ children }</CardText>
            </>
        ) : (
            <>
                <CardText title={title}>{ children }</CardText>
                <Img image={image} />
            </>
        )}
    </Row>
)

export default LongCard;
