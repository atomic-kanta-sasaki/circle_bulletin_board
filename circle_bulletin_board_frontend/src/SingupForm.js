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

const InputForm = styled.div`
    margin-bottom:60px;
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
                                <InputForm>
                                    <TextField FiledName='メールアドレス' />
                                </InputForm>
                                <InputForm>
                                    <TextField FiledName='パスワード' />
                                </InputForm>
                                <InputForm>
                                    <Link href='/introduction'>
                                        <Button buttonText='新規登録はこちら' />
                                    </Link>
                                </InputForm>
                            </CardContent>
                        </Card>
                    </CardContainer>
                </Container>
            </MainContainer >

        )
    }
}

export default SingupForm;