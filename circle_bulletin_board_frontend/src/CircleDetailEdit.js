import React, { Component } from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import styled from 'styled-components';
import Sidenav from './Sidenav';
import TopBar from './TopBar';
import Button from './component/Button';

const MainLayout = styled.div`
`;

const Top = styled.div`
    margin-bottom:30px;
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

const ImangeStyle = styled.div`
    text-align: center;
`;

const ShortDetailContent = styled.textarea`
    width: 150%;
    background-color: rgb(250, 250, 250);
    font-size: 15px;
    font-weight: 500;
    letter-spacing: 1px;
    color: rgb(58, 62, 73);
    caret-color: rgb(51, 135, 255);
    margin: 12px 0px;
    padding: 16px 20px;
    border-radius: 2px;
    outline: none;
    border-width: 2px;
    border-style: solid;
    border-color: rgb(171, 171, 171);
    border-image: initial;
    height: 12px;
    resize: none;
`;

const DetailContens = styled.textarea`
    width: 150%;
    height: 150px;
    background-color: rgb(250, 250, 250);
    font-size: 15px;
    font-weight: 500;
    line-height: 1.7;
    letter-spacing: 1px;
    color: rgb(58, 62, 73);
    caret-color: rgb(51, 135, 255);
    margin: 12px 0px;
    padding: 16px 20px;
    border-radius: 2px;
    outline: none;
    border-width: 2px;
    border-style: solid;
    border-color: rgb(171, 171, 171);
    border-image: initial;
`;

const TitleStyle = styled.div`
    font-family: Roboto, "Open Sans", "Noto Sans JP", "ヒラギノ角ゴシック Pro", "Hiragino Kaku Gothic Pro", Arial, メイリオ, Meiryo, Osaka, "ＭＳ Ｐゴシック", "MS PGothic", sans-serif;
    font-weight: bolder; 
    margin-right: 4px;
    color: rgb(58, 62, 73);
`;

const Link = styled.a`
    text-decoration: none;
    color: black;
`;

class CircleDetail extends Component {

    render() {
        return (
            <MainLayout>
                <TopBar />
                <Container>
                    <Sidenav />
                    <CardContainer>
                        <Card>
                            <CardContent>
                                <ImangeStyle>
                                    <img
                                        src="https://cdn.worldvectorlogo.com/logos/javascript-1.svg"
                                        height={150}
                                    />
                                </ImangeStyle>
                                <TitleStyle></TitleStyle>
                                <CardContainer>
                                    <TitleStyle>サークル名</TitleStyle>
                                    <ShortDetailContent></ShortDetailContent>

                                    <TitleStyle>所属大学</TitleStyle> <br />
                                    <ShortDetailContent></ShortDetailContent>
                                    <TitleStyle>活動紹介</TitleStyle> <br />
                                    <DetailContens>

                                    </DetailContens>
                                    <TitleStyle>サークル加入条件</TitleStyle>
                                    <DetailContens></DetailContens>
                                    <TitleStyle>連絡先</TitleStyle> <br />
                                    <DetailContens>kjsadl;j</DetailContens>
                                    <TitleStyle>Twitter</TitleStyle> <br />
                                    <ShortDetailContent></ShortDetailContent>
                                    <TitleStyle>Instagram</TitleStyle> <br />
                                    <ShortDetailContent></ShortDetailContent>
                                    <TitleStyle>FaceBoot</TitleStyle> <br />
                                    <ShortDetailContent></ShortDetailContent>

                                    <TitleStyle>活動写真のアップロード</TitleStyle>
                                    <Link href='/circle/detail'>
                                        <Button buttonText='変更を保存する' />
                                    </Link>
                                </CardContainer>
                            </CardContent>
                        </Card>
                    </CardContainer>
                </Container>
            </MainLayout >
        )
    }
}

export default CircleDetail;