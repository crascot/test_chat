import React from 'react';
import Grid from '@mui/material/Grid';
import FirstBlock from './desktop/first-block/firstBlock';
import SecondBlock from './desktop/second-block/secondBlock';
import ThirdBlock from './desktop/third-block/thirdBlock';
import FourthBlock from './desktop/fourth-block/fourthBlock';
import s from './main.module.css';
import { useEffect } from 'react';
import { useState } from 'react';
import MobileFirstBlock from './mobile/mobile-first-block/mobileFirstBlock';


const Main = () => {
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