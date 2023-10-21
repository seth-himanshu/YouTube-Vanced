import React from "react";
import { Stack } from "@mui/material";
import { Link } from "react-router-dom";
import SearchBar from "./SearchBar";
import YouTubeIcon from '@mui/icons-material/YouTube';

const NavBar = () => {
  return (
    <Stack
      direction="row"
      alignItems="center"
      p={2}
      sx={{
        position: "sticky",
        background: "#0f0f0f",
        top: 0,
        justifyContent: "space-between",
      }}
    >
      <Link to='/' style={{display: 'flex', alignItems: 'center'}}>
        <YouTubeIcon fontSize="large"  height={45} style={{color: 'white', marginLeft: '20px'}}/>
      </Link>
      <SearchBar/>
    </Stack>
  );
};

export default NavBar;
