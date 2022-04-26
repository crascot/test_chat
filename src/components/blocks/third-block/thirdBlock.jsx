import React from 'react';
import Grid from '@mui/material/Grid';
import './thirdBlock.css';
import { Avatar, Typography, IconButton, InputBase } from '@mui/material';
import CircleIcon from '@mui/icons-material/Circle';
import AttachFileIcon from '@mui/icons-material/AttachFile';


const attach = {
    width: 36,
    height: 36,
    transform: 'rotate(45deg)',
}

const ThirdBlock = () => {

    return (
        <Grid className='third-block' item xs={6}>
            <Grid
                container
                direction="row"
                justifyContent="space-between"
                alignItems="center"
                className='top'
            >
                <div style={{ display: 'flex', alignItems: 'center' }}>
                    <Avatar style={{ width: 70, height: 70 }} />
                    <div style={{ marginLeft: 25 }}>
                        <Typography variant="h6" gutterBottom component="div">
                            Имя
                        </Typography>
                        <span style={{ display: 'flex', alignItems: 'center' }}>
                            <CircleIcon color='success' />
                            <Typography mt={0.1} mb={0} ml={1} variant="caption" display="block" gutterBottom>
                                Online
                            </Typography>
                        </span>
                    </div>
                </div>
                <IconButton className='icon'>
                    <AttachFileIcon style={attach} />
                </IconButton>
            </Grid>
            <Grid item xs style={{ backgroundColor: 'red' }}>
                chat
            </Grid>
            <Grid item xs>
                <InputBase
                    className='send'
                    fullWidth
                    placeholder="Write Message..."
                    inputProps={{ 'aria-label': 'search google maps' }}
                />
            </Grid>
        </Grid>

    )
};

export default ThirdBlock