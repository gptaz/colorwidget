"use client";
import { Box, Grid2 } from "@mui/material";
import Image from "next/image";
import { useEffect, useState } from "react";

export default function Home() {
  // const [count,setCount] = useState(0);

  const [components,setComponents] = useState([]);
  // const colorPanel = [];
  // const genColor = () => {
  //   colorPanel = new Array(300).fill(true).map((_, i) => {
  //     const r = Math.floor(Math.random() * 256);
  //     const g = Math.floor(Math.random() * 256);
  //     const b = Math.floor(Math.random() * 256);
  //     return { r, g, b };
  //   });
  // };

  const genColor = () => {
    const com = new Array(365).fill(true).map((_, i) => {
      const r = Math.floor(Math.random() * 256);
      const g = Math.floor(Math.random() * 256);
      const b = Math.floor(Math.random() * 256);
      const obj = (
        <Box sx={{
          width: 60,
          height: 60,
          backgroundColor: `rgb(${r}, ${g}, ${b})`,
        }}>

        </Box>
      );
        
      return obj;
    });
    return com;
  };
  useEffect(()=>{
    const timerId = setInterval(() => {
      // setCount((prev) => prev + 1); // Decrease time by 1 second
      setComponents(genColor());
    }, 1000);
    // genColor();
    return () => clearInterval(timerId);
  },[components]);
  // for(let i = 0; i < 300; i++){
  //   components.push()
  // }
  return (
    <Grid2 container spacing={1}
      sx={{
        width: "100vw",
        height: "100vh",
        borderRadius: 1,
      }}
    >
      {components}
    </Grid2>
  );
}
