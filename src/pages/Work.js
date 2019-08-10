import React, { Component } from 'react';
import { Container } from 'react-bootstrap';
import LongCard from '../components/LongCard/LongCard';

class Work extends Component{
    render(){
        return (
            <Container>
                {/* TODO: replace this with a loop and array */}
                <LongCard isImageOnLeft={true} image={'https://via.placeholder.com/200'} title={'title'} text={'fuck'} />
                <LongCard isImageOnLeft={false} image={'https://via.placeholder.com/200'} title={'title'} text={'fick'} />
                <LongCard isImageOnLeft={true} image={'https://via.placeholder.com/200'} title={'title'} text={'fack'} />
            </Container>
        );
    }
}

export default Work;