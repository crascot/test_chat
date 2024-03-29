import React from "react";
import { Grid, Avatar, Typography, IconButton, TextField } from "@mui/material";
import { fourthBlockStyle } from "./fourthBlockStyle";
import './fourthBlock.css';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import LocalPhoneOutlinedIcon from '@mui/icons-material/LocalPhoneOutlined';
import VideocamIcon from '@mui/icons-material/Videocam';
import VideocamOutlinedIcon from '@mui/icons-material/VideocamOutlined';
import FavoriteIcon from '@mui/icons-material/Favorite';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import CloseIcon from '@mui/icons-material/Close';
import { useSelector } from "react-redux";
import Icon from "./icons/icons";
import { useState } from "react";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { checkData } from "../../../features/peoples/peoplesSlice";
import SearchMessage from "./search-message/searchMessage";


const FourthBlock = () => {
    const dispatch = useDispatch()

    const id = useSelector(state => state.peoples.id)
    const data = useSelector(state => state.peoples.data)
    const chat = useSelector(state => state.message.chat)
    const contacts = useSelector(state => state.peoples.contacts)
    const currentContact = contacts.find(user => user.id === id)
    const [size, setSize] = useState(3)
    const close = () => {
        setSearch('')
        dispatch(checkData(false))
    }

    useEffect(() => {
        if (window.innerWidth <= 1252) setSize(false)
        else setSize(3)
    }, [window.innerWidth, size])

    const icons = [
        {
            id: 1,
            icon: <LocalPhoneIcon style={fourthBlockStyle.iconPhone} />,
            iconHover: <LocalPhoneOutlinedIcon style={fourthBlockStyle.iconPhone} />
        },
        {
            id: 2,
            icon: <VideocamIcon style={fourthBlockStyle.iconVideo} />,
            iconHover: <VideocamOutlinedIcon style={fourthBlockStyle.iconVideo} />
        },
        {
            id: 3,
            icon: <FavoriteIcon style={fourthBlockStyle.iconHeart} />,
            iconHover: <FavoriteBorderOutlinedIcon style={fourthBlockStyle.iconHeart} />
        }
    ]

    const [search, setSearch] = useState('')
    const changeSearch = (e) => setSearch(e.target.value)

    const findMess = chat
        .filter(mess => mess.message.toLowerCase().includes(search.toLocaleLowerCase()) && mess.id === id && !mess.img)
        .map(((mess, index) => <SearchMessage mess={mess} key={index} />))

    if (data) return (
        <Grid item xs={size}
            container
            className='fourth-block'
            direction="column"
        >
            <Grid item container
                className="close-block"
                direction="row"
                justifyContent="flex-start"
                alignItems="center"
            >
                <IconButton onClick={close}><CloseIcon /></IconButton>
                <Typography variant="h5">
                    {data === 'user' ? 'Данные контакта' : 'Поиск сообщения'}
                </Typography>
            </Grid>
            {
                data === 'user' ?
                    <Grid item xs
                        container
                        justifyContent='center'
                        alignItems='center'
                        className='info'
                    >
                        <div className='contact'>
                            <Avatar className='avatar' src={currentContact.avatar} />
                            <Typography className='name' variant="h4" gutterBottom>
                                {currentContact.name}
                            </Typography>
                            <div className='connection'>
                                {icons.map((i, index) => <Icon i={i} key={index} />)}
                            </div>
                        </div>
                    </Grid>
                    :
                    <Grid item xs className='container-search-message'>
                        <div className="container-input">
                            <TextField
                                value={search}
                                onChange={changeSearch}
                                variant="outlined"
                                fullWidth
                            />
                        </div>
                        <div>
                            {
                                findMess.length && search.length > 0 ?
                                    findMess
                                    :
                                    null
                            }
                        </div>
                    </Grid>
            }
        </Grid>
    )
}

export default FourthBlock;