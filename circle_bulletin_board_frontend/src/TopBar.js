import React, { Component } from 'react';
import styled from 'styled-components';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';

const MainLayout = styled.div``;

const Top = styled.div`
    margin-bottom:30px;
`;
class TopBar extends Component {

    render() {
        return (
            <MainLayout>
                <Top>
                    <Card style={{ height: '75px' }}>
                        <CardContent>
                            {"ここにTOP＋Logoを入れる"}
                        </CardContent>
                    </Card>
                </Top>
            </MainLayout>
        )
    }
}

export default TopBar;
