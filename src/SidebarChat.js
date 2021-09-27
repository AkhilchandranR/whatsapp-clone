import { Avatar } from '@material-ui/core';
import React, { useState,useEffect } from 'react';
import { Link } from 'react-router-dom';
import db from './firebase';
import './SidebarChat.css';

function SidebarChat({ addNewChat,id,name }) {
    const[seed,setSeed] = useState('');
    const[messages,setMessages] = useState([]);
    useEffect(() => {
        if(id){
            db.collection('rooms').doc(id).collection('messages')
            .orderBy('timestamp','desc')
            .onSnapshot(snapshot=>(
                setMessages(snapshot.docs.map((doc)=>
                doc.data()
                ))
            ))
        }
    }, [id])
    useEffect(() => {
        setSeed(Math.floor(Math.random()*5000));
    }, [])

    const createChat = () =>{
        const roomName = prompt("Enter a name for chat");
        if (roomName){
            db.collection('rooms').add({
                name: roomName,
            })
        }
    }
    return !addNewChat ? (
        <div className="sidebarchat">
            <Link to={`/rooms/${id}`}>
                <Avatar src={`https://avatars.dicebear.com/api/human/${seed}.svg`}/>
                <div className="sidebarchat__info">
                    <h3>{name}</h3>
                    <p>{messages[0]?.message}</p>
                </div>
            </Link>
        </div>
    ): (
        <div className="sidebarchat" onClick={createChat}>
            <h3>Add new chat</h3>
        </div>
    )
}

export default SidebarChat

