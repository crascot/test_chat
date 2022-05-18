import React, { useEffect } from 'react';
import Grid from '@mui/material/Grid';
import FirstBlock from './blocks/first-block/firstBlock';
import SecondBlock from './blocks/second-block/secondBlock';
import ThirdBlock from './blocks/third-block/thirdBlock';
import FourthBlock from './blocks/fourth-block/fourthBlock';
import { Users } from '../api';
import { useDispatch, useSelector } from 'react-redux';
import { getContacts, getCurrentContact } from '../features/peoples/peoplesSlice';
import './main.css';


const Main = () => {
    const dispatch = useDispatch()
    const contacts = useSelector(state => state.peoples.contacts)
    const id = useSelector(state => state.peoples.id)

    useEffect(() => {
        Users()
            .then(user => dispatch(getContacts(user)));
    }, [])
    dispatch(getCurrentContact(contacts.find(user => user.id === id)))

    return (
        <Grid className='main'
            direction="row"
            justifyContent="center"
            alignItems="stretch"
            container
        >
            <FirstBlock />
            <SecondBlock />
            <ThirdBlock />
            <FourthBlock />
        </Grid>
    )
};

export default Main;