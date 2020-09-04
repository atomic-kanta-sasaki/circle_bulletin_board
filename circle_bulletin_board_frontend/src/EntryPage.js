import React, { Component } from 'react';
import styled from 'styled-components';
import TopBar from './TopBar';

const Entry = styled.h1``;

class EntryPage extends Component {

    toMainPage() {
        this.props.history.push('/circle')
    }

    render() {
        return (
            <div>
                <TopBar />
                <Entry>
                    コンポーネント一覧を示す
                </Entry>
                <ProgressBar />
                <Stepper />
                <PrimaryButton />
                <TextFieldComponent />
                <Album />
                <Card />

            </div>
        )
    }
}

export default EntryPage;