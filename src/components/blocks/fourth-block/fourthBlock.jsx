import React from "react";
import { Grid, Avatar, Typography } from "@mui/material";
import { fourthBlockStyle } from "./fourthBlockStyle";
import './fourthBlock.css';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import LocalPhoneOutlinedIcon from '@mui/icons-material/LocalPhoneOutlined';
import VideocamIcon from '@mui/icons-material/Videocam';
import VideocamOutlinedIcon from '@mui/icons-material/VideocamOutlined';
import FavoriteIcon from '@mui/icons-material/Favorite';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import { useSelector } from "react-redux";
import Icon from "./icons/icons";


const FourthBlock = () => {
    const id = useSelector(state => state.peoples.id)
    const data = useSelector(state => state.peoples.data)
    const contacts = useSelector(state => state.peoples.contacts)
    const currentContact = contacts.find(user => user.id === id)

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

    if (data) return (
        <Grid item xs={3}
            container
            className='fourth-block'
            direction="column"
            justifyContent="center"
            alignItems="stretch"
        >
            <Grid item xs={6} justifyContent='center' alignItems='flex-end' container>
                <div className='contact'>
                    <Avatar className='avatar' src={currentContact.avatar} />
                    <Typography className='name' variant="h4" gutterBottom>
                        {currentContact.name}
                    </Typography>
                </div>
            </Grid>
            <Grid item xs={1}
                className='connection'
                direction="row"
                justifyContent='space-between'
                alignItems='flex-start'
                container
            >
                {icons.map((i, index) => <Icon i={i} key={index} />)}
            </Grid>
        </Grid>
    )
}

export default FourthBlock;