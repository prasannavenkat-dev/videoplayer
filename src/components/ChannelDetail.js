import React, { useEffect, useState } from 'react'
import { Box } from '@mui/system';
import { useParams } from 'react-router-dom';
import ChannelCard from './ChannelCard';
import { fetchFromApi } from '../utils/fetchFromApi';
import Videos from './Videos';
const ChannelDetail = () => {

  const [channel,setChannel]=useState({});
  const [videos,setVideos]=useState([]);
  const {id} = useParams();



  useEffect(() => {
    
  async function callApi(){
    let res1 = await fetchFromApi(`channels?part=snippet&id=${id}`);
 
    setChannel(()=>res1.data?.items[0]);
    let {data:{items}} = await fetchFromApi(`search?channelId=${id}&part=snippet&order=date`);
     setVideos(()=>items);
  }
  callApi();
  
  }, [id])
  
  return (
    <Box
    minHeight="95vh"
  
    >

    <Box sx={{
      height:"300px",
      background: `linear-gradient(90deg, rgba(0,238,247,1) 0%, 
      rgba(206,3,184,1) 100%, rgba(0,212,255,1) 100%)`
    }}/>
{channel.id && <ChannelCard channel={channel} marginTop="-93px" margin="auto" />}

<Box p="2" sx={{
display:"flex" ,
justifyContent:"center",
 alignItems:"center",
 width:"100%",
 p:2
}}  >

<Videos videos={videos} justifyContent="center" direction="row"/>

</Box>

    </Box>
  )
}
 
export default ChannelDetail;