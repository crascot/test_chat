import React, { useEffect } from 'react';
import Grid from '@mui/material/Grid';
import Message from './message/message';
import { useSelector } from 'react-redux';
import s from './chat.module.css';
import { useState } from 'react';


export default function Chat() {
    const [chatHeight, setChatHeight] = useState('inherit')

    const id = useSelector(state => state.peoples.id)
    const chat = useSelector(state => state.message.chat)

    const currentChat = chat.filter(message => message.id === id && message.message)

    useEffect(() => {
        if(window.innerWidth <= 1030) {
            setChatHeight(window.innerHeight - 251)
        }
    }, [window.innerWidth, window.innerHeight])

    return (
        <Grid
            item xs
            justifyContent="flex-start"
            alignItems="stretch"
            className={s.chat}
            style={{height: chatHeight}}
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
        </Grid>
    )
}