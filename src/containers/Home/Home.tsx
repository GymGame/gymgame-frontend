import React from "react";
import { Container } from "@mui/material";
import PlaySection from "./components/PlaySection";
import Screen from "../../components/Screen";

const Home = () => {
  return (
    <Screen>
      <PlaySection />
      <Container
        sx={{
          height: "100vh",
        }}
      ></Container>
    </Screen>
  );
};

export default Home;
