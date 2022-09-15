import React, { useState, useEffect } from "react";
import { Avatar, Button, Grid, IconButton, Typography } from "@mui/material";
import CircleIcon from '@mui/icons-material/Circle';
import { useDispatch, useSelector } from "react-redux";
import s from './contact-info.module.css';
import { getId, switchData } from "../../../../features/peoples/peoplesSlice";
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

const ContactInfo = () => {
    const dispatch = useDispatch();
    const id = useSelector(state => state.peoples.id)
    const contacts = useSelector(state => state.peoples.contacts)
    const currentContact = contacts.find(user => user.id === id)

    const showData = () => dispatch(switchData())

    const [width, setWidth] = useState(1)
    const [size, setSize] = useState('medium')

    useEffect(() => {
        if (window.innerWidth <= 1030) {
            setWidth(12)
            setSize('small')
        }
    }, [window.innerWidth])

    const resetId = () => dispatch(getId(0))

    return (
        <Grid
            item xs={width} container
            className={s.contactInfo}
            direction="row"
            justifyContent="flex-start"
            alignItems="center"
        >
            {
                window.innerWidth <= 1030 ?
                    <Grid
                        item xs={1} container
                        justifyContent='center'
                        alignItems='center'
                    >
                        <IconButton onClick={resetId}>
                            <ArrowBackIcon fontSize={size} />
                        </IconButton>
                    </Grid>
                    :
                    null
            }
            <Button className={s.parentButton} onClick={showData} color="inherit">
                <Grid
                    item xs container
                    className={s.contactInfoLeft}
                    direction="row"
                    justifyContent="flex-start"
                    alignItems="center"
                >
                    <Avatar className={s.contactAvatar} src={currentContact.avatar} />
                    <Grid item xs className={s.contactInfoRight}>
                        <Typography fontSize={size} variant="h6" gutterBottom>
                            {currentContact.name}
                        </Typography>
                        <span className={s.contactStatus}>
                            <CircleIcon fontSize={size} color='success' />
                            <Typography fontSize={size} mt={0.1} mb={0} ml={1} variant="caption" display="block" gutterBottom>
                                Online
                            </Typography>
                        </span>
                    </Grid>
                </Grid>
            </Button>
        </Grid>
    )
}

export default ContactInfo;