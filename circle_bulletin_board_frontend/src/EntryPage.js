import React, { Component } from 'react';
import styled from 'styled-components';
import PrimaryButton from './component/Button';
import TextFieldComponent from './component/TextFiled';
import Album from './component/Album';
import Card from './component/Card';
import ProgressBar from './component/ProgressBar';
import Stepper from './component/Stepper';
import TopBar from './TopBar';
import SideNav from './Sidenav';

const Entry = styled.h1``;

class EntryPage extends Component {

    render() {
        return (
            <div>
                <TopBar />
                <SideNav />
            </div>

        )
    }
}

export default EntryPage;