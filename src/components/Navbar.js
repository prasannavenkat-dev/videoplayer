import React, { useState } from "react";
import { Stack } from "@mui/system";
import  logo  from "../assets/images/logo.png";
import { Link, useNavigate } from "react-router-dom";
import { Paper } from "@mui/material";
import { IconButton } from "@mui/material";
import { Search } from "@mui/icons-material";

const Navbar = () => {
  const[searchTerm,setSearchTerm] = useState("");
const navigate = useNavigate();
  function handleSubmit(e){
    e.preventDefault();         
    navigate(`/search/${searchTerm}`);
    setSearchTerm("");

  } 

  return (
    <Stack direction="row" 
    alignItems="center"
     justifyContent="space-between"
     sx={{
      position:"sticky",
      background:"#ffffff"
     }}
     p={2}
     
     >
      <Link to="/" sx={{ display: "flex", justifyContent: "center" }}>
        <img className="logo" src={logo} alt="logo"  />
      </Link>

      <Paper
        component="form"
        onSubmit={handleSubmit} 
        sx={{
          borderRadius: 20,
          border: "1px solid #e3e3e3",
          mr: { sm: 5 },
          pl: 2,
          boxShadow: "none",
        }}
      >
        <input
          className="search-bar"
          placeholder="search item.."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)} 
          
        />
        <IconButton type="submit" sx={{ p: "10px", color: "#0f0f0f" }} >
          <Search />
        </IconButton>
      </Paper>
    </Stack>
  );
};

export default Navbar;
