import { useState, useEffect } from "react";
import { Box, Typography } from "@mui/material";
import { useParams } from "react-router-dom";
import { Videos } from "./";
import { fetchFromAPI } from "../utils/fetchFromAPI";

const SearchFeed = () => {
  const [videos, setVideos] = useState([]);
  const { searchTerm } = useParams();

  useEffect(() => {
    fetchFromAPI(`search?part=snippet&q=${searchTerm}`).then((data) =>
      setVideos(data.items)
    );
  }, [searchTerm]);

  return (
    <>
      <Box p={2} sx={{ overflowY: "auto", height: "90vh", flex: 2 }}>
        <Typography
          varient="h4"
          fontWeight="bold"
          ml={2}
          mb={2}
          sx={{ color: "white" }}
        >
          Search Results for:{" "}
          <span style={{ color: "#1e1e1e" }}>{searchTerm}</span> Videos
        </Typography>
        <Box sx={{ marginTop: "50px" }}>
          <Videos videos={videos} />
        </Box>
      </Box>
    </>
  );
};

export default SearchFeed;
