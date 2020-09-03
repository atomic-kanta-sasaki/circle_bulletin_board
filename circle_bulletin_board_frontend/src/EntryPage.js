import React, { Component } from 'react';
import styled from 'styled-components';
import PrimaryButton from './component/Button';
import TextFieldComponent from './component/TextFiled';
import Album from './component/Album';
import Card from './component/Card';
import ProgressBar from './component/ProgressBar';
import Stepper from './component/Stepper';
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