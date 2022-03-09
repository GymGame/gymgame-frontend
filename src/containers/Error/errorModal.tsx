import React from "react";
import { Box } from "@mui/material";
import { useAppSelector } from "../../hooks";

const ErrorModal = () => {
  const state = useAppSelector((state) => state.globalErrors);

  if (state.error.type) {
    return (
      <Box
        sx={{
          position: "absolute",
          top: "50%",
          left: "50%",
          width: 100,
          height: 100,
          backgroundColor: "black",
          color: "white",
        }}
      >
        <div>Error: {state.error.message}</div>
      </Box>
    );
  }
  return <></>;
};

export default ErrorModal;
