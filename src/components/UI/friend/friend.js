import React from 'react'
import { Avatar, Stack, Typography } from '@mui/material'
export const Friend = () => {
    return (
        <Stack direction={"row"} sx={{
            width: "100%",
            maxWidth: "20rem",
            alignItems: "center",
            justifyContent: "center",
            marginY:"10px"
        }}>
            <Avatar sizes='large'>AD</Avatar>
            <Typography sx={{
                marginLeft:"10px",
                fontSize:'1.2rem',
                fontWeight:"800"
            }}>Ademola Adeakanfe</Typography>
        </Stack>
    )
}
