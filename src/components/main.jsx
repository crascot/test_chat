import React from 'react';
import Grid from '@mui/material/Grid';
import FirstBlock from './blocks/first-block/firstBlock';
import './main.css';
import SecondBlock from './blocks/second-block/secondBlock';
import ThirdBlock from './blocks/third-block/thirdBlock';

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
                <Grid item xs={3} style={{ backgroundColor: 'white' }}></Grid>
            </Grid>
    )
};

export default Main