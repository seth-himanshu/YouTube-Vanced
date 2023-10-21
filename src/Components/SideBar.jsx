import React from "react";
import { Stack } from "@mui/material";
import { categories } from "../utils/constants";

const SideBar = ({selectedCategory, setSelectedCategory}) => {
  return (
    <Stack
      direction="row"
      sx={{
        overflowY: "auto",
        height: { sx: "auto", md: "95%" },
        flexDirection: { md: "column" },
      }}
    >
      {categories.map((category) => {
        return (
          <button className="category-btn" onClick={()=> setSelectedCategory(category.name)} style={{
            background: category.name === selectedCategory && '#1e1e1e',
            color: 'white', margin: "0 0 10px 10px"
          }}
          key={category.name}
          >
            <span style={{color: category.name === selectedCategory ? "white" : "#6b6969",marginRight: "20px"}}>{category.icon}</span>
            <span style={{opacity: category.name === selectedCategory? '1': '0.8', marginRight: "20px"}}>{category.name}</span>
          </button>
        );
      })}
    </Stack>
  );
};

export default SideBar;
