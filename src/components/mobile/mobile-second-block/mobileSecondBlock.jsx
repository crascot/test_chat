import React from "react";
import { Grid } from "@mui/material";
import { useSelector } from "react-redux";
import Peoples from "../../desktop/second-block/peoples/peoples";
import s from './mobileSecondBlock.module.css';

const MobileSecondBlock = () => {
    const id = useSelector(state => state.peoples.id)

    const contacts = useSelector(state => state.peoples.contacts)
    const search = useSelector(state => state.peoples.search)

    const contactsBlock = contacts
        .filter(contact => contact.name.toLowerCase().includes(search.toLocaleLowerCase()))
        .map((props => <Peoples props={props} key={props.id} />))

    if (id === 0) return (
        <Grid item xs className={s.mobileSecondBlock}>
            {contactsBlock}
        </Grid>
    )
}

export default MobileSecondBlock;