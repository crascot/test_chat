import React, { useEffect, useState } from 'react';
import Grid from '@mui/material/Grid';
import FirstBlock from './desktop/first-block/firstBlock';
import SecondBlock from './desktop/second-block/secondBlock';
import ThirdBlock from './desktop/third-block/thirdBlock';
import FourthBlock from './desktop/fourth-block/fourthBlock';
import s from './main.module.css';
import MobileFirstBlock from './mobile/mobile-first-block/mobileFirstBlock';
import MobileSecondBlock from './mobile/mobile-second-block/mobileSecondBlock';
import { Users } from '../api';
import { getContacts, ready } from '../features/peoples/peoplesSlice';
import { useDispatch } from 'react-redux';
import MobileThirdBlock from './mobile/mobile-third-block/mobileThirdblock';


const Main = () => {
    const dispatch = useDispatch()

    const copyCat = {
        id: 11,
        avatar: 'https://assets.mycast.io/characters/sylvester-the-cat-911431-normal.jpg?1597174259',
        name: 'CopyCat',
        username: 'bot',
    }

    useEffect(() => {
        Users()
            .then(user => {
                dispatch(getContacts([copyCat, ...user]))
                dispatch(ready())
            })
    }, [])

    const desktop = (
        <Grid className={s.desktop}
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
    const mobile = (
        <Grid
            container
            direction="column"
            justifyContent="center"
            alignItems="center"
        >
            <MobileFirstBlock />
            <MobileSecondBlock />
            <MobileThirdBlock />
            <FourthBlock />
        </Grid>
    )

    const [main, setMain] = useState()
    useEffect(() => {
        if (window.innerWidth <= 1030) setMain(mobile)
        else setMain(desktop)
    }, [main, window.innerWidth])

    return main;
};

export default Main;