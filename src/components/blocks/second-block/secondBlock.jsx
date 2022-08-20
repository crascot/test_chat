import React, { useEffect, useState } from 'react';
import { CircularProgress, Grid, TextField, Typography } from '@mui/material';
import Peoples from './peoples/peoples';
import { useDispatch, useSelector } from 'react-redux';
import s from './secondBlock.module.css';
import { getContacts, ready } from '../../../features/peoples/peoplesSlice';
import { Users } from '../../../api';


const SecondBlock = () => {
    const dispatch = useDispatch()

    const [search, setSearch] = useState('')
    const contacts = useSelector(state => state.peoples.contacts)
    const isReady = useSelector(state => state.peoples.isReady)

    const findContact = contacts.filter(contact => contact.name.toLowerCase().includes(search.toLocaleLowerCase()))
    const contactsBlock = findContact.map((props => <Peoples props={props} key={props.id} />))

    useEffect(() => {
        Users()
            .then(user => {
                dispatch(getContacts(user))
                dispatch(ready())
            })
    }, [])

    return (
        <Grid className={s.secondBlock} item xs={2}>
            <Grid
                className={s.find}
                justifyContent="center"
                alignItems="center"
            >
                <TextField value={search} onChange={(event) => setSearch(event.target.value)} placeholder="Search" fullWidth />
            </Grid>
            <Grid item xs className={s.contacts}>
                {
                    isReady ?
                        contactsBlock.length !== 0 ?
                            contactsBlock
                            :
                            <Typography variant="h6" className={s.notFound}>
                                Контакт не найден
                            </Typography>
                        :
                        <div className={s.progress}><CircularProgress /></div>
                }
            </Grid>
        </Grid>
    )
};

export default SecondBlock;