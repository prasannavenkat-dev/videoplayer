import React from 'react'
import ChannelCard from './ChannelCard';
import VideoCard from './VideoCard';
import { Stack } from '@mui/system';
const Videos = ({videos,justifyContent,direction}) => {

  if(!(videos?.map)) return "Loading..";
  return (
    <Stack  
    flexWrap="wrap"
    justifyContent={justifyContent}
    gap={2}
    display="flex"
    flexDirection={direction}
    sx={{height:"auto",overflowY:"auto"}}
    >
  
{
    videos.map((item,index)=>{
    
    return <>    
    {item.id.videoId && <VideoCard key ={index}  video={item}/>}
    {item.id.channelId && <ChannelCard key={index} channel={item} />}
    </>})

}
    </Stack>



  )
}

export default Videos; 