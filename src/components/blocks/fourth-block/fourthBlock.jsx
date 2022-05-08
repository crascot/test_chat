import React from "react";
import { Grid, Avatar, Typography, IconButton } from "@mui/material";
import { fourthBlockStyle } from "./fourthBlockStyle";
import './fourthBlock.css';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import VideocamIcon from '@mui/icons-material/Videocam';
import FavoriteIcon from '@mui/icons-material/Favorite';


const FourthBlock = () => {
    return (
        <Grid item xs={3}
            style={fourthBlockStyle.main}
            container
            direction="column"
            justifyContent="center"
            alignItems="stretch"
        >
            <Grid item xs={6} justifyContent='center' alignItems='center' container>
                <div style={{width: '100%'}}>
                    <Avatar style={fourthBlockStyle.avatar} />
                    <Typography style={fourthBlockStyle.name} variant="h4" gutterBottom component="div">
                        Name
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
                <IconButton style={{ color: '#0093E9' }}><LocalPhoneIcon /></IconButton>
                <IconButton style={{ color: '#0093E9' }}><VideocamIcon /></IconButton>
                <IconButton style={{ color: '#ff0000' }}><FavoriteIcon /></IconButton>
            </Grid>
        </Grid>
    )
}

export default FourthBlock;