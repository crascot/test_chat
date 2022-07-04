import React from 'react';
import { useSelector } from 'react-redux';
import ContactInfo from './contact-info/contactInfo';
import Chat from './chat/chat';
import Send from './send/send';
import { Grid, Typography } from '@mui/material';
import s from './thirdBlock.module.css';


const ThirdBlock = () => {
    const id = useSelector(state => state.peoples.id)

    return (
        <Grid className={s.thirtyBlock}
            item xs
            container
            direction="column"
            justifyContent="space-between"
            alignItems="stretch"
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