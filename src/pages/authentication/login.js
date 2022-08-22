import { Stack, Paper, TextField, InputAdornment, Button, Typography, Card, CardMedia } from "@mui/material"
import { Navigation } from "../../components/navigation/Navigation"
import EyeIconComponent from '@mui/icons-material/RemoveRedEye'
import EyeCancelledComponent from "@mui/icons-material/VisibilityOff";
import { useState } from 'react';
import { Link } from 'react-router-dom'
import { CarouselComponent } from '../../components/UI/carousel/Carousel';
import useMediaQuery from '@mui/material/useMediaQuery'

const LoginHandler = () => {
    const [show, setShow] = useState(false)
    const portrait = useMediaQuery("(max-width: 1450px)")

    console.log(portrait)
    return <>
        <Navigation />

        <Stack sx={{
            width: "100%",
            justifyContent: !portrait ? "space-evenly" : "center",
            flexFlow: portrait ? "column-reverse" : "row",
            height: "calc(100vh - 10vh)",
            overflow: "none"
        }}>

            <Stack sx={{
                width: '100%',
                justifyContent: "center",
                alignItems: "center",
                overflow: "hidden",
                backgroundColor: "red",
                display: portrait ? "none" : "flex"
            }}>
                <Card sx={{
                    width: "60%",
                    height: "98%",
                    maxHeight: "80rem",
                }}>
                    <CardMedia sx={{
                        paddingTop: "auto",
                        objectFit: "contain",
                        width: "100%",
                        height: "100%",
                        // maxHeight:"50rem",
                        display: "flex",
                        flexFlow: "row",
                        overflow: "hidden",

                    }}>
                        <CarouselComponent loop />
                    </CardMedia>
                </Card>
            </Stack>
            <Stack sx={{
                width: "100%",
                justifyContent: portrait ? "flex-start" : "center",
                alignItems: "center",
                marginTop: portrait ? ".9rem" : "0rem",
                marginBottom: portrait ? ".2rem" : "0rem",
                maxHeight: "calc(calc(100vh - 10vh) / 2)"
            }}>

                <Paper sx={{ width: "50%", padding: "10px 10px" }} elevation={5} >
                    <Stack sx={{
                        width: "100%",
                        justifyContent: "center",
                        alignItems: "center"
                    }}>
                        <Typography sx={{
                            fontSize: "1.5rem",
                            fontWeight: "800",
                            color: "primary.main",
                            width: "90%",
                            textAlign: "center"
                        }}>Welcome Back, login to your account</Typography>
                    </Stack>
                    <form style={{ width: "100%", display: "flex", flexFlow: "column", }}>
                        <Stack sx={{
                            flexFlow: "row",
                            justifyContent: "space-between",
                        }}>

                            <Stack sx={{
                                width: "100%",
                                justfiyContent: "center",
                                alignItems: "center"
                            }}>
                                <TextField sx={{
                                    width: "80%",
                                }} required type="text" label="Username or Email" helperText="Ade-akanfe" />
                            </Stack>
                        </Stack>

                        <Stack sx={{
                            flexFlow: "row",
                            justifyContent: "space-between",
                            marginTop: "10px"
                        }}>
                            <Stack sx={{
                                width: "100%",
                                justfiyContent: "center",
                                alignItems: "center"
                            }}>
                                <TextField
                                    sx={{
                                        width: "80%"
                                    }}
                                    label={"password"}
                                    type={show ? "text" : "password"}
                                    InputProps={{
                                        endAdornment: <InputAdornment position="end" style={{ cursor: "pointer" }} onClick={() => setShow(prevShow => !prevShow)}>{show ? <EyeCancelledComponent /> : <EyeIconComponent />}</InputAdornment>
                                    }} />
                            </Stack>
                        </Stack>
                        <Stack sx={{
                            width: "100%",
                            justifyContent: "center",
                            alignItems: "center",
                            margin: "20px 0px 10px 0px"
                        }}>
                            <Button variant={"contained"} size={"large"}>Register</Button>
                        </Stack>
                        <Stack sx={{
                            width: '100%',
                            flexFlow: 'row',
                            justifyContent: "space-between",
                            alignItems: "center"
                        }}>
                            <Stack sx={{
                                width: "100%",
                                justifyContent: "center",
                                alignItems: "center",
                            }}>
                                <Typography sx={{
                                    fontSize: ".8rem",
                                    fontWeight: 800,
                                    color: "primary.main",
                                    cursor: "pointer"
                                }}>Don't have an account yet ?. <Link to="/register">Sign Up</Link> </Typography>
                            </Stack>
                        </Stack>
                    </form>
                </Paper>
            </Stack>
        </Stack>
    </>
}
export default LoginHandler