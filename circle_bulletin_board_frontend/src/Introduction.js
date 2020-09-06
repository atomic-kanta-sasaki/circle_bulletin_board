import React, { Component } from 'react';
import styled from 'styled-components';
import TextField from './component/SingupTextFile';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Button from './component/Button'

const MainContainer = styled.div``;

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

class Introduction extends Component {

    render() {
        return (
            <MainContainer>
                <CardContainer>
                    <Card>
                        <CardContent>
                            <h1>必須登録事項　</h1>
                            <InputForm>
                                <TextField FiledName='サークル名' />
                            </InputForm>
                            <InputForm>
                                <TextField FiledName='所属大学' />
                            </InputForm>
                            <InputForm>
                                <TextField FiledName='代表者氏名' />
                            </InputForm>
                            <InputForm>
                                <TextField FiledName='連絡用メールアドレス' />
                            </InputForm>
                            <InputForm>
                                <Link href='/circle/detail/edit'>
                                    <Button buttonText='登録' />
                                </Link>
                            </InputForm>
                        </CardContent>
                    </Card>
                </CardContainer>
            </MainContainer>
        );
    }
}

export default Introduction;