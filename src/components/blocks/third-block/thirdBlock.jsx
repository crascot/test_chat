import React from 'react';
import Grid from '@mui/material/Grid';
import './thirdBlock.css';
import { Avatar, Typography, IconButton, InputBase } from '@mui/material';
import CircleIcon from '@mui/icons-material/Circle';
import AttachFileIcon from '@mui/icons-material/AttachFile';
import SendIcon from '@mui/icons-material/Send';
import { thirdBlockStyle } from './thirdBlockStyle';
import { useSelector } from 'react-redux';


const ThirdBlock = () => {
    const currentContact = useSelector(state => state.peoples.currentContact)
    const id = useSelector(state => state.peoples.id)

    return (
        <Grid style={thirdBlockStyle.mainBlock} item xs
            container
            direction="column"
            justifyContent="space-between"
            alignItems="stretch"
        >
            {id === 0 ?
                <Grid item xs alignItems="center" container style={thirdBlockStyle.zeroId}>
                    <Typography variant="h6" gutterBottom component="div">
                        Нажмите на контакт чтобы начать переписку
                    </Typography>
                </Grid>
                :
                <Grid item xs
                    container
                    direction="column"
                    justifyContent="space-between"
                    alignItems="stretch"
                >
                    <Grid
                        container
                        direction="row"
                        justifyContent="space-between"
                        alignItems="center"
                        style={thirdBlockStyle.top}
                    >
                        <div style={{ display: 'flex', alignItems: 'center' }}>
                            <Avatar style={{ width: 70, height: 70 }} />
                            <div style={{ marginLeft: 25 }}>
                                <Typography variant="h6" gutterBottom component="div">
                                    {currentContact ? currentContact.name : false}
                                </Typography>
                                <span style={{ display: 'flex', alignItems: 'center' }}>
                                    <CircleIcon color='success' />
                                    <Typography mt={0.1} mb={0} ml={1} variant="caption" display="block" gutterBottom>
                                        Online
                                    </Typography>
                                </span>
                            </div>
                        </div>
                        <IconButton>
                            <AttachFileIcon style={thirdBlockStyle.attach} />
                        </IconButton>
                    </Grid>
                    <Grid item xs style={thirdBlockStyle.chat}>

                    </Grid>
                    <Grid item xs={1} style={thirdBlockStyle.send}>
                        <InputBase
                            style={{ marginRight: 20 }}
                            fullWidth
                            placeholder="Write Message..."
                            inputProps={{ 'aria-label': 'search google maps' }}
                        />
                        <IconButton style={thirdBlockStyle.sendButton}>
                            <SendIcon style={thirdBlockStyle.sendIcon} />
                        </IconButton>
                    </Grid>
                </Grid>}
        </Grid>
    )
};

export default ThirdBlock