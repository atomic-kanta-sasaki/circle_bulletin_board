import React, { Component } from 'react';
import styled from 'styled-components';

const Entry = styled.h1``;

class EntryPage extends Component {

    toMainPage() {
        this.props.history.push('/About')
    }

    render() {
        return (
            <Entry>
                entry
            </Entry>

        )
    }
}

export default EntryPage;