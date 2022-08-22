import React from 'react'
import { Stack, Typography } from '@mui/material'
import GiftImage from '../../../asset/gift.png'
import { Friend } from '../friend/friend'
export const Right = () => {
    return (
        <Stack spacing={2} sx={{ flex: 3, width: "100%", height: "calc(100vh - 10vh)" }}>
            <Stack sx={{
                flex: 5,
                height: "20vh",
                width: "95%",
                marginTop: "5px",
                marginX: "5px"
            }}>
                <Typography sx={{
                    fontSize: "1.1rem",
                    fontWeight: 800
                }}> Wish Ademola Pamilerin and 5 others Happy birthday</Typography>
                <Stack sx={{
                    width: "100%",
                    paddingX: "2px",
                    overflow: "hidden",
                    height: "100%"
                }}>
                    <img src={GiftImage} alt={"Birthday wish"} style={{
                        width: "100%",
                        height: "100%",
                        objectFit: "contain"
                    }} />
                </Stack>
            </Stack>
            <Stack sx={{
                flex: 7,
                height: "100%"
            }}>
                <Typography sx={{
                    fontSize: "1.1rem",
                    fontWeight: 800,
                    width: "100%",
                    textAlign: "center",
                    borderTop: "1px solid grey",
                    borderBottom: "1px solid grey",
                    height: "auto"
                }}> Active Friends</Typography>
                <Stack sx={{
                    display: "flex",
                    width: "100%",
                    height: "calc(100vh - 57vh)",
                    justifyContent: "flex-start",
                    overflow: "auto",
                    alignItems: "flex-start"
                }}>
                    <Friend />
                    <Friend />
                    <Friend />
                    <Friend />
                    <Friend />
                    <Friend />
                    <Friend />
                    <Friend />
                    <Friend />
                    <Friend />
                    <Friend />
                    <Friend />
                </Stack>
            </Stack>
        </Stack>
    )
}
