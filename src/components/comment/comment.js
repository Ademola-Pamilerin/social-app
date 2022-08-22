import { Avatar, Stack, Typography } from "@mui/material"

const Comments = (props) => {
    return <>
        <Stack sx={{
            flexFlow: "row",
            justifyContent: "space-between",
            alignItems: "center"
        }}>
            <Stack sx={{
                fontSize: "1.2rem",
                flexFlow: "row",
                alignItems: 'center',
                justifyContent: "space-evenly",
                width: "50%",
                maxWidth: "15rem"
            }}>
                <Avatar>AD</Avatar>
                <span style={{
                    fontWeight:"800",
                    fontSize:"1.2rem"
                }}>{props.name}</span>
            </Stack>
            <Typography sx={{
                fontSize: ".8rem",
                width: "100%",
                justifyContent: "center",
                textAlign: "right"
            }}>{props.message.length > 120 ? <>{props.message.slice(0, 120)} more ... </> : props.message}</Typography>
        </Stack>
    </>
}
export default Comments