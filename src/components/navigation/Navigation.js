import { AppBar, Stack, Toolbar, ButtonGroup, IconButton, Tooltip, Badge, Typography } from '@mui/material'
import React from 'react'
import { Logo } from '../UI/logo/logo'
import classes from './Navigation.module.css'
import Search from '@mui/icons-material/Search'
import Person from '@mui/icons-material/Person'
import Chat from '@mui/icons-material/Chat'
import { Notifications, Home, Movie, Logout } from '@mui/icons-material';

export const Navigation = () => {
    return (
        <AppBar position={"static"} sx={{
            height: "4rem"
        }}>
            <Toolbar>
                <Stack className={classes.logo_container}>
                    <Logo />
                </Stack>
                <Stack className={classes.navigations}>
                    <ButtonGroup sx={{
                        justifyContent: "space-between",
                        width: "70%"
                    }}>
                        <Tooltip
                            title={<Typography className={classes.tooltip} variant={"h6"} sx={{
                                width: "100%",
                                display: "flex",
                                color: "white",
                                marginTop: "-2rem",
                                fontSize: "1rem",
                                fontWeight: 800
                            }}>Home</Typography>} placement="bottom">
                            <IconButton disableRipple><Home /></IconButton>
                        </Tooltip>
                        <Tooltip title={<Typography className={classes.tooltip} variant={"h6"} sx={{
                            width: "100%",
                            display: "flex",
                            color: "white",
                            marginTop: "-2rem",
                            fontSize: "1rem",
                            fontWeight: 800
                        }}>Add Friends</Typography>} placement="bottom"><IconButton disableRipple><Person /></IconButton></Tooltip>
                        <Tooltip title={<Typography className={classes.tooltip} variant={"h6"} sx={{
                            width: "100%",
                            display: "flex",
                            color: "white",
                            marginTop: "-2rem",
                            fontSize: "1rem",
                            fontWeight: 800
                        }}>Watch</Typography>} placement="bottom"><IconButton disableRipple><Movie /></IconButton></Tooltip>
                        <Tooltip title={<Typography className={classes.tooltip} variant={"h6"} sx={{
                            width: "100%",
                            display: "flex",
                            color: "white",
                            marginTop: "-2rem",
                            fontSize: "1rem",
                            fontWeight: 800
                        }}>Search</Typography>} placement="bottom"><IconButton disableRipple><Search /></IconButton></Tooltip>
                    </ButtonGroup>
                </Stack>
                <Stack className={classes.actions_container}>
                    <ButtonGroup sx={{
                        justifyContent: "space-evenly",
                        width: "70%",
                        height: "100%",
                        alignItems: "center"
                    }}>
                        <Tooltip title={<Typography className={classes.tooltip} variant={"h6"} sx={{
                            width: "100%",
                            display: "flex",
                            color: "white",
                            marginTop: "-2rem",
                            fontSize: "1rem",
                            fontWeight: 800
                        }}>Chat</Typography>} placement="bottom">
                            <Badge>
                                <IconButton disableRipple><Chat /></IconButton>
                            </Badge>
                        </Tooltip>
                        <Tooltip title={<Typography className={classes.tooltip} variant={"h6"} sx={{
                            width: "100%",
                            display: "flex",
                            color: "white",
                            marginTop: "-2rem",
                            fontSize: "1rem",
                            fontWeight: 800
                        }}>Notifications</Typography>} placement="bottom">
                            <Badge>
                                <IconButton disableRipple><Notifications /></IconButton>
                            </Badge>
                        </Tooltip>
                        <Tooltip title={<Typography className={classes.tooltip} variant={"h6"} sx={{
                            width: "100%",
                            display: "flex",
                            color: "white",
                            marginTop: "-2rem",
                            fontSize: "1rem",
                            fontWeight: 800
                        }}>Logout</Typography>} placement="bottom">
                            <IconButton disableRipple><Logout /></IconButton>
                        </Tooltip>
                    </ButtonGroup>
                </Stack>
            </Toolbar>
        </AppBar>
    )
}
