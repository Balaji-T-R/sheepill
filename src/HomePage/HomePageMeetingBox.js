import React from "react";
import { Grid, Typography } from "@mui/material";
import meetingBox from "../Assets/meetingBox.PNG";
import "@fontsource/lexend";

const HomePageMeetingBox = () => {
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
        <Grid xs={6}>
          <img
            style={{ borderRadius: "10rem", width: "50rem", height: "30rem" }}
            src={meetingBox}
            alt="Meeting Box"
          />
        </Grid>
        <Grid mt={15}>
          <Typography
            variant="h5"
            sx={{ fontFamily: "Lexend", fontWeight: "bold" }}
          >
            Schedule a Meeting and Group Chat
          </Typography>
          <br />
          <Typography variant="h6" sx={{ fontFamily: "Lexend" }}>
            By coming together to share our stories, struggles, and triumphs, we{" "}
            <br />
            not only found solace in each other's company but also gained <br />
            valuable insights and resources to navigate life's challenges.
          </Typography>
        </Grid>
      </Grid>
    </React.Fragment>
  );
};

export default HomePageMeetingBox;
