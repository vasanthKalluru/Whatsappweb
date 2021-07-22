import React from 'react'
import "./Sidebar.css";
import { Avatar, IconButton } from '@material-ui/core';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import DonutLargeIcon from '@material-ui/icons/DonutLarge';
import ChatIcon from '@material-ui/icons/Chat';

function Sidebar() {
    return (
        <div className="sidebar">

            <div className="sidebar_header">
                <Avatar/>
                <div className="sidebar_header_right">
                    <IconButton>
                        <ChatIcon/>
                    </IconButton>
                    <IconButton>
                        <DonutLargeIcon/>
                    </IconButton>
                    <IconButton>
                        <MoreVertIcon/>
                    </IconButton>
                </div>
            </div>

            <div className="sidebar_search">

            </div>
            <div className="sidebar_chat">

            </div>
        </div>
    )
}

export default Sidebar
