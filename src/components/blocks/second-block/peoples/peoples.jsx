import React from 'react';
import { Avatar, Typography } from '@mui/material';
import CheckIcon from '@mui/icons-material/Check';
import './peoples.css'
import { useDispatch } from 'react-redux';
import { getId } from '../../../../features/peoples/peoplesSlice';


const avatar = {
    marginRight: 15,
    width: 50,
    height: 50
}

const Peoples = ({ props }) => {
    const dispatch = useDispatch()
    const currentId = () => dispatch(getId(props.id))

    return (
        <div className='peoples' onClick={currentId}>
            <Avatar style={avatar} />
            <div style={{ width: '100%' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <Typography variant="h6" mb={0} gutterBottom component="div">
                        {props.name}
                    </Typography>
                    <CheckIcon style={{ marginBottom: 7, marginLeft: 7 }} />
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <Typography variant="caption" display="block" gutterBottom>
                        {props.username}
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