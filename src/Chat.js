import React,{useState,useEffect} from 'react'
import "./Chat.css";
import { Avatar, IconButton } from '@material-ui/core';
import { AttachFile, InsertEmoticon, MoreVert, SearchOutlined } from '@material-ui/icons';
import MicIcon from '@material-ui/icons/Mic';

function Chat() {
    const [input,setinput]=useState("");
    const [seed,setseed]=useState("");
    useEffect(() => {
        setseed(Math.floor(Math.random*1000));
    }, [])

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
                    <h3>Room name</h3>
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
