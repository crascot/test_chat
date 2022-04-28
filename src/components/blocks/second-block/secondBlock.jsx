import React from 'react';
import { Grid, TextField, Typography } from '@mui/material';
import './secondBlock.css';
import Peoples from './peoples/peoples';


const SecondBlock = () => {
    return (
        <Grid className='secondBlock' item xs={2}>
            <Grid
                style={{ padding: 15 }}s
                justifyContent="flex-start"
                alignItems="flex-start"
            >
                <TextField placeholder="Search" fullWidth />
                <Typography style={{margin: '15px 0 -15px 0'}} color='gray' variant="caption" display="block" gutterBottom>
                    Chats
                </Typography>
            </Grid>
            <Grid item xs>
                <Peoples />
            </Grid>
        </Grid>
    )
};

export default SecondBlock;