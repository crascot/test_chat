import React from 'react';
import ChatIcon from '@mui/icons-material/Chat';
import PhoneIcon from '@mui/icons-material/Phone';
import FavoriteIcon from '@mui/icons-material/Favorite';
import SettingsIcon from '@mui/icons-material/Settings';
import { Grid, Avatar, IconButton } from '@mui/material';
import { firstBlockStyle } from './firstBlockStyle';
import s from './firstBlock.module.css';


const FirstBlock = () => {
    return (
        <Grid className={s.firstBlock} item xs={1}>
            <div className={s.container}>
                <Grid
                    container
                    direction="column"
                    justifyContent="flex-start"
                    alignItems="center">
                    <Grid className={s.box} item>
                        <Avatar sx={firstBlockStyle.avatarSize} />
                    </Grid>
                    <Grid className={s.box} item>
                        <IconButton className={s.icon}>
                            <ChatIcon sx={firstBlockStyle.iconSize} />
                        </IconButton>
                    </Grid>
                    <Grid className={s.box} item>
                        <IconButton className={s.icon}>
                            <PhoneIcon sx={firstBlockStyle.iconSize} />
                        </IconButton>
                    </Grid>
                    <Grid className={s.box} item>
                        <IconButton className={s.icon}>
                            <FavoriteIcon sx={firstBlockStyle.iconSize} />
                        </IconButton>
                    </Grid>
                </Grid>
                <Grid
                    container
                    direction="column"
                    justifyContent="flex-end"
                    alignItems="center">
                    <Grid item className={s.box}>
                        <IconButton className={s.icon}>
                            <SettingsIcon sx={firstBlockStyle.iconSize} />
                        </IconButton>
                    </Grid>
                </Grid>
            </div>
        </Grid>
    )
}

export default FirstBlock;