import React, { Component } from 'react';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import styled from 'styled-components';
import Grid from '@material-ui/core/Grid';
import { withRouter } from 'react-router';

const Container = styled.div`
    margin: 0 auto;
`;
const CardContainer = styled.div`
    margin: 0 auto;
    margin-left: 10%;
`;

const Link = styled.a`
    text-decoration: none;
    color: black;
`;
class CardComponent extends Component {

    render() {
        return (
            <Container>
                <div style={{ textAlign: 'center' }}>
                    <h2>サークル紹介</h2>
                </div>
                <CardContainer>
                    <div>

                        <Grid container spacing={2}>
                            <Grid item xs={12} sm={6}>
                                <Card style={{ maxWidth: '345px' }}>
                                    <Link href="/circle/detail">
                                        <CardActionArea>
                                            <CardMedia
                                                component="img"
                                                alt="Contemplative Reptile"
                                                height="140"
                                                image="https://townwork.net/magazine/wp-content/uploads/2015/03/af9920047454l_R.jpg"
                                                title="Contemplative Reptile"
                                            />
                                            <CardContent>
                                                <Typography gutterBottom variant="h5" component="h2">
                                                    タートルズ
                                            </Typography>
                                                <Typography variant="body2" color="textSecondary" component="p">
                                                    週１で活動してるテニサーです。<br />
                                                よろしく！
                                        </Typography>
                                            </CardContent>
                                        </CardActionArea>
                                    </Link>

                                </Card>
                            </Grid>

                            <Grid item xs={12} sm={6}>
                                <Card style={{ maxWidth: '345px' }}>
                                    <Link href="/circle/detail">
                                        <CardActionArea>
                                            <CardMedia
                                                component="img"
                                                alt="Contemplative Reptile"
                                                height="140"
                                                image="https://townwork.net/magazine/wp-content/uploads/2015/03/af9920047454l_R.jpg"
                                                title="Contemplative Reptile"
                                            />
                                            <CardContent>
                                                <Typography gutterBottom variant="h5" component="h2">
                                                    タートルズ
                                            </Typography>
                                                <Typography variant="body2" color="textSecondary" component="p">
                                                    週１で活動してるテニサーです。<br />
                                                よろしく！
                                        </Typography>
                                            </CardContent>
                                        </CardActionArea>
                                    </Link>

                                </Card>
                            </Grid>
                        </Grid>
                    </div>
                </CardContainer>

                <CardContainer>
                    <div>

                        <Grid container spacing={2}>
                            <Grid item xs={12} sm={6}>
                                <Card style={{ maxWidth: '345px' }}>
                                    <Link href="/circle/detail">
                                        <CardActionArea>
                                            <CardMedia
                                                component="img"
                                                alt="Contemplative Reptile"
                                                height="140"
                                                image="https://townwork.net/magazine/wp-content/uploads/2015/03/af9920047454l_R.jpg"
                                                title="Contemplative Reptile"
                                            />
                                            <CardContent>
                                                <Typography gutterBottom variant="h5" component="h2">
                                                    タートルズ
                                            </Typography>
                                                <Typography variant="body2" color="textSecondary" component="p">
                                                    週１で活動してるテニサーです。<br />
                                                よろしく！
                                        </Typography>
                                            </CardContent>
                                        </CardActionArea>
                                    </Link>

                                </Card>
                            </Grid>

                            <Grid item xs={12} sm={6}>
                                <Card style={{ maxWidth: '345px' }}>
                                    <Link href="/circle/detail">
                                        <CardActionArea>
                                            <CardMedia
                                                component="img"
                                                alt="Contemplative Reptile"
                                                height="140"
                                                image="https://townwork.net/magazine/wp-content/uploads/2015/03/af9920047454l_R.jpg"
                                                title="Contemplative Reptile"
                                            />
                                            <CardContent>
                                                <Typography gutterBottom variant="h5" component="h2">
                                                    タートルズ
                                            </Typography>
                                                <Typography variant="body2" color="textSecondary" component="p">
                                                    週１で活動してるテニサーです。<br />
                                                よろしく！
                                        </Typography>
                                            </CardContent>
                                        </CardActionArea>
                                    </Link>

                                </Card>
                            </Grid>

                        </Grid>
                    </div>
                </CardContainer>
            </Container>

        )
    }
}
export default withRouter(CardComponent);