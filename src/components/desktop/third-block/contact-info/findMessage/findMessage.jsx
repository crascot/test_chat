import React from "react";
import { IconButton } from "@mui/material";
import SearchIcon from '@mui/icons-material/Search';
import { checkData } from "../../../../../features/peoples/peoplesSlice";
import { useDispatch } from "react-redux";


const FindMess = () => {
    const dispatch = useDispatch()
    const showFind = () => dispatch(checkData('find'))

    return (
        <IconButton onClick={showFind}>
            <SearchIcon fontSize="large" />
        </IconButton>
    )
}

export default FindMess;