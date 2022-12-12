import { Typography } from '@mui/material'
import { Box, Stack } from '@mui/system'
import React from 'react'
import Sidebar from './Sidebar'
import { fetchFromApi } from '../utils/fetchFromApi'
import { useEffect, useState } from 'react'
import Videos from './Videos'
import VideoCard from './VideoCard'
import ChannelCard from './ChannelCard'
import { useParams } from 'react-router-dom'
const SearchFeed = () => {

  const [videos, setVideos] = useState([]);
  const {searchTerm} = useParams();



  useEffect(() => {
    async function apiCall() {
      const { data: { items } } = await fetchFromApi(`search?part=snippet&q=${searchTerm}`);
      setVideos(() => {
        return items;
      });

    }
    apiCall();
  }, [searchTerm])

  return (

    <Box
      p={2}
      sx={{
        overflowY: "auto",
        height: "90vh",
        flex: 2
      }}
    >
      <Typography variant="h4" fontWeight="bold" sx={{ color: "white" }} mb={3}>
        Search Results For <span style={{ color: "#FC1503" }}>
          {searchTerm} </span>
      </Typography>
      <Videos videos={videos} justifyContent="center" direction="row" />
    </Box>

  )
}

export default SearchFeed;