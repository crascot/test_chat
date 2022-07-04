import React from "react";
import { Grid, Typography } from "@mui/material";
import s from './message.module.css';


const Message = ({ align, img, message }) => (
    <Grid container justifyContent={align} className={s.message}>
        {
            img ?
                <img src={message} className={s.image} alt='img' />
                :
                <Typography className={s.text}>{message}</Typography>
        }
    </Grid>
)
export default Message;