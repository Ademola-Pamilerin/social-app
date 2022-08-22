import { Stack } from '@mui/material'
import React from 'react'
import Post from '../../post/Post'
import { Timeline } from '../../TimeLine/Timeline'
import { YourMind } from '../../yourMind/YourMind'

export const Center = (props) => {
    return (
        <Stack
            sx={{
                flex: 8,
                width: "100%",
                alignItems: "center",
                overflow: "scroll",
                display: "flex",
                flexFlow: "column",
                flexDirection: "column",
                height: "calc(100vh - 5rem)"
            }}>
            <Timeline />
            <YourMind />
            <Stack sx={{
                flex: 8,
                width: "100%",
                alignItems: "center",
            }}>
                <Post portrait={props.portrait} />
                <Post portrait={props.portrait} />
                <Post portrait={props.portrait} />
                <Post portrait={props.portrait} />
            </Stack>
        </Stack>
    )
}
