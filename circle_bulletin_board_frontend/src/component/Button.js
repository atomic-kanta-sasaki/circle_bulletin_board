import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
import styled from 'styled-components';

const ButtonStyles = styled.div`
    margin: theme.spacing(1),
`;

class PrimaryButton extends Component {
    render() {
        return (
            <ButtonStyles>
                <Button variant="outlined">Default</Button>
                <Button variant="outlined" color="primary">
                    Primary
                    </Button>
                <Button variant="outlined" color="secondary">
                    Secondary
                </Button>
                <Button variant="outlined" disabled>
                    Disabled
                </Button>
                <Button variant="outlined" color="primary" href="#outlined-buttons">
                    Link
                </Button>
            </ButtonStyles>
        );
    }
}

export default PrimaryButton;