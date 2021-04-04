import React from 'react';
import ReactPlayer from 'react-player';

import './homepage.styles.scss';
import { Container } from 'react-bootstrap';

const HomePage = () => (
    <Container fluid sm={12} md={8} lg={8} className='homeContainer'>
        <ReactPlayer
            title='Most recent song'
            className='player'
            url='https://soundcloud.com/blkgoldmusic/said-x-glitter-soda-under-control-blkgold-remix'
            width='80%'
            height='80%'
        />
    </Container>
)

export default HomePage;