import React, { Component } from 'react';
import styled from 'styled-components';
import TopBar from './TopBar';
import CircleCard from './component/Card';

const Container = styled.div``;

class CircleList extends Component {

    render() {
        return (
            <Container>
                <TopBar />
                <CircleCard />
            </Container>
        )
    }
}

export default CircleList;
