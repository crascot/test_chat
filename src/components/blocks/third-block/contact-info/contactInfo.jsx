import React from "react";
import { Avatar, Grid, IconButton, Typography } from "@mui/material";
import CircleIcon from '@mui/icons-material/Circle';
import AttachFileIcon from '@mui/icons-material/AttachFile';
import { useDispatch, useSelector } from "react-redux";
import './contact-info.css';
import { getChat } from "../../../../features/message/messageSlice";

const ContactInfo = () => {
    const dispatch = useDispatch();
    const id = useSelector(state => state.peoples.id)
    const contacts = useSelector(state => state.peoples.contacts)
    const currentContact = contacts.find(user => user.id === id)

    const sendImage = (event) => {
        let target = event.target;
        if (!target.files.length) return;
        let fileReader = new FileReader();
        fileReader.onload = function () {
            let mess = {
                id: id,
                align: 'right',
                img: true,
                message: fileReader.result
            }
            dispatch(getChat(mess))
        }
        fileReader.readAsDataURL(target.files[0]);
    }

    return (
        <Grid
            item xs={1} container
            className="contact-info"
            direction="row"
            justifyContent="space-between"
            alignItems="center"
        >
            <Grid
                item xs container
                className='contact-info-left'
                direction="row"
                justifyContent="flex-start"
                alignItems="center"
            >
                <Avatar className="contact-avatar" src={currentContact.avatar} />
                <Grid item xs>
                    <Typography variant="h6" gutterBottom component="div">
                        {currentContact.name}
                    </Typography>
                    <span className='contact-status'>
                        <CircleIcon color='success' />
                        <Typography mt={0.1} mb={0} ml={1} variant="caption" display="block" gutterBottom>
                            Online
                        </Typography>
                    </span>
                </Grid>
            </Grid>
            <Grid item xs={1} className='send-image'>
                <label htmlFor="icon-button-file">
                    <input onChange={sendImage} id="icon-button-file" type="file" accept="image/jpeg,image/png,image/gif" />
                    <IconButton aria-label="upload picture" component="span">
                        <AttachFileIcon className='contact-button' />
                    </IconButton>
                </label>
            </Grid>
        </Grid>
    )
}

export default ContactInfo;