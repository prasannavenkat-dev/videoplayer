import { CheckCircle } from '@mui/icons-material'
import { CardContent, CardMedia, Typography } from '@mui/material'
import { Box } from '@mui/system'
import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import {demoChannelUrl} from "../utils/constants"

const ChannelCard = ({channel,marginTop,margin}) => {


  return (
    <Box 
    sx={{boxShadow:"none",
    borderRadius:"20px",
  
    display:"flex",
    justifyContent:"center",
    alignItems:"center",
    width:{xs:"356px",md:"320px"},

    height:"326px",
    margin,
    marginTop

    
    }}>

    <Link to={(channel?.id?.channelId) ? `/channel/${channel?.id?.channelId}` : demoChannelUrl}>

    <CardContent sx={{display:"flex",flexDirection:'column',justifyContent:'center',color:"#fff"}}>
    <CardMedia
   component="img"
      image={channel?.snippet?.thumbnails?.high?.url}
      alt={channel?.snippet?.title}
      sx={{width:"180px",height:"180px",borderRadius:"50%",border:"1px solid #e3e3e3",mb:2}}


    />
      <Typography variant="h6">

      {channel?.snippet?.title}
      <CheckCircle 
        sx={{
          fontSize:14,
          ml:"5px",
        color:"gray"

        }}
      />

      </Typography>


      {

        channel?.statistics?.subscriberCount &&
        <Typography variant="h6">
        {+(channel?.statistics?.subscriberCount).toLocaleString()} subscribers
        </Typography>
      }

      </CardContent>
    </Link>
    </Box>

  )
}

export default ChannelCard