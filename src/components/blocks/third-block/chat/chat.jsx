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
                currentChat.map(message => <Message align={message.align} img={message.img} message={message.message} key={Math.random()} />)
            }
        </Grid>
    )
}