import React from 'react';
import { Avatar, Typography } from '@mui/material';
import CheckIcon from '@mui/icons-material/Check';
import './peoples.css'


const avatar = {
    marginRight: 25,
    width: 50,
    height: 50
}

const Peoples = () => {
    return (
        <div className='peoples'>
            <Avatar style={avatar} />
            <div style={{width: '100%'}}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <Typography variant="h6" mb={0} gutterBottom component="div">
                        Имя
                    </Typography>
                    <CheckIcon style={{marginBottom: 7}} />
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <Typography variant="caption" display="block" gutterBottom>
                        Никнейм
                    </Typography>
                    <Typography variant="caption" display="block" gutterBottom>
                        9:30
                    </Typography>
                </div>
            </div>
        </div>
    )
};

export default Peoples;