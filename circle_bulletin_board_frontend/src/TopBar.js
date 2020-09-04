import React, { Component } from 'react';
import styled from 'styled-components';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Button from './component/Button';

const MainLayout = styled.div``;

const Top = styled.div`
    margin-bottom:30px;
`;

const Link = styled.a`
    text-decoration: none;
    color: black;
`;

const ContentsContainer = styled.div`
    display:flex;
`;

const LogoForm = styled.div``;

const ButtonForm = styled.div`
    margin-left: 70%;
`;

class TopBar extends Component {

    render() {
        return (
            <MainLayout>
                <Top>
                    <Card style={{ height: '75px' }}>
                        <CardContent>
                            <ContentsContainer>
                                <LogoForm>
                                    <Link href='/'>
                                        {"ここにTOP＋Logoを入れる"}
                                    </Link>

                                </LogoForm>
                                <ButtonForm>
                                    <Link href='/singup'>
                                        <Button buttonText='ログインまたは新規登録' />
                                    </Link>
                                </ButtonForm>
                            </ContentsContainer>
                        </CardContent>
                    </Card>
                </Top>
            </MainLayout>
        )
    }
}

export default TopBar;
