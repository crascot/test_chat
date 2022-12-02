import React from 'react';
import { CircularProgress, Grid, TextField, Typography } from '@mui/material';
import Peoples from './peoples/peoples';
import { useDispatch, useSelector } from 'react-redux';
import s from './secondBlock.module.css';
import { findContact } from '../../../features/peoples/peoplesSlice';


const SecondBlock = () => {
    const dispatch = useDispatch()

    const contacts = useSelector(state => state.peoples.contacts)
    const search = useSelector(state => state.peoples.search)
    const isReady = useSelector(state => state.peoples.isReady)

    const contactsBlock = contacts
        .filter(contact => contact.name.toLowerCase().includes(search.toLocaleLowerCase()))
        .map((props => <Peoples props={props} key={props.id} />));
    const find = (event) => dispatch(findContact(event.target.value))

    return (
        <Grid className={s.secondBlock} item xs={2}>
            <Grid
                className={s.find}
                justifyContent="center"
                alignItems="center"
            >
                <TextField
                    value={search}
                    onChange={find}
                    placeholder="Search"
                    fullWidth
                />
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