import React from 'react'
import { Card, CardContent, CardMedia, Typography } from '@mui/material';
import { Link } from 'react-router-dom';
import { CheckCircle } from '@mui/icons-material';
import {demoVideoUrl,demoChannelUrl} from "../utils/constants"
const VideoCard = ({video:{id:{videoId},snippet}}) => {
  return (
    <Card sx={{ width:{md:"340px",sm:"100%"} }}>
    <Link to={videoId ?`/video/${videoId}` : demoVideoUrl }>
    <CardMedia
      component="img"
      height="140"
      image={snippet.thumbnails.high.url}
      alt={snippet.title}
      sx={{width:{md:"340px",sm:"100%"},height:180}}
    />

    </Link>

    <CardContent sx={{background:"#1e1e1e",height:"106px"}}>
    <Link to={videoId ?`/video/${videoId}` : demoVideoUrl }>
            <Typography variant='subtitle1' color="#FFF" fontWeight="bold">
              {snippet.title.slice(0,60)}...
            </Typography>
      </Link>

      <Link to={snippet.channelId ?`/channel/${snippet.channelId}` : demoChannelUrl }>
            <Typography variant='subtitle2' color="gray">
              {snippet.channelTitle}
              <CheckCircle sx={{fontSize:12,color:"gray",ml:"5px"}} />

            </Typography>
      </Link>
    </CardContent>
  </Card>
  )
}

export default VideoCard