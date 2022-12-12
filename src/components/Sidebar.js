import React from 'react';
import { categories } from '../utils/constants';
import { Stack } from '@mui/system';
import { useState } from 'react';
const Sidebar = ({selectedCategory,setSelectedCategory}) => {

  return (
   <Stack
  
   sx={{
    overflowY:"auto",
    height:{sm:"auto",md:"95%"},
    flexDirection:"column"
   }}
   >

{categories.map((category,index)=>{
  return (
    <button className='category-btn' key={index}
       style={{background: selectedCategory===category.name && "#FC1503",
       color:"white"       
       }}
       onClick={()=>setSelectedCategory(category.name)}
     >
      <span
      style={{
       color: selectedCategory===category.name ?  "white":"red" ,
       marginRight:"15px"
      }}      
      >{category.icon}</span>
      
      <span
      style={{
       opactiy: selectedCategory===category.name ? '1' : '0.8'
      }}
      >{category.name}</span>
    </button>
  )
})}
   </Stack>
  )
}

export default Sidebar