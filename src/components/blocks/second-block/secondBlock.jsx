import React, { useEffect, useState } from 'react';
import { Grid, TextField, Typography } from '@mui/material';
import Peoples from './peoples/peoples';
import { useDispatch, useSelector } from 'react-redux';
import './secondBlock.css';
import { secondBlockStyle } from './secondBlockStyle';
import { getContacts, getCurrentContact } from '../../../features/peoples/peoplesSlice';
import { Users } from '../../../api';


const SecondBlock = () => {
    const dispatch = useDispatch()

    const [search, setSearch] = useState('')
    const id = useSelector(state => state.peoples.id)
    const contacts = useSelector(state => state.peoples.contacts)

    const findContact = contacts.filter(contact => contact.name.toLowerCase().includes(search.toLocaleLowerCase()))
    const contactsBlock = findContact.map((props => <Peoples props={props} key={props.id} />))

    useEffect(() => {
        Users()
            .then(user => {
                dispatch(getContacts(user))
            })
    }, [])
    dispatch(getCurrentContact(contacts.find(user => user.id === id)))

    return (
        <Grid className='secondBlock' item xs={2}>
            <Grid
                style={secondBlockStyle.grid}
                justifyContent="flex-start"
                alignItems="flex-start"
            >
                <TextField value={search} onChange={(event) => setSearch(event.target.value)} placeholder="Search" fullWidth />
                <Typography style={secondBlockStyle.chat} color='gray' variant="caption" display="block" gutterBottom>
                    Chats
                </Typography>
            </Grid>
            <Grid item xs className='contacts'>
                {contactsBlock}
            </Grid>
        </Grid>
    )
};

export default SecondBlock;