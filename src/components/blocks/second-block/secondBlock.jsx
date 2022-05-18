import React, { useState } from 'react';
import { Grid, TextField, Typography } from '@mui/material';
import Peoples from './peoples/peoples';
import { useSelector } from 'react-redux';
import './secondBlock.css';


const SecondBlock = () => {
    const contacts = useSelector(state => state.peoples.contacts)

    const [search, setSearch] = useState('')
    const findContact = contacts.filter(contact => contact.name.toLowerCase().includes(search.toLocaleLowerCase()))
    const contactsBlock = findContact.map((props => <Peoples props={props} key={props.id} />))

    return (
        <Grid className='secondBlock' item xs={2}>
            <Grid
                style={{ padding: 15 }}
                justifyContent="flex-start"
                alignItems="flex-start"
            >
                <TextField value={search} onChange={(event) => setSearch(event.target.value)} placeholder="Search" fullWidth />
                <Typography style={{ margin: '15px 0 -15px 0' }} color='gray' variant="caption" display="block" gutterBottom>
                    Chats
                </Typography>
            </Grid>
            <Grid item xs>
                {contactsBlock}
            </Grid>
        </Grid>
    )
};

export default SecondBlock;