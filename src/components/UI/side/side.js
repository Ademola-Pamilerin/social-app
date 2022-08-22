import {
    Notifications,
    Movie,
    Logout,
    School,
    Event,
    Group,
    Bookmark,
    WorkOutline,
    RssFeed,
    Chat,
} from '@mui/icons-material';
import { Fab, Paper, List, Tooltip, Typography } from '@mui/material'
import React from 'react';
import classes from './side.module.css'
import useMediaQuery from '@mui/material/useMediaQuery'

export const Side = () => {
    const portrait = useMediaQuery("(max-width: 1200px)")
    const fontChange = useMediaQuery("(max-width: 1500px)")
    
    return (
        <>
            <Paper
                sx={{
                    color: "#fafafa",
                    display: "flex",
                    flexFlow: "column",
                    flexDirection: "column",
                    width: "100%",
                    alignItems: "center",
                    marginTop: "0rem",
                    boxShadow: "0px 2px 2px .5px grey",
                    overflowY: "scroll",
                    background: portrait ? "rgb(13 146 223 / 87%)" : "white",
                    justifyContent: "space-between",
                    
                    // height: (!fontChange && !portrait) ? "100%" : "none"
                }} className={classes.side}>
                <List sx={{
                    width: "100%",
                    display: "flex",
                    justifyContent: !portrait ? "center" : "space-between",
                    alignItems: "center",
                    flexFlow: "wrap",
                    flexDirection: portrait ? "column" : "column",
                    background: portrait ? "primary.main" : "white",
                    height: portrait ? "100%" : "none"
                }}>
                    {!portrait ? <Fab variant='extended' size="medium" sx={{
                        padding: "0px -3px",
                        width: "80%",
                        height: "4rem",
                        marginTop: ".5rem",
                        marginBottom: '.8rem',
                        fontSize: fontChange ? '.8rem' : "1rem",
                        fontWeight: 900,
                        color: "secondary.main",
                        backgroundColor: "white",
                        '&:hover': {
                            backgroundColor: "secondary.main",
                            color: "white"
                        }
                    }}>
                        <Notifications sx={{ mr: 1 }} />
                        Notifications
                    </Fab> :
                        <Tooltip arrow placement='right' title={<Typography variant="body1">Notifications</Typography>}>
                            <Notifications />
                        </Tooltip>
                    }
                    {!portrait ? <Fab variant='extended' size="medium" sx={{
                        padding: "0px -3px",
                        width: "80%",
                        height: "4rem",
                        marginTop: ".5rem",
                        marginBottom: '.8rem',
                        fontSize: fontChange ? '.8rem' : "1rem",
                        fontWeight: 900,
                        color: "secondary.main",
                        backgroundColor: "white",
                        '&:hover': {
                            backgroundColor: "secondary.main",
                            color: "white"
                        }
                    }}>
                        <Movie sx={{ mr: 1 }} />
                        Watch
                    </Fab> :
                        <Tooltip arrow placement='right' title={<Typography variant="body1">Watch</Typography>}>
                            <Movie />
                        </Tooltip>
                    }

                    {!portrait ? <Fab variant='extended' size="medium" sx={{
                        padding: "0px -3px",
                        width: "80%",
                        height: "4rem",
                        marginTop: ".5rem",
                        marginBottom: '.8rem',
                        fontSize: fontChange ? '.8rem' : "1rem",
                        fontWeight: 900,
                        color: "secondary.main",
                        backgroundColor: "white",
                        '&:hover': {
                            backgroundColor: "secondary.main",
                            color: "white"
                        }
                    }}>
                        <RssFeed />
                        Feed
                    </Fab> :
                        <Tooltip title={<Typography variant="body1">Feeds</Typography>}>
                            <RssFeed />
                        </Tooltip>
                    }
                    {!portrait ? <Fab variant='extended' size="medium" sx={{
                        padding: "0px -3px",
                        width: "80%",
                        height: "4rem",
                        marginTop: ".5rem",
                        marginBottom: '.8rem',
                        fontSize: fontChange ? '.8rem' : "1rem",
                        fontWeight: 900,
                        color: "secondary.main",
                        backgroundColor: "white",
                        '&:hover': {
                            backgroundColor: "secondary.main",
                            color: "white"
                        }
                    }} >
                        <Chat />
                        Chats
                    </Fab> : <Tooltip title={<Typography variant="body1">Chats</Typography>}>
                        <Chat />
                    </Tooltip>}

                    {!portrait ? <Fab variant='extended' size="medium" sx={{
                        padding: "0px -3px",
                        width: "80%",
                        height: "4rem",
                        marginTop: ".5rem",
                        marginBottom: '.8rem',
                        fontSize: fontChange ? '.8rem' : "1rem",
                        fontWeight: 900,
                        color: "secondary.main",
                        backgroundColor: "white",
                        '&:hover': {
                            backgroundColor: "secondary.main",
                            color: "white"
                        }
                    }} >
                        <Group />
                        Groups
                    </Fab> : <Tooltip title={<Typography variant="body1">Groups</Typography>}>
                        <Group />
                    </Tooltip>}
                    {!portrait ? <Fab variant='extended' size="medium" sx={{
                        padding: "0px -3px",
                        width: "80%",
                        height: "4rem",
                        marginTop: ".5rem",
                        marginBottom: '.8rem',
                        fontSize: fontChange ? '.8rem' : "1rem",
                        fontWeight: 900,
                        color: "secondary.main",
                        backgroundColor: "white",
                        '&:hover': {
                            backgroundColor: "secondary.main",
                            color: "white"
                        }
                    }}>
                        <Bookmark />
                        Bookmarks
                    </Fab> :
                        <Tooltip title={<Typography variant="body1">Bookmarks</Typography>}>
                            <Bookmark className="sidebarIcon" />
                        </Tooltip>
                    }
                    {!portrait ? <Fab variant='extended' size="medium" sx={{
                        padding: "0px -3px",
                        width: "80%",
                        height: "4rem",
                        marginTop: ".5rem",
                        marginBottom: '.8rem',
                        fontSize: fontChange ? '.8rem' : "1rem",
                        fontWeight: 900,
                        color: "secondary.main",
                        backgroundColor: "white",
                        '&:hover': {
                            backgroundColor: "secondary.main",
                            color: "white"
                        }
                    }} >
                        <WorkOutline />
                        Jobs
                    </Fab> :
                        <Tooltip title={<Typography variant="body1">Jobs</Typography>}>
                            <WorkOutline />
                        </Tooltip>}
                    {!portrait ? <Fab variant='extended' size="medium" sx={{
                        padding: "0px -3px",
                        width: "80%",
                        height: "4rem",
                        marginTop: ".5rem",
                        marginBottom: '.8rem',
                        fontSize: fontChange ? '.8rem' : "1rem",
                        fontWeight: 900,
                        color: "secondary.main",
                        backgroundColor: "white",
                        '&:hover': {
                            backgroundColor: "secondary.main",
                            color: "white"
                        }
                    }}>
                        <Event />
                        Events
                    </Fab> :
                        <Tooltip title={<Typography variant="body1">Events</Typography>}>
                            <Event />
                        </Tooltip>}
                    {!portrait ? <Fab variant='extended' size="medium" sx={{
                        padding: "0px -3px",
                        width: "80%",
                        height: "4rem",
                        marginTop: ".5rem",
                        marginBottom: '.8rem',
                        fontSize: fontChange ? '.8rem' : "1rem",
                        fontWeight: 900,
                        color: "secondary.main",
                        backgroundColor: "white",
                        '&:hover': {
                            backgroundColor: "secondary.main",
                            color: "white"
                        }
                    }}>
                        <School />
                        Courses
                    </Fab> :
                        <Tooltip title={<Typography variant="body1">Courses</Typography>}>
                            <School />
                        </Tooltip>}

                    {!portrait ? <Fab variant='extended' size="medium" sx={{
                        padding: "0px -3px",
                        width: "80%",
                        height: "4rem",
                        fontSize: fontChange ? '.8rem' : "1rem",
                        fontWeight: 900,
                        marginBottom: "1rem",
                        color: "secondary.main",
                        backgroundColor: "white",
                        background: "white",
                        '&:hover': {
                            backgroundColor: "secondary.main",
                            color: "white"
                        }

                    }} >
                        <Logout sx={{ mr: 1 }} />
                        Logout
                    </Fab> :
                        <Tooltip title={<Typography variant="body1">Logout</Typography>}>
                            <Logout />
                        </Tooltip>}
                </List>
            </Paper >
            </>
    )
}
