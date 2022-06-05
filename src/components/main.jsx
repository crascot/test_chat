import React from 'react';
import Grid from '@mui/material/Grid';
import FirstBlock from './blocks/first-block/firstBlock';
import SecondBlock from './blocks/second-block/secondBlock';
import ThirdBlock from './blocks/third-block/thirdBlock';
import FourthBlock from './blocks/fourth-block/fourthBlock';
import './main.css';


const Main = () => {

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