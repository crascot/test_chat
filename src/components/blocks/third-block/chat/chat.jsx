import React from 'react';
import Grid from '@mui/material/Grid';
import Message from './message/message';
import { useSelector } from 'react-redux';


export default function Chat() {
    const id = useSelector(state => state.peoples.id)
    const chat = useSelector(state => state.message.chat)

    const currentChat = chat.filter(message => message.id === id && message.message)

    return (
        <Grid
            item xs={9}
            justifyContent="flex-start"
            alignItems="stretch"
            className='chat'
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