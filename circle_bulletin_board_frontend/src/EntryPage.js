import React, { Component } from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import styled from 'styled-components';
import Sidenav from './Sidenav';
import TopBar from './TopBar';

const MainLayout = styled.div`
`;

const Container = styled.div`
    margin-bottom:30px;
    display:flex;
    width: 80%;
    margin: 0 auto;
`;

const CardContainer = styled.div`
    width: 60%;
    margin: 0 auto;
    margin-left: initial;
`;

class EntryPage extends Component {

    render() {
        return (
            <div>
                <MainLayout>
                    <TopBar />
                    <Container>
                        <Sidenav />
                        <CardContainer>
                            <Card>
                                <CardContent>

                                </CardContent>
                            </Card>
                        </CardContainer>
                    </Container>
                </MainLayout >
            </div>
        )
    }
}

export default EntryPage;