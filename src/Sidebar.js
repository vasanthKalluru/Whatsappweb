import React from 'react'
import "./Sidebar.css";
import { Avatar } from '@material-ui/core';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import DonutLargeIcon from '@material-ui/icons/DonutLarge';
import ChatIcon from '@material-ui/icons/Chat';

function Sidebar() {
    return (
        <div className="sidebar">
            <div className="sidebar_header">
                <Avatar/>
                <div className="header_right">
                    <ChatIcon/>
                    <DonutLargeIcon/>
                    <MoreVertIcon/>
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
