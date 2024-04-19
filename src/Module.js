import React from "react";
import HomePage from "./HomePage/HomePage";
import { Grid } from "@mui/material";
import "@fontsource/lexend";

const Module = () => {
  return (
    <Grid sx={{ backgroundColor: "#fcf2e5", fontFamily: "Lexend" }}>
      <HomePage />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </Grid>
  );
};

export default Module;
