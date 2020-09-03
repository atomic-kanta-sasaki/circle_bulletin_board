import React, { Component } from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import styled from 'styled-components';
import Album from './component/Album';
import FacebookIcon from './component/SNS/FacebookIcon';
import TwitterIcon from './component/SNS/TwitterIcon';
import InstagramIcon from './component/SNS/InstagramIcon';


const MainLayout = styled.div`
`;


const Container = styled.div`
    margin-bottom:30px;
`;

const CardContainer = styled.div`
    width: 80%;
    margin: 0 auto;
`;

const ImangeStyle = styled.div`
    text-align: center;
`;

const DetailContens = styled.div`
    margin-bottom: 18px;
    font-size: 15px;
    font-weight: bolder;
    line-height: 1.73;
    letter-spacing: 1px;
    color: rgb(101, 101, 101);
    white-space: pre-line;
    display:flex;
`;

const TitleStyle = styled.span`
    font-family: Roboto, "Open Sans", "Noto Sans JP", "ヒラギノ角ゴシック Pro", "Hiragino Kaku Gothic Pro", Arial, メイリオ, Meiryo, Osaka, "ＭＳ Ｐゴシック", "MS PGothic", sans-serif;
    font-weight: bolder; 
    margin-right: 4px;
    color: rgb(58, 62, 73);
`;

// const

class CircleDetail extends Component {

    render() {
        return (
            <MainLayout>
                <Container>
                    <Card style={{ height: '75px' }}>
                        <CardContent>
                            {"ここにTOP＋Logoを入れる"}
                        </CardContent>
                    </Card>
                </Container>
                <Container>
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
                                    <DetailContens>タートル</DetailContens>

                                    <TitleStyle>所属大学</TitleStyle> <br />
                                    <DetailContens>早稲田大学</DetailContens>
                                    <TitleStyle>活動紹介</TitleStyle> <br />
                                    <DetailContens>
                                        週１日活動しています<br />
                                        通常は高田馬場周辺の野球場で野球をしています<br />
                                        練習後みんなでご飯に行きます
                                    </DetailContens>
                                    <TitleStyle>サークル加入条件</TitleStyle>
                                    <DetailContens>早稲田大学に通っている学生に限ります</DetailContens>
                                    <TitleStyle>連絡先</TitleStyle> <br />
                                    <DetailContens>example@example.com</DetailContens>
                                    <TitleStyle>SNS</TitleStyle> <br />
                                    <DetailContens>
                                        <div><TwitterIcon /></div>
                                        <div><InstagramIcon /></div>
                                        <div><FacebookIcon /></div>
                                    </DetailContens>
                                    <TitleStyle>活動写真</TitleStyle>
                                    <Album />
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