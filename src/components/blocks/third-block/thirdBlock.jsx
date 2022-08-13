import React from 'react';
import { useSelector } from 'react-redux';
import ContactInfo from './contact-info/contactInfo';
import Chat from './chat/chat';
import Send from './send/send';
import { Grid, Typography } from '@mui/material';
import s from './thirdBlock.module.css';
import { useEffect } from 'react';
import { useState } from 'react';


const ThirdBlock = () => {
    const id = useSelector(state => state.peoples.id)
    const data = useSelector(state => state.peoples.data)

    const [hide, setHide] = useState('flex')

    useEffect(() => {
        if (window.innerWidth <= 1252) {
            if (data) setHide('none')
            else setHide('flex')
        }
    }, [data])

    return (
        <Grid className={s.thirtyBlock}
            item xs
            container
            direction="column"
            justifyContent="space-between"
            alignItems="stretch"
            style={{ display: hide }}
        >
            {
                id === 0 ?
                    <Grid className={s.zeroId}
                        item xs
                        container
                        justifyContent="center"
                        alignItems="center"
                    >
                        <Typography variant="h6" gutterBottom component="div">
                            Нажмите на контакт чтобы начать переписку
                        </Typography>
                    </Grid>
                    :
                    <Grid className={s.contactId}
                        item xs
                        container
                        direction="column"
                        justifyContent="space-between"
                        alignItems="stretch"
                    >
                        <ContactInfo />
                        <Chat />
                        <Send />
                    </Grid>
            }
        </Grid>
    )
};

export default ThirdBlock