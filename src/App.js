import './App.css';

import { BrowserRouter as Router } from 'react-router-dom';
import { Route } from 'react-router-dom';
import { Routes } from 'react-router-dom';
import {Feed,VideoDetail,SearchFeed,ChannelDetail,Navbar} from './components';
import { Box } from '@mui/system';
function App() {
  return (
    <Router>
<Box sx={{background:"#ffffff"}}>
<Navbar/>

<Routes>
   <Route path="/" exact element={<Feed />}  />
   <Route path="/video/:id" element={<VideoDetail/>}  />
   <Route path="/search/:searchTerm" element={<SearchFeed/>}  />
   <Route path="/channel/:id" element={<ChannelDetail/>}  />

</Routes>

</Box>

    </Router>

  );
}

export default App;
