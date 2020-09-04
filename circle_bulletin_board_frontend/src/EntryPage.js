import React, { Component } from 'react';
import styled from 'styled-components';
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