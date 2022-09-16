import React, { useEffect, useState } from "react";
import { Grid } from "@mui/material";
import { useSelector } from "react-redux";
import s from './mobileThirdBlock.module.css';
import ContactInfo from "../../desktop/third-block/contact-info/contactInfo";
import Chat from "../../desktop/third-block/chat/chat";
import Send from "../../desktop/third-block/send/send";


const MobileThirdBlock = () => {
    const id = useSelector(state => state.peoples.id)
    const data = useSelector(state => state.peoples.data)

    const [hide, setHide] = useState('inline')

    useEffect(() => {
        if (window.innerWidth <= 1252) {
            if (data) setHide('none')
            else setHide('inline')
        }
    }, [data])

    if (id !== 0) return (
        <Grid 
        item xs
        className={s.mobileThirdBlock}
        style={{display: hide}}
        >
            <ContactInfo />
            <Chat />
            <Send />
        </Grid>
    )
}

export default MobileThirdBlock;