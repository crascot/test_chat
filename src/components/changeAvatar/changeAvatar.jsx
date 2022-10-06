import React from "react";
import { Avatar, Card, CardContent, IconButton } from "@mui/material";
import s from './changeAvatar.module.css';
import CloseIcon from '@mui/icons-material/Close';


const ChangeAvatar = ({ setOpen }) => {
    const avatar = localStorage.getItem('avatar')
    const close = () => setOpen(false)

    const select = (event) => {
        if (!event.target.files.length) return;
        const files = Array.from(event.target.files)

        files.forEach(file => {
            if (!file.type.match('image')) return null;
            const reader = new FileReader()

            reader.onload = (ev) => {
                localStorage.setItem('avatar', ev.target.result)
            }
            reader.readAsDataURL(file)
            setOpen(false)
        })
    }

    return (
        <Card className={s.changeAvatarCard}>
            <IconButton onClick={close}>
                <CloseIcon />
            </IconButton>
            <CardContent className={s.changeAvatarContent}>
                <label htmlFor="avatar-file">
                    <input
                        onChange={select}
                        id="avatar-file"
                        type="file"
                        accept="jpeg,png"
                    />
                    <Avatar className={s.avatar} src={avatar} />
                </label>
            </CardContent>
        </Card>
    )
}

export default ChangeAvatar;