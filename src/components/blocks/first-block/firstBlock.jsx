import React from 'react';
import ChatIcon from '@mui/icons-material/Chat';
import PhoneIcon from '@mui/icons-material/Phone';
import FavoriteIcon from '@mui/icons-material/Favorite';
import SettingsIcon from '@mui/icons-material/Settings';
import { Grid, Avatar, IconButton } from '@mui/material';
import './firstBlock.css';


const avatarSize = {
    width: 66,
    height: 66,
}
const iconSize = {
    width: 36,
    height: 36,
}

const FirstBlock = () => {
    return (
        <Grid className='firstBlock' item xs>
            <div className='container'>
                <Grid
                    container
                    direction="column"
                    justifyContent="flex-start"
                    alignItems="center">
                    <Grid item className='box'>
                        <Avatar sx={avatarSize} />
                    </Grid>
                    <Grid className='box' item>
                        <IconButton className='icon'>
                            <ChatIcon sx={iconSize} />
                        </IconButton>
                    </Grid>
                    <Grid className='box' item>
                        <IconButton className='icon'>
                            <PhoneIcon sx={iconSize} />
                        </IconButton>
                    </Grid>
                    <Grid className='box' item>
                        <IconButton className='icon'>
                            <FavoriteIcon sx={iconSize} />
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
                            <SettingsIcon sx={iconSize} />
                        </IconButton>
                    </Grid>
                </Grid>
            </div>
        </Grid>
    )
}

export default FirstBlock;