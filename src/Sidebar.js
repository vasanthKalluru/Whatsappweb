import React,{useEffect,useState,useContext} from 'react'
import "./Sidebar.css";
import { Avatar, IconButton } from '@material-ui/core';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import DonutLargeIcon from '@material-ui/icons/DonutLarge';
import ChatIcon from '@material-ui/icons/Chat';
import { SearchOutlined } from '@material-ui/icons';
import SidebarChat from './SidebarChat';
import db from './firebase';    
import { LoginContext } from './LoginContext';

function Sidebar() {
    const [rooms,setrooms]=useState([]);
    const {user} = useContext(LoginContext);
    
    useEffect(()=>{
        db.collection('rooms').onSnapshot(snapshot=>
            setrooms(snapshot.docs.map(
                (doc)=>{return  {id:doc.id,data:doc.data()}
                }
            )
        ))
    },[])

    return (

        <div className="sidebar">

            <div className="sidebar_header">
                <Avatar src={user.photoURL}/>
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
                <div className="sidebar_search_container">
                    <SearchOutlined  />
                    <input placeholder="search or start new chat"/>
                </div> 
            </div>
            <div className="sidebar_chat">
                <SidebarChat addNewChat />
                {rooms.map(room=>
                    <SidebarChat key={room.id} id={room.id} name={room.data.name} />
                )}
                
            </div>
        </div>
    )
}

export default Sidebar
