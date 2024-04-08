import React from "react";
import { Box, Button, Grid } from "@mui/material";
import Shepill_Logo from "../Assets/Shepill_Logo.png";

const Registration = () => {
  return (
    <Box>
      <Grid container sx={{ display: "flex", flexDirection: "row" }}>
        <Grid xs={8} sx={{ marginLeft: " 5rem" }}>
          <img
            src={Shepill_Logo}
            style={{
              width: "10rem",
              height: "6rem",
              borderRadius: "35rem",
              marginTop: "1rem",
            }}
            alt="logo"
          />
        </Grid>
        <Grid sx={{ marginTop: "2.5rem" }}>
          <Button sx={{ width: "8rem", height: "2.5rem" }}>Sign In</Button>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Registration;
