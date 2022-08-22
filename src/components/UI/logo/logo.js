import React from 'react';
import CaretUpIcon from "@mui/icons-material/ShoppingCartCheckoutSharp";
import { IconButton, Stack, Typography } from '@mui/material';

export const Logo = () => {
    return (
        <Stack spacing={.1} direction={"row"} sx={{
            width: "100%",
            margin: 0,
            padding: 0,
            justifyContent: "center",
            alignItems: "center"
        }}>
            <IconButton sx={{
                fontSize: "2rem",
                cursor: "pointer"
            }}>
                <CaretUpIcon sx={{
                    fontSize: "inherit",
                    color:"white",
                    fontWeight: 800,
                }} size={"medium"} />
            </IconButton>
            <Typography variant={"h5"} sx={{
                fontSize: "2rem",
                fontWeight: 800,
                cursor: "pointer"
            }}>Ademola</Typography>
        </Stack>
    )
}
