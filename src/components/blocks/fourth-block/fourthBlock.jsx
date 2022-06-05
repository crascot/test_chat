import React from "react";
import { Grid, Avatar, Typography, IconButton } from "@mui/material";
import { fourthBlockStyle } from "./fourthBlockStyle";
import './fourthBlock.css';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import VideocamIcon from '@mui/icons-material/Videocam';
import FavoriteIcon from '@mui/icons-material/Favorite';
import { useSelector } from "react-redux";


const FourthBlock = () => {
    const id = useSelector(state => state.peoples.id)
    const currentContact = useSelector(state => state.peoples.currentContact)

    if (id !== 0) return (
        <Grid item xs={3}
            style={fourthBlockStyle.main}
            container
            direction="column"
            justifyContent="center"
            alignItems="stretch"
        >
            <Grid item xs={6} justifyContent='center' alignItems='center' container>
                <div style={fourthBlockStyle.contactData}>
                    <Avatar style={fourthBlockStyle.avatar} src={currentContact.avatar} />
                    <Typography style={fourthBlockStyle.name} variant="h4" gutterBottom component="div">
                        {currentContact.name}
                    </Typography>
                </div>
            </Grid>
            <Grid item xs={1}
                className='connection'
                direction="row"
                justifyContent='space-between'
                alignItems='center'
                container
            >
                <IconButton style={fourthBlockStyle.iconPhone}><LocalPhoneIcon /></IconButton>
                <IconButton style={fourthBlockStyle.iconVideo}><VideocamIcon /></IconButton>
                <IconButton style={fourthBlockStyle.iconHeart}><FavoriteIcon /></IconButton>
            </Grid>
        </Grid>
    )
}

export default FourthBlock;