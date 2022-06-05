import React from 'react';
import ChatIcon from '@mui/icons-material/Chat';
import PhoneIcon from '@mui/icons-material/Phone';
import FavoriteIcon from '@mui/icons-material/Favorite';
import SettingsIcon from '@mui/icons-material/Settings';
import { Grid, Avatar, IconButton } from '@mui/material';
import { firstBlockStyle } from './firstBlockStyle';
import './firstBlock.css';


const FirstBlock = () => {
    return (
        <Grid className='firstBlock' item xs={1}>
            <div className='container'>
                <Grid
                    container
                    direction="column"
                    justifyContent="flex-start"
                    alignItems="center">
                    <Grid item className='box'>
                        <Avatar sx={firstBlockStyle.avatarSize} />
                    </Grid>
                    <Grid className='box' item>
                        <IconButton className='icon'>
                            <ChatIcon sx={firstBlockStyle.iconSize} />
                        </IconButton>
                    </Grid>
                    <Grid className='box' item>
                        <IconButton className='icon'>
                            <PhoneIcon sx={firstBlockStyle.iconSize} />
                        </IconButton>
                    </Grid>
                    <Grid className='box' item>
                        <IconButton className='icon'>
                            <FavoriteIcon sx={firstBlockStyle.iconSize} />
                        </IconButton>
                    </Grid>
                </Grid>
                <Grid
                    container
                    direction="column"
                    justifyContent="flex-end"
                    alignItems="center">
                    <Grid item className='box'>
                        <IconButton className='icon'>
                            <SettingsIcon sx={firstBlockStyle.iconSize} />
                        </IconButton>
                    </Grid>
                </Grid>
            </div>
        </Grid>
    )
}

export default FirstBlock;