import React from "react";
import { Grid, IconButton, InputBase } from "@mui/material";
import SendIcon from '@mui/icons-material/Send';
import AttachFileIcon from '@mui/icons-material/AttachFile';
import { useDispatch, useSelector } from "react-redux";
import { getChat, writeMessage } from "../../../../features/message/messageSlice";
import s from './send.module.css';

const Send = () => {
    const dispatch = useDispatch()
    const id = useSelector(state => state.peoples.id)
    const message = useSelector(state => state.message.message)

    const onWriteMessage = (e) => dispatch(writeMessage(e.target.value))
    const sendMessage = () => {
        let mess = {
            id: id,
            align: 'right',
            message: message.trim()
        }

        dispatch(getChat(mess))
        dispatch(writeMessage(''))
    }
    const sendEnter = (e) => {
        if (e.key === "Enter") sendMessage();
    }

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
            item
            container
            className={s.send}
            direction="row"
            justifyContent="space-between"
            alignItems="center"
        >
            <Grid item xs className={s.sendImage}>
                <label htmlFor="icon-button-file">
                    <input onChange={sendImage} id="icon-button-file" type="file" accept="image/jpeg,image/png,image/gif" />
                    <IconButton aria-label="upload picture" component="span">
                        <AttachFileIcon className={s.contactButton} />
                    </IconButton>
                </label>
            </Grid>
            <Grid item xs={12}>
                <InputBase
                    value={message}
                    onChange={onWriteMessage}
                    onKeyDown={sendEnter}
                    fullWidth
                    placeholder="Write Message..."
                    className={s.sendInput}
                />
            </Grid>
            <Grid item>
                <IconButton className={s.sendButton} onClick={sendMessage}>
                    <SendIcon className={s.sendIcon} />
                </IconButton>
            </Grid>
        </Grid>
    )
}

export default Send;