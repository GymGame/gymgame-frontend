import { Box } from "@mui/material";
import React from "react";

const ScrollIcon = () => {
  return (
    <Box
      sx={{
        height: "2.5rem",
        width: "2.5rem",
      }}
    >
      <svg width='100%' height='100%' fill='none'>
        <path fillRule='evenodd' clipRule='evenodd' d='m0 0 19.5 22L39 0h-9.14L19.5 11.688 9.14 0H0z' fill='#454545' />
        <path
          fillRule='evenodd'
          clipRule='evenodd'
          d='m0 18 19.5 22L39 18h-9.14L19.5 29.688 9.14 18H0z'
          fill='#454545'
        />
      </svg>
    </Box>
  );
};

export default ScrollIcon;
