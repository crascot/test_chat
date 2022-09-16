import React, { useState } from 'react';
import { IconButton } from "@mui/material";


const Icon = ({ i }) => {
    const [hover, setHover] = useState(0)

    return (
        <IconButton
            onMouseOver={() => setHover(i.id)}
            onMouseLeave={() => setHover(0)}
        >{i.id === hover ? i.icon : i.iconHover}
        </IconButton>
    )
}

export default Icon;