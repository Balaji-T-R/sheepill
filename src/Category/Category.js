import React from "react";
import { Grid, Typography } from "@mui/material";

const Category = () => {
  return (
    <React.Fragment>
      <Grid xs={4.2} sx={{ marginLeft: " 5rem" }}>
        <img
          src={SheepillLogo}
          style={{
            width: "6rem",
            height: "4rem",
            borderRadius: "35rem",
            marginTop: "0.5rem",
          }}
          alt="logo"
        />
      </Grid>
    </React.Fragment>
  );
};

export default Category;
