import React, { Component } from 'react';
import MenuList from '@material-ui/core/MenuList';
import MenuItem from '@material-ui/core/MenuItem';
import Paper from '@material-ui/core/Paper';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import Typography from '@material-ui/core/Typography';
import DraftsIcon from '@material-ui/icons/Drafts';
import SendIcon from '@material-ui/icons/Send';
import PriorityHighIcon from '@material-ui/icons/PriorityHigh';
import styled from 'styled-components';

const Link = styled.a`
    text-decoration: none;
    color: black;
`;

class SideNav extends Component {
    render() {
        return (
            <Paper style={{ width: 230, height: '1000px' }}>
                <MenuList>

                    <Link href='/'>
                        <MenuItem>
                            <ListItemIcon>
                                <SendIcon fontSize="small" />
                            </ListItemIcon>
                            <Typography variant="inherit">TOP</Typography>
                        </MenuItem>
                    </Link>

                    <Link href='/circle'>
                        <MenuItem>
                            <ListItemIcon>
                                <PriorityHighIcon fontSize="small" />
                            </ListItemIcon>
                            <Typography variant="inherit">サークル一覧</Typography>
                        </MenuItem>
                    </Link>

                    <Link href='/circle/detail'>
                        <MenuItem>
                            <ListItemIcon>
                                <DraftsIcon fontSize="small" />
                            </ListItemIcon>
                            <Typography variant="inherit">サークル詳細</Typography>
                        </MenuItem>
                    </Link>
                    {/* ここはログインユーザのみ見られるようにする */}
                    <Link href='/circle/detail/edit'>
                        <MenuItem>
                            <ListItemIcon>
                                <DraftsIcon fontSize="small" />
                            </ListItemIcon>
                            <Typography variant="inherit">サークル情報編集</Typography>
                        </MenuItem>
                    </Link>

                </MenuList>
            </Paper >
        )
    }
}

export default SideNav;