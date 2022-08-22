import { Stack } from '@mui/material';
import React from 'react'
import { Navigation } from '../../components/navigation/Navigation'
import { Center } from '../../components/UI/center/Center';
import { Right } from '../../components/UI/right/Right';
import { Side } from '../../components/UI/side/side';
import classes from './HomePage.module.css';
import useMediaQuery from '@mui/material/useMediaQuery'
export const HomePage = () => {
    const portrait = useMediaQuery("(max-width: 1000px)")
    const secondVal = useMediaQuery("(max-width:500px)");
    return (
        <div className={classes.HomePage_container}>
            <Navigation />

            <Stack direction={"row"} sx={{
                width: "100%",
                flex: 12
            }}>
                <Side />
                <Center portrait={secondVal} />
                {!portrait && <Right />}
            </Stack>
        </div>
    )
}
