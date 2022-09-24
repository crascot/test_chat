import React from "react";
import { Backdrop, FormControl, Grid, IconButton, OutlinedInput, Typography } from "@mui/material";
import s from './mobileFirstBlock.module.css';
import SearchIcon from '@mui/icons-material/Search';
import SettingsIcon from '@mui/icons-material/Settings';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { useState } from "react";
import { useDispatch } from "react-redux";
import { findContact } from "../../../features/peoples/peoplesSlice";
import { useSelector } from "react-redux";
import ChangeAvatar from "../../changeAvatar/changeAvatar";


const MobileFirstBlock = () => {
    const dispatch = useDispatch()

    const [searchVisible, setSearchVisible] = useState(false)
    const id = useSelector(state => state.peoples.id)
    const search = useSelector(state => state.peoples.search)

    const visibleInput = () => setSearchVisible(true)
    const hideinput = () => setSearchVisible(false)

    const find = (event) => dispatch(findContact(event.target.value))

    const [open, setOpen] = useState(false);
    const handleToggle = () => {
        setOpen(!open);
    };

    if (id === 0) return (
        <Grid
            className={s.mobileFirstBlock}
            item xs
            container
            direction="row"
            justifyContent="space-between"
            alignItems="center"
        >
            <>
                {
                    searchVisible ?
                        <Grid item xs>
                            <FormControl
                                className={s.searching}
                                variant="filled"
                                fullWidth
                            >
                                <OutlinedInput
                                    startAdornment={
                                        <IconButton
                                            onClick={hideinput}
                                            position='start'
                                        >
                                            <ArrowBackIcon />
                                        </IconButton>}
                                    value={search}
                                    onChange={find}
                                />
                            </FormControl>
                        </Grid>
                        :
                        <>
                            <Grid
                                item xs={1}
                                container
                                justifyContent='flex-start'
                            >
                                <Typography
                                    fontSize={20}
                                    variant="h4"
                                    fontWeight='600'
                                    color='white'
                                >
                                    Test_Chat
                                </Typography>
                            </Grid>
                            <Grid
                                item xs
                                container
                                justifyContent='flex-end'
                            >
                                <IconButton
                                    className={s.iconButton}
                                    onClick={visibleInput}
                                >
                                    <SearchIcon className={s.icon} />
                                </IconButton>
                            </Grid>
                        </>
                }
            </>
            <Grid
                className={s.settings}
                item xs={1}
                container
                justifyContent='center'
            >
                <IconButton className={s.iconButton} onClick={handleToggle}>
                    <SettingsIcon className={s.icon} />
                </IconButton>
                <Backdrop
                    sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
                    open={open}
                >
                    <ChangeAvatar setOpen={setOpen} />
                </Backdrop>
            </Grid>
        </Grid>
    )
}

export default MobileFirstBlock;