import React, { Component } from 'react';
import styled from 'styled-components'
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Image from 'react-image-resizer';

const Container = styled.div`
    max-width: 345;
`;

const ImageStyle = styled.div`
    
`;

class CardComponent extends Component {

    render() {
        return (
            <Container>
                <Card maxWidth="345">
                    <ImageStyle>
                        <CardActionArea>
                            <Image
                                src="https://cdn-ssl-devio-img.classmethod.jp/wp-content/uploads/2015/12/java_logo-320x320.png"
                                height={200}
                                width={350}
                            />
                            <CardContent>
                                <Typography gutterBottom variant="h5" component="h2">
                                    Lizard
                            </Typography>
                                <Typography variant="body2" color="textSecondary" component="p">
                                    Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
                                    across all continents except Antarctica
                            </Typography>
                            </CardContent>
                        </CardActionArea>
                    </ImageStyle>

                    <CardActions>
                        <Button size="small" color="primary">
                            Share
                        </Button>
                        <Button size="small" color="primary">
                            Learn More
                        </Button>
                    </CardActions>
                </Card>
            </Container>

        )
    }
}

export default CardComponent;