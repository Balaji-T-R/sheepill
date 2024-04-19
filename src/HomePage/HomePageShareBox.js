import React from "react";
import { Grid, Typography } from "@mui/material";
import ShareIdeasBox from "../Assets/ShareIdeasBox.PNG";
import "@fontsource/lexend";

const HomePageShareBox = () => {
  return (
    <React.Fragment>
      <Grid
        container
        sx={{
          display: "flex",
          flexDirection: "row",
          flexGrow: 2,
          flexShrink: 1,
          justifyContent: "center",
        }}
      >
        <Grid xs={4.5} mt={10}>
          <Typography
            variant="h5"
            sx={{ fontFamily: "Lexend", fontWeight: "bold" }}
          >
            Share Ideas to reduce Depression
          </Typography>
          <br />
          <Typography variant="h6" sx={{ fontFamily: "Lexend" }}>
            Depression is a complex and challenging condition that affects{" "}
            <br />
            millions worldwide. Social support is crucial in combating
            depression. <br /> Even small social interactions can have a
            significant impact on mood. <br />
            Sheepill helps in alleviate the depression among individuals.
          </Typography>
        </Grid>
        <Grid>
          <img
            style={{ borderRadius: "10rem", width: "50rem", height: "30rem" }}
            src={ShareIdeasBox}
            alt="ChatBox"
          />
        </Grid>
      </Grid>
    </React.Fragment>
  );
};

export default HomePageShareBox;
