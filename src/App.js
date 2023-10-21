import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import {Box} from '@mui/material';
import {NavBar, ChannelDetail, Feed, SearchFeed, VideoDetail} from './Components';

const App = () => {
  return (
    <Router>
      <Box sx={{backgroundColor: '#0f0f0f'}}>
        <NavBar/>
        <Routes>
          <Route exact path='/' element={ <Feed/> } />
          <Route path='/video/:id' element={ <VideoDetail/> } />
          <Route path='/channel/:id' element={ <ChannelDetail/> } />
          <Route path='/search/:searchTerm' element={ <SearchFeed/> } />
        </Routes>
      </Box>
    </Router>
  )
}

export default App