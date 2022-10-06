import React from 'react';
import { Avatar, Typography } from '@mui/material';
import CheckIcon from '@mui/icons-material/Check';
import s from './peoples.module.css';
import { useDispatch } from 'react-redux';
import { checkData, getId } from '../../../../features/peoples/peoplesSlice';
import { useSelector } from 'react-redux';


const Peoples = ({ props }) => {
    const dispatch = useDispatch()
    const writing = useSelector(state => state.peoples.writing)
    const chat = useSelector(state => state.message.chat)

    const onCurrentId = () => {
        dispatch(checkData(false))
        dispatch(getId(props.id))
    }

    let lastMessage
    if(chat[chat.length-1]) lastMessage = chat[chat.length-1].id

    return (
        <div className={s.peoples} onClick={onCurrentId}>
            <Avatar className={s.avatar} src={props.avatar} />
            <div className={s.container}>
                <div className={s.block}>
                    <Typography variant="h6" mb={0} component="div">
                        {props.name}
                    </Typography>
                    <CheckIcon className={s.checkIcon} />
                </div>
                <div className={s.block}>
                    {
                        writing && props.id === lastMessage ?
                            <Typography variant="h6" className={s.writing}>
                                ...
                            </Typography>
                            :
                            <Typography variant="caption" component="div">
                                {props.username}
                            </Typography>
                    }
                    <Typography variant="caption" display="block">
                        9:30
                    </Typography>
                </div>
            </div>
        </div>
    )
};

export default Peoples;