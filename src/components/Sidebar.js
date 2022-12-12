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
    <button className='category-btn' key={`${index}_category`}
       style={{background: selectedCategory===category.name && "#f2f2f2",
  fontWeight: selectedCategory===category.name ? 900 : 400

       }}
       onClick={()=>setSelectedCategory(category.name)}
     >
      <span
      style={{
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