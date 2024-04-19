import React from "react";
import { Grid, Typography } from "@mui/material";
import ChatBox from "../Assets/Chatbox.PNG";
import "@fontsource/lexend";

const HomePageChatBox = () => {
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
        <Grid xs={4.5} mt={20}>
          <Typography
            variant="h5"
            sx={{ fontFamily: "Lexend", fontWeight: "bold" }}
          >
            Communicate, Collaborate & Connect
          </Typography>
          <br />
          <Typography variant="h6" sx={{ fontFamily: "Lexend" }}>
            Stress has become an inevitable part of our lives. Connecting and
            collaborating with others can provide a fresh perspective on our own
            problems and challenges. Sheepill helps you to manage the stress by
            contacting with greater minds.
          </Typography>
        </Grid>
        <Grid>
          <img
            style={{ borderRadius: "10rem", width: "50rem", height: "30rem" }}
            src={ChatBox}
            alt="ChatBox"
          />
        </Grid>
      </Grid>
    </React.Fragment>
  );
};

export default HomePageChatBox;
