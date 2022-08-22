import { Stack, Paper, TextField, InputAdornment, Button, Typography, Tooltip, IconButton } from "@mui/material"
import { Navigation } from "../../components/navigation/Navigation"
import EyeIconComponent from '@mui/icons-material/RemoveRedEye'
import EyeCancelledComponent from "@mui/icons-material/VisibilityOff";
import GoggleIcon from '@mui/icons-material/Google'
import { Facebook } from "@mui/icons-material";
import { useState } from 'react';
import { Link } from "react-router-dom";


const Auth = () => {
    const [show, setShow] = useState(false)
    return <>
        <Navigation />
        <Stack sx={{
            height: "calc(100vh - 10vh)",
            width: "100%",
            justifyContent: "center",
            alignItems: "center"
        }}>

            <Paper sx={{ width: "60%", padding: "10px 10px" }} elevation={5} >
                <Stack sx={{
                    width: "100%",
                    justifyContent: "center",
                    alignItems: "center"
                }}>
                    <Typography sx={{
                        fontSize: "2rem",
                        fontWeight: "800",
                        color: "primary.main"
                    }}>Create a new Account</Typography>
                </Stack>
                <form style={{ width: "100%", display: "flex", flexFlow: "column", }}>
                    <Stack sx={{
                        flexFlow: "row",
                        justifyContent: "space-between",
                    }}>
                        <Stack sx={{
                            width: "100%", justfiyContent: "center",
                            alignItems: "center"
                        }}>
                            <TextField sx={{
                                width: "80%"
                            }} required type="text" label="First Name" helperText="Ademola" />
                        </Stack>
                        <Stack sx={{
                            width: "100%",
                            justfiyContent: "center",
                            alignItems: "center"
                        }}>
                            <TextField sx={{
                                width: "80%"
                            }} required type="text" label="Last Name" helperText="Ade-akanfe" />
                        </Stack>
                    </Stack>

                    <Stack sx={{
                        flexFlow: "row",
                        justifyContent: "space-between",
                        marginTop: "10px"
                    }}>
                        <Stack sx={{
                            width: "100%", justfiyContent: "center",
                            alignItems: "center"
                        }}>
                            <TextField sx={{
                                width: "80%"
                            }} required type="text" label="Email" />
                        </Stack>
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
                            margin: "20px 0px 10px 0px",
                            flexFlow: 'row',
                        }}>
                            <Tooltip
                                arrow
                                title={<Typography variant={"h6"} sx={{
                                    width: "100%",
                                    display: "flex",
                                    color: "primary.main",
                                    fontSize: ".7rem",
                                    fontWeight: 800
                                }}>Continue with Google</Typography>} placement="left">
                                <IconButton disableRipple><GoggleIcon sx={{
                                    color: "primary.main",
                                    fontSize: "2rem",
                                    fontWeight: 800,
                                }} /></IconButton>
                            </Tooltip>
                            <Tooltip
                                arrow
                                title={<Typography variant={"h6"} sx={{
                                    width: "100%",
                                    display: "flex",
                                    color: "primary.main",
                                    fontSize: ".7rem",
                                    fontWeight: 800
                                }}>Continue with Facebook</Typography>} placement="right">
                                <IconButton disableRipple><Facebook
                                    sx={{
                                        color: "primary.main",
                                        fontSize: "2rem",
                                        fontWeight: 800,
                                    }} /></IconButton>
                            </Tooltip>
                        </Stack>
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
                            }}>Already have an account. <Link to={"/login"}> Log in</Link> </Typography>
                        </Stack>
                    </Stack>
                </form>
            </Paper>
        </Stack>
    </>
}
export default Auth