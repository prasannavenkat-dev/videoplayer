import { CheckCircle } from '@mui/icons-material';
import { Stack, Typography } from '@mui/material';
import { Box } from '@mui/system'
import React, { useEffect, useState } from 'react'
import ReactPlayer from 'react-player'
import { useParams } from 'react-router-dom';
import { fetchFromApi } from '../utils/fetchFromApi';
import Videos from './Videos';
const VideoDetail = () => {
  const [videoDetail, setVideoDetail] = useState([]);
  const [videos, setVideos] = useState([]);

  const { id } = useParams();

  useEffect(() => {

    async function callApi() {

      let { data: { items } } = await fetchFromApi(`videos?snippet=part,statistics&id=${id}`);
      setVideoDetail(() => items[0])

      let res2 = await fetchFromApi(`search?part=snippet&relatedToVideoId=${id}&type=video`);
      setVideos(() => res2.data.items);

    }
    callApi();

  }, [id])

  return (
    <Box minHeight="98vh">

      <Stack sx={{ flexDirection: { sm: "column", md: "row" } }} py={2}>

        <Box flex={1}>
          <Box sx={{ width: "100%", top: "86px", position: "sticky" }}>
            <ReactPlayer width="100%" height="70vh" className="react-player" url={`https://www.youtube.com/watch?v=${id}`} controls />

            <Typography variant="h5" fontWeight="bold" p={2} sx={{ color: "#fff" }}>
              {videoDetail?.snippet?.title}
            </Typography>

            <Stack sx={{ display: "flex", justifyContent: "space-between", flexDirection: "row", color: "#fff" }} py={1} px={2}>
              <Typography variant={{ sm: "subtitle1", md: "h6" }} sx={{ color: "#fff" }}>
                {videoDetail?.snippet?.channelTitle}
                <CheckCircle sx={{ fontSize: "12px", color: "gray", ml: "5px" }} />

              </Typography>
              <Stack gap="20px" direction="row" alignItems="center">
                <Typography variant="body1" sx={{ opacity: 0.7 }}>
                  {parseInt(videoDetail?.statistics?.viewCount).toLocaleString()} views

                </Typography>


                <Typography variant="body1" sx={{ opacity: 0.7 }}>
                  {parseInt(videoDetail?.statistics?.likeCount).toLocaleString()} likes

                </Typography>

              </Stack>
            </Stack>
          </Box>
        </Box>

        {/* <Box px={2} py={{md:1,xs:5}} justifyContent="center" alignItems="center" >

        { videos &&  <Videos videos={videos} justifyContent="center" direction="column" />}
        
        </Box> */}
        

<Videos videos={videos} justifyContent="center" direction="column" alignItems="center" />



      </Stack>
    </Box>
  )
}

export default VideoDetail