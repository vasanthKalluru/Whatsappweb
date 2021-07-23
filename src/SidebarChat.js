import React,{useState,useEffect} from 'react'
import "./SidebarChat.css";
import { Avatar } from '@material-ui/core';
function SidebarChat() {
    const [seed,setseed]=useState("");
    useEffect(()=>{
        setseed(Math.floor(Math.random()*200));
    },[]);
    return (
        <div className="sidebarChat">
            <Avatar src={`https://avatars.dicebear.com/api/human/${seed}.svg`}/>
            <div className="sidebarChat_info">
                <h2>RoomName</h2>
                <p>Last message...</p>
            </div>
        </div>
    )
}
export default SidebarChat;
