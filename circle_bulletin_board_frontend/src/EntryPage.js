import React, { Component } from 'react';
import styled from 'styled-components';
import PrimaryButton from './Button';
import TopBar from './TopBar';
import TextFieldComponent from './TextFiled';
import Album from './Album'
import Card from './Card'
import ProgressBar from './ProgressBar'

const Entry = styled.h1``;

class EntryPage extends Component {

    toMainPage() {
        this.props.history.push('/About')
    }

    render() {
        return (
            <div>
                <Entry>
                    コンポーネント一覧を示す
                </Entry>
                <TopBar />
                <PrimaryButton />
                <TextFieldComponent />
                <Album />
                <Card />
                <ProgressBar />
            </div>

        )
    }
}

export default EntryPage;