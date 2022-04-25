import React from 'react';
import Grid from '@mui/material/Grid';
import FirstBlock from './blocks/first-block/firstBlock';
import './main.css';
import SecondBlock from './blocks/second-block/secondBlock';

const Main = () => {

    return (
        <div className='main'>
            <Grid className='main-grid'
                direction="row"
                justifyContent="center"
                alignItems="stretch"
                container
            >
                <FirstBlock />
                <SecondBlock />
                <Grid item xs={5} style={{ backgroundColor: 'green' }}></Grid>
                <Grid item xs={3} style={{ backgroundColor: 'yellow' }}></Grid>
            </Grid>
        </div>
    )
};

export default Main