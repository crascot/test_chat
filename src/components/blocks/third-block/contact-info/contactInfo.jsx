import React from "react";
import { Avatar, Button, Grid, Typography } from "@mui/material";
import CircleIcon from '@mui/icons-material/Circle';
import { useDispatch, useSelector } from "react-redux";
import s from './contact-info.module.css';
import { switchData } from "../../../../features/peoples/peoplesSlice";

const ContactInfo = () => {
    const dispatch = useDispatch();
    const id = useSelector(state => state.peoples.id)
    const contacts = useSelector(state => state.peoples.contacts)
    const currentContact = contacts.find(user => user.id === id)

    const showData = () => dispatch(switchData())

    return (
        <Grid
            item xs={1} container
            className={s.contactInfo}
            direction="row"
            justifyContent="flex-start"
            alignItems="center"
        >
            <Button onClick={showData} color="inherit">
                <Grid
                    item xs container
                    className={s.contactInfoLeft}
                    direction="row"
                    justifyContent="flex-start"
                    alignItems="center"
                >
                    <Avatar className={s.contactAvatar} src={currentContact.avatar} />
                    <Grid item xs className={s.contactInfoRight}>
                        <Typography variant="h6" gutterBottom>
                            {currentContact.name}
                        </Typography>
                        <span className={s.contactStatus}>
                            <CircleIcon color='success' />
                            <Typography mt={0.1} mb={0} ml={1} variant="caption" display="block" gutterBottom>
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