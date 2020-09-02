import React, { Component } from 'react';
import styled from 'styled-components';
import TopBar from './component/TopBar';
import CircleCard from './component/Card';

const Container = styled.div``;

class CircleList extends Component {

    render() {
        return (
            <Container>
                <h1></h1>
                <CircleCard />
            </Container>
        )
    }
}

export default CircleList;
