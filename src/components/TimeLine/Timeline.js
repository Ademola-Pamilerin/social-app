import React from 'react'
import classes from './timeline.module.css'
import {
    Typography,
    Box,
    Card,
    CardContent,
    CardMedia,
    List,
    Paper,
    Avatar,
    IconButton
} from '@mui/material'
import Image from '../../asset/2.jpg'
import { AddCircleRounded, EastRounded } from "@mui/icons-material"
import useMediaQuery from '@mui/material/useMediaQuery'

export const Timeline = () => {
    const portrait = useMediaQuery("(max-width: 1200px)")

    return (
        <Paper spacing={.2} direction={"row"} sx={{
            width: "100%",
            height: portrait ? "30vh" : "30vh",
            justifyContent: "center",
            alignItems: "center",
            boxShadow: "none",
            display: "flex",
            maxHeight: "10rem",
            scrollbarWidth: "none",
            marginTop: portrait ? "1rem" : "1rem"
        }}>

            <List sx={{
                width: "95%",
                height: "100%",
                display: "flex",
                justifyContent: "center",
                scrollbarWidth: "none"
            }}>

                <Box
                    className={classes.timeline}
                    sx={{
                        width: "100%",
                        display: "flex",
                        position: "relative",
                        height: "100%",
                        scrollbarWidth: "none"
                    }}>
                    <Card sx={{ borderRadius: "20px", flex: "0 0 25%", width: "100%", height: "100%", margin: "0 .1rem", position: "relative", backgroundColor: "primary.main" }} >
                        <CardMedia component={"img"} height={"200px"} width={"100px"} image={Image} alt={"Ademola"} />
                        <CardContent sx={{
                            position: "relative"
                        }}>
                            <Avatar
                                sx={{
                                    position: "absolute",
                                    top: -85,
                                    left: 50,
                                    background: "white"
                                }} size={"small"}><Typography gutterBottom variant='body2' component={"span"} color={"primary"} sx={{
                                }} >
                                    <IconButton centerRipple>
                                        <AddCircleRounded sx={{
                                            color: "primary.main",
                                            fontSize: "2rem"
                                        }} />
                                    </IconButton>
                                </Typography></Avatar>
                            <Typography gutterBottom variant='body2' component={"span"} color={"white"} sx={{
                                fontSize: "1rem",
                                fontWeight: "800"
                            }} >
                                Create Story
                            </Typography>
                        </CardContent>
                    </Card>
                    <Card sx={{ flex: "0 0 25%", borderRadius: "20px", width: "100%", height: "100%", overflow: "hidden", margin: "0 .1rem", position: "relative" }} >
                        <CardMedia
                            sx={{
                                position: "relative",
                                zIndex: 1
                            }}
                            component={"img"} height={"100%"} width={"100%"} image={Image} alt={"Ademola"} />
                        <CardContent sx={{
                            position: "relative"
                        }}>
                            <Avatar
                                sx={{
                                    position: "absolute",
                                    top: -150,
                                    left: 5,
                                    zIndex: 2,
                                    border: "2px solid blue"
                                }} size={"small"}><Typography gutterBottom variant='body2' component={"span"} color={"primary"} sx={{
                                }} >
                                    AA
                                </Typography></Avatar>
                            <Typography gutterBottom variant='body2' component={"span"} color={"primary"} sx={{
                                width: "80%",
                                fontSize: ".8rem",
                                position: "absolute",
                                top: -50,
                                opacity: 1,
                                fontWeight: "800",
                                zIndex: 2,
                                overflowWrap: "break-word"
                            }} >
                                Adeakanfe Ademola
                            </Typography>
                        </CardContent>
                    </Card>
                    <Card sx={{ flex: "0 0 25%", borderRadius: "20px", width: "100%", height: "100%", overflow: "hidden", margin: "0 .1rem", position: "relative" }} >
                        <CardMedia
                            sx={{
                                position: "relative",
                                zIndex: 1
                            }}
                            component={"img"} height={"100%"} width={"100%"} image={Image} alt={"Ademola"} />
                        <CardContent sx={{
                            position: "relative"
                        }}>
                            <Avatar
                                sx={{
                                    position: "absolute",
                                    top: -150,
                                    left: 5,
                                    zIndex: 2,
                                    border: "2px solid blue"
                                }} size={"small"}><Typography gutterBottom variant='body2' component={"span"} color={"primary"} sx={{
                                }} >
                                    AA
                                </Typography></Avatar>
                            <Typography gutterBottom variant='body2' component={"span"} color={"primary"} sx={{
                                width: "80%",
                                fontSize: ".8rem",
                                position: "absolute",
                                top: -50,
                                opacity: 1,
                                fontWeight: "800",
                                zIndex: 2,
                                overflowWrap: "break-word"
                            }} >
                                Adeakanfe Ademola
                            </Typography>
                        </CardContent>
                    </Card>
                    <Card sx={{ flex: "0 0 25%", borderRadius: "20px", width: "100%", height: "100%", overflow: "hidden", margin: "0 .1rem", position: "relative" }} >
                        <CardMedia
                            sx={{
                                position: "relative",
                                zIndex: 1
                            }}
                            component={"img"} height={"100%"} width={"100%"} image={Image} alt={"Ademola"} />
                        <CardContent sx={{
                            position: "relative"
                        }}>
                            <Avatar
                                sx={{
                                    position: "absolute",
                                    top: -150,
                                    left: 5,
                                    zIndex: 2,
                                    border: "2px solid blue"
                                }} size={"small"}><Typography gutterBottom variant='body2' component={"span"} color={"primary"} sx={{
                                }} >
                                    AA
                                </Typography></Avatar>
                            <Typography gutterBottom variant='body2' component={"span"} color={"primary"} sx={{
                                width: "80%",
                                fontSize: ".8rem",
                                position: "absolute",
                                top: -50,
                                opacity: 1,
                                fontWeight: "800",
                                zIndex: 2,
                                overflowWrap: "break-word"
                            }} >
                                Adeakanfe Ademola
                            </Typography>
                        </CardContent>
                    </Card>
                    <Card sx={{ flex: "0 0 25%", borderRadius: "20px", width: "100%", height: "100%", overflow: "hidden", margin: "0 .1rem", position: "relative" }} >
                        <CardMedia
                            sx={{
                                position: "relative",
                                zIndex: 1
                            }}
                            component={"img"} height={"100%"} width={"100%"} image={Image} alt={"Ademola"} />
                        <CardContent sx={{
                            position: "relative"
                        }}>
                            <Avatar
                                sx={{
                                    position: "absolute",
                                    top: -150,
                                    left: 5,
                                    zIndex: 2,
                                    border: "2px solid blue"
                                }} size={"small"}><Typography gutterBottom variant='body2' component={"span"} color={"primary"} sx={{
                                }} >
                                    AA
                                </Typography></Avatar>
                            <Typography gutterBottom variant='body2' component={"span"} color={"primary"} sx={{
                                width: "80%",
                                fontSize: ".8rem",
                                position: "absolute",
                                top: -50,
                                opacity: 1,
                                fontWeight: "800",
                                zIndex: 2,
                                overflowWrap: "break-word"
                            }} >
                                Adeakanfe Ademola
                            </Typography>
                        </CardContent>
                    </Card>
                    <Card sx={{ flex: "0 0 25%", borderRadius: "20px", overflow: "hidden", width: "100%", height: "100%", margin: "0 .1rem", position: "relative" }} >
                        <CardMedia
                            sx={{
                                position: "relative",
                                zIndex: 1
                            }}
                            component={"img"} height={"100%"} width={"100%"} image={Image} alt={"Ademola"} />
                        <CardContent sx={{
                            position: "relative"
                        }}>
                            <Avatar
                                sx={{
                                    position: "absolute",
                                    top: -150,
                                    left: 5,
                                    zIndex: 2,
                                    border: "2px solid blue"
                                }} size={"small"}><Typography gutterBottom variant='body2' component={"span"} color={"primary"} sx={{
                                }} >
                                    AA
                                </Typography></Avatar>
                            <Typography gutterBottom variant='body2' component={"span"} color={"primary"} sx={{
                                width: "80%",
                                fontSize: ".8rem",
                                position: "absolute",
                                top: -50,
                                opacity: 1,
                                fontWeight: "800",
                                zIndex: 2,
                                overflowWrap: "break-word"
                            }} >
                                Adeakanfe Ademola
                            </Typography>
                        </CardContent>
                    </Card>
                    <Card sx={{ flex: "0 0 25%", borderRadius: "20px", overflow: "hidden", width: "100%", height: "100%", margin: "0 .1rem", position: "relative" }} >
                        <CardMedia
                            sx={{
                                position: "relative",
                                zIndex: 1
                            }}
                            component={"img"} height={"100%"} width={"100%"} image={Image} alt={"Ademola"} />
                        <CardContent sx={{
                            position: "relative"
                        }}>
                            <Avatar
                                sx={{
                                    position: "absolute",
                                    top: -150,
                                    left: 5,
                                    zIndex: 2,
                                    border: "2px solid blue"
                                }} size={"small"}><Typography gutterBottom variant='body2' component={"span"} color={"primary"} sx={{
                                }} >
                                    AA
                                </Typography></Avatar>
                            <Typography gutterBottom variant='body2' component={"span"} color={"primary"} sx={{
                                width: "80%",
                                fontSize: ".8rem",
                                position: "absolute",
                                top: -50,
                                opacity: 1,
                                fontWeight: "800",
                                zIndex: 2,
                                overflowWrap: "break-word"
                            }} >
                                Adeakanfe Ademola
                            </Typography>
                        </CardContent>
                    </Card>
                    <Card sx={{ flex: "0 0 25%", borderRadius: "20px", overflow: "hidden", width: "100%", height: "100%", margin: "0 .1rem", position: "relative" }} >
                        <CardMedia
                            sx={{
                                position: "relative",
                                zIndex: 1
                            }}
                            component={"img"} height={"100%"} width={"100%"} image={Image} alt={"Ademola"} />
                        <CardContent sx={{
                            position: "relative"
                        }}>
                            <Avatar
                                sx={{
                                    position: "absolute",
                                    top: -150,
                                    left: 5,
                                    zIndex: 2,
                                    border: "2px solid blue"
                                }} size={"small"}><Typography gutterBottom variant='body2' component={"span"} color={"primary"} sx={{
                                }} >
                                    AA
                                </Typography></Avatar>
                            <Typography gutterBottom variant='body2' component={"span"} color={"primary"} sx={{
                                width: "80%",
                                fontSize: ".8rem",
                                position: "absolute",
                                top: -50,
                                opacity: 1,
                                fontWeight: "800",
                                zIndex: 2,
                                overflowWrap: "break-word"
                            }} >
                                Adeakanfe Ademola
                            </Typography>
                        </CardContent>
                    </Card>
                    <Card sx={{ flex: "0 0 25%", borderRadius: "20px", overflow: "hidden", width: "100%", height: "100%", margin: "0 .1rem", position: "relative" }} >
                        <CardMedia
                            sx={{
                                position: "relative",
                                zIndex: 1
                            }}
                            component={"img"} height={"100%"} width={"100%"} image={Image} alt={"Ademola"} />
                        <CardContent sx={{
                            position: "relative"
                        }}>
                            <Avatar
                                sx={{
                                    position: "absolute",
                                    top: -150,
                                    left: 5,
                                    zIndex: 2,
                                    border: "2px solid blue"
                                }} size={"small"}><Typography gutterBottom variant='body2' component={"span"} color={"primary"} sx={{
                                }} >
                                    AA
                                </Typography></Avatar>
                            <Typography gutterBottom variant='body2' component={"span"} color={"primary"} sx={{
                                width: "80%",
                                fontSize: ".8rem",
                                position: "absolute",
                                top: -50,
                                opacity: 1,
                                fontWeight: "800",
                                zIndex: 2,
                                overflowWrap: "break-word"
                            }} >
                                Adeakanfe Ademola
                            </Typography>
                        </CardContent>
                    </Card>

                </Box>

            </List>
        </Paper >
    )
}
