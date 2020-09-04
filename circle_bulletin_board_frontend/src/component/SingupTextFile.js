import React, { Component } from 'react';
import TextField from '@material-ui/core/TextField';
import styled from 'styled-components';

const Container = styled.div`
`;

class TextFieldComponent extends Component {

    render() {
        return (
            <Container>
                <TextField id="standard-basic" label={this.props.FiledName} style={{ width: '350px' }} />
            </Container>

        )
    }
}
export default TextFieldComponent;