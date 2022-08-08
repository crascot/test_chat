import React, { useState } from "react";
import { Grid, Typography, Backdrop } from "@mui/material";
import s from './message.module.css';


const Message = ({ align, img, message }) => {
    const [open, setOpen] = useState(false);
    const handleClose = () => {
        setOpen(false);
    };
    const handleToggle = () => setOpen(!open);

    return (
        <Grid container justifyContent={align} className={s.message}>
            {
                img ?
                    <>
                        <div onClick={handleToggle} className={s.imageBlock}><img src={message} alt='img' /></div>
                        <Backdrop
                            sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1, padding: 30 }}
                            open={open}
                            onClick={handleClose}
                        >
                            <img src={message} style={{width: 430}} alt='img' />
                        </Backdrop>
                    </>
                    :
                    <Typography className={s.text}>{message}</Typography>
            }
        </Grid>
    )
}
export default Message;