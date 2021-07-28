import React,{useState,useEffect} from 'react'
import "./Chat.css";
import { Avatar, IconButton } from '@material-ui/core';
import { AttachFile, InsertEmoticon, MoreVert, SearchOutlined } from '@material-ui/icons';
import MicIcon from '@material-ui/icons/Mic';
import {useParams} from 'react-router-dom';
import db from './firebase';

function Chat() {
    const [input,setinput]=useState("");
    const [seed,setseed]=useState("");
    const {roomId}=useParams();
    const [roomName,setRoomName]=useState("");


    useEffect(() => {
        if(roomId){
            db.collection('rooms').doc(roomId).onSnapshot(
                snapshot=>setRoomName(snapshot.data().name)
            );
            setseed(roomId);
        }
    }, [roomId]);

    const sendMessage =(e)=>{
        e.preventDefault();
        console.log("you have typed:",input);
        setinput("");
    }

    return (
        <div className="chat">
            <div className="chat_header">
                <Avatar src={`https://avatars.dicebear.com/api/human/${seed}.svg`}/>
                <div className="chat_header_info">
                    <h3>{roomName}</h3>
                    <p>Last seen at .... </p>
                </div>
                <div className="chat_headerRight">
                    <IconButton>
                        <SearchOutlined/>
                    </IconButton>
                    <IconButton>
                        <AttachFile/>
                    </IconButton>
                    <IconButton>
                        <MoreVert/>
                    </IconButton>
                </div>
            </div>
            <div className="chat_body">
                <p className={`chat_message ${true && 'chat_receiver_message'}`}>
                    <span className="chat_name">Abhinav </span>
                    Hi there
                    <span className="chat_timestamp">3:04 pm</span>
                </p>
                
            </div>
            <div className="chat_footer">
                <InsertEmoticon/>
                <form>
                    <input type="text" value={input} onChange={e=> { setinput(e.target.value)} } placeholder="Type a message..." />
                    <button type="submit" onClick={sendMessage}>send</button>
                </form>
                <MicIcon/>
            </div>
        </div>
    )
}

export default Chat
