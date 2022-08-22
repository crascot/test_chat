import React from "react";
import { FormControl, Grid, IconButton, OutlinedInput, Typography } from "@mui/material";
import s from './mobileFirstBlock.module.css';
import SearchIcon from '@mui/icons-material/Search';
import SettingsIcon from '@mui/icons-material/Settings';
import KeyboardReturnIcon from '@mui/icons-material/KeyboardReturn';
import { useState } from "react";


const MobileFirstBlock = () => {
    const [searchVisible, setSearchVisible] = useState(false)

    const visibleInput = () => setSearchVisible(true)
    const hideinput = () => setSearchVisible(false)

    return (
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
                                className={s.search}
                                variant="filled"
                                fullWidth
                            >
                                <OutlinedInput
                                    startAdornment={
                                        <IconButton
                                            onClick={hideinput}
                                            position='start'
                                        >
                                            <KeyboardReturnIcon />
                                        </IconButton>}
                                // value={}
                                // onChange={}
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
                                    fontSize={26}
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
                <IconButton className={s.iconButton}>
                    <SettingsIcon className={s.icon} />
                </IconButton>
            </Grid>
        </Grid>
    )
}

export default MobileFirstBlock;