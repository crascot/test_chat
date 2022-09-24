import React, { useState } from 'react';
import ChatIcon from '@mui/icons-material/Chat';
import PhoneIcon from '@mui/icons-material/Phone';
import FavoriteIcon from '@mui/icons-material/Favorite';
import SettingsIcon from '@mui/icons-material/Settings';
import { Grid, Avatar, IconButton, Backdrop } from '@mui/material';
import { firstBlockStyle } from './firstBlockStyle';
import s from './firstBlock.module.css';
import ChangeAvatar from '../../changeAvatar/changeAvatar';


const FirstBlock = () => {
    const avatar = localStorage.getItem('avatar')

    const [open, setOpen] = useState(false);
    const handleToggle = () => {
        setOpen(!open);
    };

    return (
        <Grid className={s.firstBlock} item xs={1}>
            <div className={s.container}>
                <Grid
                    container
                    direction="column"
                    justifyContent="flex-start"
                    alignItems="center">
                    <Grid className={s.box} item>
                        <IconButton onClick={handleToggle}>
                            <Avatar src={avatar} sx={firstBlockStyle.avatarSize} />
                        </IconButton>
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
                        <IconButton className={s.icon} onClick={handleToggle}>
                            <SettingsIcon sx={firstBlockStyle.iconSize} />
                        </IconButton>
                        <Backdrop
                            sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
                            open={open}
                        >
                            <ChangeAvatar setOpen={setOpen} />
                        </Backdrop>
                    </Grid>
                </Grid>
            </div>
        </Grid>
    )
}

export default FirstBlock;