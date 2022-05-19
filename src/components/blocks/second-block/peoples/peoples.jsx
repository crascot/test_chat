import React from 'react';
import { Avatar, Typography } from '@mui/material';
import CheckIcon from '@mui/icons-material/Check';
import './peoples.css';
import { useDispatch } from 'react-redux';
import { getId } from '../../../../features/peoples/peoplesSlice';
import { peoplesStyle } from './peoplesStyle';


const avatar = {
    marginRight: 15,
    width: 50,
    height: 50
}

const Peoples = ({ props }) => {
    const dispatch = useDispatch()
    const onCurrentId = () => dispatch(getId(props.id))

    return (
        <div className='peoples' onClick={onCurrentId}>
            <Avatar style={avatar} />
            <div style={peoplesStyle.container}>
                <div style={peoplesStyle.block}>
                    <Typography variant="h6" mb={0} gutterBottom component="div">
                        {props.name}
                    </Typography>
                    <CheckIcon style={peoplesStyle.checkIcon} />
                </div>
                <div style={peoplesStyle.block}>
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