import { LinearProgress, Stack, Typography, TextField, Paper, Button, MenuItem, IconButton } from '@mui/material'
import React, { useState, useRef, useEffect } from 'react'
import ImageIcon from '@mui/icons-material/Image'
import { Navigation } from "../../components/navigation/Navigation";
import classes from './auth.module.css'

export const WelcomePage = () => {
    const [values, setValues] = useState([])
    const hiddenFileInput = useRef(null)

    const [dragactive, setDragActive] = useState(false)
    const [serverImg, setServerImg] = useState();
    const [image, setImage] = useState("");

    const [number, setNumber] = useState(0)
    const [start, setStart] = useState(false)


    //handle drag event
    const handleDrag = (e) => {
        e.preventDefault()
        e.stopPropagation()
        if (e.type === "dragenter" || e.type === "dragover") {
            setDragActive(true)
        } else if (e.type === "dragleave") {
            setDragActive(false)
        }
    }

    //triggers file upload
    const handleDrop = e => {
        e.preventDefault();
        e.stopPropagation();
        setDragActive(false)
        if (e.dataTransfer.files && e.dataTransfer.files[0]) {
            e.target.files = e.dataTransfer.files
            imageChangeHandler(e)
        }
    }



    const handleChange = (event) => {
        const res = event.target.value
        setValues(typeof (res) === 'string' ? res.split(",") : res)
    }
    const handleImageClick = (event) => {
        event.preventDefault();
        hiddenFileInput.current.click();
    };
    const imageChangeHandler = (event) => {
        if (window.FileReader) {
            const fileUploaded = event.target.files[0];
            const reader = new FileReader();
            if (fileUploaded && fileUploaded.type.match("image.*")) {
                reader.readAsDataURL(fileUploaded);
            } else {
                // setImage(image);
                return 0;
            }
            reader.onloadstart = () => {
                setStart(true)
            }
            reader.onloadend = () => {
                setStart(false)
                setImage(reader.result);
            }
            setServerImg(fileUploaded);
        }
    }


    useEffect(() => {
        let interval = null;
        if (start) {
            interval = setInterval(() => {
                if (number === 90) {
                    setNumber(prev => prev)
                } else {
                    setNumber(prev => prev + 5)
                }
            }, 100)
        }
        return () => {
            if (interval !== null) {
                clearInterval(interval)
            }
        }
    }, [number, start])

    console.log(image)


    return (
        <>
            <Navigation />
            <Stack sx={{
                flexFlow: "row",
                width: "100%",
                justifyContent: "space-between"
            }} className={"ade"}>
                <Stack sx={{
                    width: "100%",
                    justifyContent: "space-evenly",
                    flexFlow: "row-reverse",
                }}>

                    <Stack sx={{
                        height: "calc(100vh - 10vh)",
                        width: "90%",
                        justifyContent: "center",
                        alignItems: "center",
                    }}>

                        <Paper sx={{ width: "80%", padding: "10px 10px" }} elevation={5} >
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
                                }}> Let's know more about you</Typography>
                            </Stack>
                            <form style={{ width: "100%", display: "flex", flexFlow: "column", marginTop: "1rem" }}>
                                <Stack sx={{
                                    flexFlow: "row",
                                    justifyContent: "space-between",
                                }}>

                                    <Stack sx={{
                                        width: "100%",
                                        justfiyContent: "center",
                                        alignItems: "center",
                                        marginTop: "10px",
                                    }}>
                                        <TextField sx={{
                                            width: "80%"
                                        }} required type="text" label="Username" helperText="Ade-akanfe" />
                                    </Stack>
                                </Stack>
                                <Stack sx={{
                                    flexFlow: "row",
                                    justifyContent: "space-between",
                                }}>

                                    <Stack sx={{
                                        width: "100%",
                                        justfiyContent: "center",
                                        alignItems: "center",
                                        marginTop: "10px"
                                    }}>
                                        <TextField sx={{
                                            width: "80%"
                                        }} required type="text" label="About You" helperText="Ade-akanfe" />
                                    </Stack>
                                </Stack>
                                <Stack sx={{
                                    flexFlow: "row",
                                    justifyContent: "space-between",
                                }}>

                                    <Stack sx={{
                                        width: "100%",
                                        justfiyContent: "center",
                                        alignItems: "center",
                                        marginTop: "10px"
                                    }}>
                                        <TextField
                                            label={"Select Topics"}
                                            sx={{
                                                width: "80%"
                                            }}
                                            select
                                            value={values}
                                            onChange={handleChange}
                                            SelectProps={{
                                                multiple: true
                                            }}
                                            helperText={"Select topics to follow"}

                                        >
                                            <MenuItem value="IN">India</MenuItem>
                                            <MenuItem value="NI">Nigeria</MenuItem>
                                            <MenuItem value="TO">Togo</MenuItem>
                                            <MenuItem value="CH">China</MenuItem>
                                        </TextField>
                                    </Stack>
                                </Stack>



                                <Stack sx={{
                                    width: "100%",
                                    justifyContent: "center",
                                    alignItems: "center",
                                    margin: "20px 0px 10px 0px"
                                }}>
                                    <Button variant={"contained"} size={"large"}>Next</Button>
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
                                        }}>Don't have an account yet ?. Sign Up </Typography>
                                    </Stack>
                                </Stack>
                            </form>
                        </Paper>
                    </Stack>
                </Stack>



                <Stack sx={{
                    width: "100%",
                    height: "calc(100vh - 20vh)",
                    alignItems: "center",
                    justifyContent: "center"
                }}>

                    <Paper elevation={5} sx={{
                        backgroundColor: "inherit",
                        width: "80%",
                        outline: "none",
                        border: "none",
                        height: '90%'
                    }} >
                        <IconButton disableRipple sx={{
                            backgroundColor: "inherit",
                            width: "100%",
                            outline: "none",
                            border: "none",
                            height: '100%'
                        }}
                            onClick={handleImageClick}
                            onDragLeave={handleDrag}
                            onDragOver={handleDrag}
                            onDrop={handleDrop}
                            onDragEnter={handleDrag}
                        >
                            {image && <img
                                alt={"testing"}
                                src={image}
                                style={{
                                    width: "60%",
                                    height: "100%",
                                    objectFit: "cover"
                                }} />}
                            {!image && <>
                                <ImageIcon sx={{
                                    fontSize: "5rem",
                                    color: "primary.main",
                                    fontWeight: "800"
                                }} />
                                <Typography sx={{
                                    fontSize: "1.2rem"
                                }}>
                                    Click to add or Drop a picture instead
                                </Typography>
                            </>}
                        </IconButton>
                        <input
                            style={{
                                display: "none"
                            }}
                            type={"file"}
                            accept={"image/*"}
                            onChange={(event) => imageChangeHandler(event)}
                            ref={hiddenFileInput}
                            name={"image"}
                        />
                    </Paper>
                </Stack>

            </Stack>

            <Stack sx={{
                width: "100%",
                height: "calc(100vh - 20vh)",
                flexFlow: "row",
                justifyContent: "center",
                alignItems: "center",
            }}>

                <Stack
                    className={classes.imgCover}
                >
                    <div className={classes.imgCoverMain}>
                        {image ? <Paper elevation={5} sx={{
                            height: "80%",
                            width: "auto",
                            position: "relative"
                        }}
                            onClick={handleImageClick}
                            onDragLeave={handleDrag}
                            onDragOver={handleDrag}
                            onDrop={handleDrop}
                            onDragEnter={handleDrag}>
                            <img src={image} alt="12" className={classes.image} />
                            <ImageIcon sx={{
                                fontSize: "5rem",
                                color: "primary.main",
                                fontWeight: "800",
                                position: "absolute",
                                zIndex: "20",
                                top:"50%",
                                left:"25%"
                            }} />
                            <Typography sx={{
                                fontSize: "1.2rem"
                            }}>
                                Click to add or Drop a picture instead
                            </Typography>
                        </Paper> :
                            <><Paper elevation={5} sx={{
                                height: "60%",
                                width: "auto",
                                // maxWidth: '60rem',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                padding: '0 1rem'
                            }}
                                onClick={handleImageClick}
                                onDragLeave={handleDrag}
                                onDragOver={handleDrag}
                                onDrop={handleDrop}
                                onDragEnter={handleDrag}
                            >
                                <ImageIcon sx={{
                                    fontSize: "5rem",
                                    color: "primary.main",
                                    fontWeight: "800"
                                }} />
                                <Typography sx={{
                                    fontSize: "1.2rem"
                                }}>
                                    Click to add or Drop a picture instead
                                </Typography>
                            </Paper>
                            </>
                        }
                    </div>
                </Stack>
            </Stack>
        </>
    )
}
