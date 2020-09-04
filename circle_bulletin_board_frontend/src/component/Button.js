import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
import styled from 'styled-components';

const ButtonStyles = styled.div`
    margin: theme.spacing(1);
    margin-top:30px;
`;

class PrimaryButton extends Component {
    render() {
        return (
            <ButtonStyles>
                <Button variant="outlined" color="primary">
                    {this.props.buttonText}
                </Button>
            </ButtonStyles>
        );
    }
}

export default PrimaryButton;