import { Avatar, IconButton, Paper, Stack, Typography } from '@mui/material'
import React from 'react'
import useMediaQuery from '@mui/material/useMediaQuery'
import classes from './yourmind.module.css';
import AddIcon from '@mui/icons-material/AddCircleRounded'
import { Image, TagFaces } from '@mui/icons-material'

export const YourMind = () => {
    const portrait = useMediaQuery("(max-width: 1200px)")
    return (
        <Paper
            sx={{
                color: "#fafafa",
                display: "flex",
                flexFlow: "column",
                flexDirection: "column",
                width: !portrait ? "70%" : "90%",
                alignItems: "center",
                marginTop: "2rem",
                boxShadow: "0px 2px 2px 1px grey",
                backgroundColor: "white",
                justifyContent: "space-between",
            }}>
            <Stack direction={"row"} sx={{
                width: "100%",
                justifyContent: "space-between"
            }}>
                <Avatar variant='rounded' sx={{
                    margin: "5px",
                    fontSize: "1.2rem",
                    fontWeight: 900,
                    color: "white",
                    backgroundColor: "primary.main"
                }}>Al</Avatar>
                <Stack sx={{
                    margin: "5px",
                    width: "99%",
                    border: "2px solid grey",
                    borderRadius: "25px",
                    overflow: "hidden",
                    justifyContent: "center",
                    alignItems: "center",
                    height: "2.2rem",
                    paddingX: "1rem"
                }}><textarea cols={1} placeholder={"What's on your mind ?"} className={classes.input} ></textarea></Stack>
            </Stack>
            <hr className={classes.line} />
            <Stack direction={"row"} sx={{
                justifyContent: "space-between",
                width: "100%",
            }}>
                <Stack spacing={.1} sx={{
                    width: "100%",
                    justifyContent: "center",
                    alignItems: "center"
                }}>
                    <IconButton >
                        <AddIcon sx={{
                            fontSize: "2.3rem",
                            fontWeight: 900,
                            color: "primary.main",
                        }} />
                    </IconButton>
                    <Typography sx={{
                        fontSize: "1.2rem",
                        fontWeight: 900,
                        color: "primary.main",
                    }}>
                        Topics
                    </Typography>
                </Stack>
                <Stack sx={{
                    width: "100%",
                    justifyContent: "center",
                    alignItems: "center"
                }}>
                    <IconButton >
                        <Image
                            sx={{
                                fontSize: "2.3rem",
                                fontWeight: 900,
                                color: "primary.main",
                            }}
                        />
                    </IconButton>
                    <Typography sx={{
                        fontSize: "1.2rem",
                        fontWeight: 900,
                        color: "primary.main",
                    }} variant={"body1"}>
                        Photo/Video
                    </Typography>
                </Stack>
                <Stack
                    sx={{
                        width: "100%",
                        justifyContent: "center",
                        alignItems: "center"
                    }}
                >
                    <IconButton>
                        <TagFaces
                            sx={{
                                fontSize: "2.3rem",
                                fontWeight: 900,
                                color: "primary.main",
                            }}
                        />
                    </IconButton>
                    <Typography sx={{
                        fontSize: "1.2rem",
                        fontWeight: 900,
                        color: "primary.main",
                    }} variant={"body1"}>
                        Tag
                    </Typography>
                </Stack>
            </Stack>
        </Paper>
    )
}
