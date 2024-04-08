import React from "react";
import Registration from "./Authentication/Registration";
import { Grid } from "@mui/material";

const Module = () => {
  return (
    <Grid
      sx={{
        backgroundColor: "#9e9e9e",
        height: "50rem",
      }}
    >
      <Registration />
    </Grid>
  );
};

export default Module;
