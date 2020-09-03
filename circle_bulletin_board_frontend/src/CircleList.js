import React, { Component } from 'react';
import styled from 'styled-components';
import TopBar from './TopBar';
import CircleCard from './component/Card';
import Sidenav from './Sidenav';

const MainLayout = styled.div``;

const Container = styled.div`
    margin-bottom:30px;
    display:flex;
    width: 80%;
    margin: 0 auto;`;

class CircleList extends Component {

    render() {
        return (
            <MainLayout>
                <TopBar />
                <Container>

                    <div>
                        <Sidenav />
                    </div>
                    <div>
                        <CircleCard />
                    </div>

                </Container>
            </MainLayout>
        )
    }
}

export default CircleList;
