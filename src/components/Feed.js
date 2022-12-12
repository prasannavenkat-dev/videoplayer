import { Typography } from '@mui/material'
import { Box, Stack } from '@mui/system'
import React from 'react'
import Sidebar from './Sidebar'
import { fetchFromApi } from '../utils/fetchFromApi'
import { useEffect,useState } from 'react'
import Videos from './Videos'
import VideoCard from './VideoCard'
import ChannelCard from './ChannelCard'
const Feed = () => {

  const[selectedCategory,setSelectedCategory] = useState("New");

  const [videos,setVideos]=useState([]);



  useEffect(() => {
async function apiCall(){
  const {data:{items}} = await fetchFromApi(`search?part=snippet&q=${selectedCategory}`);
setVideos(()=>{
  return items;
});
  
}
  apiCall();
  }, [selectedCategory])
  
  return (
    <Stack
      sx={{ flexDirection: { sm: "column", md: "row" } }}
    >
      <Box
        sx={{
          height: { sm: "auto", md: "92vh" },
          px: { sm: 0, md: 2 },
          borderRight: "1px solid #3d3d3d"
        }}
      >

        <Sidebar selectedCategory={selectedCategory} setSelectedCategory={setSelectedCategory}/>


        <Typography variant='body2' className="copyright" sx={{ color: "#fff", mt: 1.5 }}>
          copyright youtube.pvt.ltd
        </Typography>

      </Box>


      <Box
      p={2}
      sx={{
overflowY:"auto",
height:"90vh",
flex:2
      }}
      >
<Typography variant="h4" fontWeight="bold" sx={{color:"white"}} mb={3}>
 {selectedCategory} <span style={{color:"#FC1503"}}>
 Videos</span>
</Typography>

<Box  sx={{
display:"flex" ,
justifyContent:"start",
 overflowY:"auto"
}}  >

<Videos videos={videos} justifyContent="start" direction="row"/>

</Box>

{/* <Videos videos={videos} justifyContent="start" direction="column" /> */}

      </Box>
    </Stack>
  )
}

export default Feed