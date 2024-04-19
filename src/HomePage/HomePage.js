import React from "react";
import { Box, Grid, Typography } from "@mui/material";
import SheepillLogo from "../Assets/ShepillLogo.PNG";
import "@fontsource/lexend";
import mentalRelief from "../Assets/mentalRelief.jpg";
import HomePageCard from "./HomePageCard";
import HomePageChatBox from "./HomePageChatBox";
import HomePageMeetingBox from "./HomePageMeetingBox";
import HomePageShareBox from "./HomePageShareBox";
import HomePageFooter from "./HomePageFooter";

const HomePage = () => {
  const homePageNavSyle = {
    marginTop: "2rem",
  };

  return (
    <Box>
      <Grid
        container
        sx={{
          display: "flex",
          flexDirection: "row",
          flexGrow: 2,
          flexShrink: 1,
        }}
      >
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
        <Grid xs={4.5} sx={homePageNavSyle}>
          <Typography
            variant="h5"
            sx={{
              fontWeight: "bold",
              fontFamily: "Lexend",
              cursor: "pointer",
            }}
          >
            Social Network for Mental Health
          </Typography>
        </Grid>
        <Grid xs={0.7} sx={homePageNavSyle}>
          <Typography
            variant="h6"
            sx={{
              fontWeight: "bold",
              fontFamily: "Lexend",
              cursor: "pointer",
            }}
          >
            About
          </Typography>
        </Grid>
        <Grid xs={0.7} sx={homePageNavSyle}>
          <Typography
            variant="h6"
            sx={{
              fontWeight: "bold",
              fontFamily: " Lexend",
              cursor: "pointer",
            }}
          >
            Connect
          </Typography>
        </Grid>
        <Grid sx={homePageNavSyle}>
          <Typography
            variant="h6"
            sx={{
              fontWeight: "bold",
              fontFamily: " Lexend",
              cursor: "pointer",
            }}
          >
            Contact Us
          </Typography>
        </Grid>
      </Grid>
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
        <Grid sx={{ marginTop: "2rem" }}>
          <Typography
            variant="h4"
            sx={{ fontWeight: "bold", fontFamily: " Lexend" }}
          >
            Made for People. &nbsp;
          </Typography>
        </Grid>
        <Grid sx={{ marginTop: "2rem" }}>
          <Typography
            variant="h4"
            sx={{
              fontWeight: "bold",
              fontFamily: " Lexend",
              color: "#43a047",
            }}
          >
            Built to reduce Mental Stress.
          </Typography>
        </Grid>
      </Grid>
      <Grid container sx={{ marginTop: "1rem", justifyContent: "center" }}>
        <Typography
          variant="h6"
          sx={{ fontWeight: "bold", fontFamily: " Lexend" }}
        >
          Sheepill is free to use as long as you like.
        </Typography>
      </Grid>
      <Grid container sx={{ marginTop: "1rem" }}>
        <Grid ml={1}>
          <div
            style={{
              display: "flex",
              height: "40rem",
              width: "50rem",
              backgroundSize: "cover",
              backgroundImage: `url(${mentalRelief})`,
              borderRadius: "5rem",
            }}
          >
            <HomePageCard />
          </div>
        </Grid>
      </Grid>
      <Grid mt={10}>
        <HomePageChatBox />
      </Grid>
      <Grid mt={10}>
        <HomePageMeetingBox />
      </Grid>
      <Grid mt={10}>
        <HomePageShareBox />
      </Grid>
      <Grid
        mt={10}
        sx={{
          backgroundColor: "#e5c08f",
          height: "15rem",
          borderBottomLeftRadius: "20rem",
          borderBottomRightRadius: "20rem",
          textAlign: "center",
        }}
      >
        <Typography
          variant="h4"
          sx={{ fontFamily: "Lexend", paddingTop: "5rem", fontWeight: "bold" }}
        >
          Discover all the things you can achieve using Sheepill.
        </Typography>
      </Grid>
      <Grid mt={5}>
        <HomePageFooter />
      </Grid>
    </Box>
  );
};

export default HomePage;
