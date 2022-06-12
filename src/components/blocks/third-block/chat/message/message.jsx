import React from "react";
import { Grid, Typography } from "@mui/material";
import './message.css';


const Message = ({ align, img, message }) => {
    return (
        <Grid container justifyContent={align} className='message'>
            {
                img ?
                    <img src={message} className='image' alt='img' />
                    :
                    <Typography className="text">{message}</Typography>
            }
        </Grid>
    )
}
export default Message;