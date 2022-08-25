import React from "react";
import { Grid } from "@mui/material";
import { useSelector } from "react-redux";
import s from './mobileThirdBlock.module.css';
import ContactInfo from "../../desktop/third-block/contact-info/contactInfo";
import Chat from "../../desktop/third-block/chat/chat";
import Send from "../../desktop/third-block/send/send";


const MobileThirdBlock = () => {
    const id = useSelector(state => state.peoples.id)

    if (id !== 0) return (
        <Grid item xs className={s.mobileThirdBlock}>
            <ContactInfo />
            <Chat />
            <Send />
        </Grid>
    )
}

export default MobileThirdBlock;