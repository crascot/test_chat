import React, { useState, useEffect } from "react";
import { Grid, Typography } from "@mui/material";
import './search-message.css'
import { useSelector } from "react-redux";


const SearchMessage = ({ mess }) => {
    const id = useSelector(state => state.peoples.id)
    const contacts = useSelector(state => state.peoples.contacts)
    const currentContact = contacts.find(e => e.id === id)

    const [who, setWho] = useState('')

    useEffect(() => {
        mess.align === 'left' ?
            setWho(`${currentContact.name}:`)
            :
            setWho('Вы:')
    }, [who, id])

    return (
        <Grid item className='search-message'>
            <Typography variant="body2" component="h1">{mess.date}</Typography>
            <Typography variant="body2" component="p">
                <Typography fontWeight="bold" component="span">
                    {who}
                </Typography>
                {mess.message}
            </Typography>
        </Grid>
    )
}

export default SearchMessage;