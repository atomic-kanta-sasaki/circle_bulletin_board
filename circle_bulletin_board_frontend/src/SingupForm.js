import React, { Component } from 'react';
import TextField from './component/SingupTextFile';
import styled from 'styled-components';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import TopBar from './TopBar';
import Button from './component/Button'

const MainContainer = styled.div`
`;

const Container = styled.div`
    margin-bottom:30px;
    margin: 0 auto;
    width: 60%;
`;

const CardContainer = styled.div`
    margin: 0 auto;
    margin-left: initial;
    text-align: center;
`;

const TitleStyle = styled.span`
    font-family: Roboto, "Open Sans", "Noto Sans JP", "ヒラギノ角ゴシック Pro", "Hiragino Kaku Gothic Pro", Arial, メイリオ, Meiryo, Osaka, "ＭＳ Ｐゴシック", "MS PGothic", sans-serif;
    font-weight: bolder; 
    margin-right: 4px;
    color: rgb(58, 62, 73);
`;

const Link = styled.a`
    text-decoration: none;
    color: black;
`;

class SingupForm extends Component {

    render() {
        return (
            <MainContainer>
                <TopBar />
                <Container>
                    <CardContainer>
                        <Card>
                            <CardContent>
                                <h1>ログイン</h1>
                                <TextField FiledName='メールアドレス' />
                                <TextField FiledName='パスワード' />
                                <Link href='/singup'>
                                    <Button buttonText='新規登録はこちら' />
                                </Link>
                            </CardContent>
                        </Card>
                    </CardContainer>
                </Container>
            </MainContainer>

        )
    }
}

export default SingupForm;