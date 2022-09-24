import React, { useEffect } from 'react';
import Grid from '@mui/material/Grid';
import Message from './message/message';
import { useSelector } from 'react-redux';
import s from './chat.module.css';
import { useState } from 'react';
import { useRef } from 'react';


export default function Chat() {
    const [chatHeight, setChatHeight] = useState('inherit')

    const id = useSelector(state => state.peoples.id)
    const chat = useSelector(state => state.message.chat)
    const currentChat = chat.filter(message => message.id === id && message.message)
    const messagesEndRef = useRef(null)

    useEffect(() => {
        if (window.innerWidth <= 1030) {
            setChatHeight(window.innerHeight - 134.72)
        }
    }, [window.innerWidth, window.innerHeight])

    useEffect(() => {
        messagesEndRef.current.scrollIntoView()
    }, [chat])


    return (
        <Grid
            item xs
            justifyContent="flex-start"
            alignItems="stretch"
            className={s.chat}
            style={{ height: chatHeight }}
        >
            {
                currentChat.map((m, index) =>
                    <Message
                        align={m.align}
                        img={m.img}
                        message={m.message}
                        key={index}
                    />)
            }
            <div ref={messagesEndRef} />
        </Grid>
    )
}