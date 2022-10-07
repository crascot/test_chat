import React, { useEffect } from "react";
import { Grid, IconButton, InputBase } from "@mui/material";
import SendIcon from '@mui/icons-material/Send';
import AttachFileIcon from '@mui/icons-material/AttachFile';
import { useDispatch, useSelector } from "react-redux";
import { getChat, writeMessage } from "../../../../features/message/messageSlice";
import s from './send.module.css';
import copyCat from "../../../../copycat/copycat";
import { isWriting } from "../../../../features/peoples/peoplesSlice";

const Send = () => {
    const dispatch = useDispatch()
    const id = useSelector(state => state.peoples.id)
    const message = useSelector(state => state.message.message)
    const chat = useSelector(state => state.message.chat)

    const onWriteMessage = (e) => dispatch(writeMessage(e.target.value))
    const sendMessage = () => {
        let mess = {
            id: id,
            align: 'right',
            message: message.trim(),
            date: `${new Date().getHours()}:${new Date().getMinutes()}`
        }

        dispatch(getChat(mess))
        dispatch(writeMessage(''))

        if (id === 11) {
            if (message.trim().length !== 0) dispatch(isWriting(true))
            copyCat(id, 'text', message.trim())
                .then((e) => {
                    setTimeout(() => {
                        dispatch(getChat(e))
                        dispatch(isWriting(false))
                    }, 1500);
                })
        }
    }
    const sendEnter = (e) => {
        if (e.key === "Enter") sendMessage();
    }

    const sendImage = (event) => {
        if (!event.target.files.length) return;
        const files = Array.from(event.target.files)

        files.forEach(file => {
            if (!file.type.match('image')) return;
            const reader = new FileReader()

            reader.onload = (ev) => {
                let mess = {
                    id: id,
                    align: 'right',
                    img: true,
                    message: ev.target.result,
                    date: `${new Date().getHours()}:${new Date().getMinutes()}`
                }
                dispatch(getChat(mess))

                if (id === 11) {
                    dispatch(isWriting(true))
                    copyCat(id, '', ev.target.result)
                        .then((e) => {
                            setTimeout(() => {
                                dispatch(getChat(e))
                                dispatch(isWriting(false))
                            }, 1500);
                        })
                }
            }
            reader.readAsDataURL(file)
        })
    }

    const mess = {
        id: 11,
        align: 'left',
        message: 'Привет, я CopyCat и я буду копировать твои сообщения которые ты мне отправляешь',
        date: `${new Date().getHours()}:${new Date().getMinutes()}`
    }

    useEffect(() => {
        if (chat.length === 0) dispatch(getChat(mess))
    }, [chat])

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
                <label htmlFor="send-image-file">
                    <input
                        onChange={sendImage}
                        id="send-image-file"
                        type="file"
                        accept="image/jpeg,image/png,image/gif,image/webp"
                        multiple
                    />
                    <IconButton aria-label="upload picture" component="span">
                        <AttachFileIcon fontSize="large" className={s.contactButton} />
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
                    <SendIcon className={s.sendIcon} fontSize='large' />
                </IconButton>
            </Grid>
        </Grid>
    )
}

export default Send;