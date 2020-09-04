import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
import styled from 'styled-components';

const ButtonStyles = styled.div`
    margin: theme.spacing(1);
`;

class PrimaryButton extends Component {
    render() {
        return (
            <ButtonStyles>
                <Button variant="outlined" color="primary" style={{ width: '200px' }}>
                    {this.props.buttonText}
                </Button>
            </ButtonStyles>
        );
    }
}

export default PrimaryButton;