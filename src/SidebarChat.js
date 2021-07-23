import React,{useState,useEffect} from 'react'
import "./SidebarChat.css";
import { Avatar } from '@material-ui/core';
import db from './firebase';
function SidebarChat({id,name,addNewChat}) {
    const [seed,setseed]=useState("");
    useEffect(()=>{
        setseed(Math.floor(Math.random()*200));
    },[]);
    const createChat = ()=>{
        const roomName= prompt("Enter your name:");
        if(roomName){
            db.collection('rooms').add({name:roomName});
            
        }
    }   

    return !addNewChat?(
        <div className="sidebarChat">
            <Avatar src={`https://avatars.dicebear.com/api/human/${seed}.svg`}/>
            <div className="sidebarChat_info">
                <h2>{name}</h2>
                <p>Last message...</p>
            </div>
        </div>
    ):(
        <div onClick={createChat} className="sidebarChat">
            <h2>AddNewChat</h2>
        </div>
    )
}
export default SidebarChat;
