import React, { Component } from 'react';
import TextField from '@material-ui/core/TextField';
import styled from 'styled-components';

const Container = styled.form`
  
`;

class TextFieldComponent extends Component {

    render() {
        return (
            <Container noValidate autoComplete="off">
                <TextField id="standard-basic" label="Standard" />
                <TextField id="filled-basic" label="Filled" variant="filled" />
                <TextField id="outlined-basic" label="Outlined" variant="outlined" />
            </Container>
        )
    }
}
export default TextFieldComponent;