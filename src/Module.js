import React from "react";
import HomePage from "./HomePage/HomePage";
import { Grid } from "@mui/material";
import "@fontsource/lexend";

const Module = () => {
  return (
    <Grid sx={{ backgroundColor: "#fcf2e5", fontFamily: "Lexend" }}>
      <HomePage />
    </Grid>
  );
};

export default Module;
