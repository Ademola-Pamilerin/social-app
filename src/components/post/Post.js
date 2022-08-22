import { Avatar, Card, CardContent, CardMedia, IconButton, Stack, Typography } from '@mui/material'
import React from 'react'
import Image from '../../asset/10.jpg';
import MoreHoriz from '@mui/icons-material/MoreHoriz'
import SaveIcon from '@mui/icons-material/SaveAlt';
import LoveIcon from '@mui/icons-material/Favorite'
import ReshareIcon from '@mui/icons-material/Share'
import Comments from '../comment/comment';
import { CarouselComponent } from '../UI/carousel/Carousel';
import classes from './post.module.css'


const data = [
  { type: "image", path: Image },
  { type: "image", path: Image },
  { type: "image", path: Image },
  { type: "image", path: Image },
  { type: "image", path: Image },
  { type: "image", path: Image },
  { type: "image", path: Image },
]
const Post = (props) => {


  let caption = `
  Ademola is my name what about you and what is the color of nigeria flag
  how many colors do we have in nigeria flkag and what do you hava to say about nigeria flag and 
  the natigerian national anthem
  `

  console.log(props.portrait)
  return (<Card elevation={5} className={classes.Card} sx={{
    width: "80%",
    // height: "100%",
    marginTop: "10px",
    minWidth: "20rem",
    maxWidth: "50rem",
    '&:hover': {
      boxShadow: ".4 .4px .4px 10px rgba(0,0,0,0.3)"
    },
  }} onDoubleClick={() => console.log("double clicked")} onDoubleClickCapture={() => console.log("double clicked captured")}>
    <CardContent sx={{
      display: "flex",
      flexFlow: "row",
      justifyContent: "space-between"
    }}>
      <Stack style={{
        flexFlow: "row",
        alignItems: "center",
        // padding: "10px"
      }}>
        <Avatar>Ad</Avatar>
        <Stack spacing={-1} sx={{
          justifyContent: "center",
          alignItems: "center"
        }}>
          <Typography>Adeakanfe Ademola</Typography>
          <Typography>Yesterday at 21:34</Typography>
        </Stack>
      </Stack>
      <Stack sx={{ height: "100%", justifyContent: "center", alignItems: "center" }}>
        <IconButton ><MoreHoriz sx={{ fontSize: "2rem", fontWeight: "bold" }} /></IconButton>
      </Stack>
    </CardContent>
    <Stack sx={{
      width: "100%",
      height: "80%",
      maxHeight: "80rem",
    }} className={classes.image_container}>
      <CardMedia sx={{
        paddingTop: "auto",
        objectFit: "contain",
        width: "100%",
        height: "100%",
        // maxHeight:"50rem",
        display: "flex",
        flexFlow: "row",
        overflow: "hidden",

      }} className={classes.image}  >
        <CarouselComponent />
      </CardMedia>
    </Stack>
    <CardContent sx={{
      width: "100%",
      display: "flex",
      flexFlow: "column",
      paddingY: 0
    }}>
      <IconButton
        disableRipple
        sx={{
          width: "100%",
          justifyContent: "left",
          display: "flex",
          marginLeft: "-20px"
        }} >
        <LoveIcon sx={{
          marginX: '10px'
        }} />
        <ReshareIcon sx={{
          marginX: '10px'
        }} />
        <SaveIcon sx={{
          marginX: '10px'
        }} />
      </IconButton>
      <Typography>{caption.length > 120 ? <>{caption.slice(0, 120)} more ... </> : caption}</Typography>
    </CardContent>
    <CardContent>
      <Comments name={"Ade-akanfe Ademol"} message={"Ademola Pamilerin is my name what baoisu"} />
      <Typography sx={{
        justifyContent: "right",
        width: "100%",
        textAlign: "right",
        marginTop: "-5px"
      }}>view comment</Typography>
    </CardContent>
  </Card >)
}
export default Post
// {
//   data.map((el, i) => (
//     <img key={i} src={el.path} alt={"Ademola"} style={{
//       height: "100%",
//       width: "100%",
//     }} />))
// }