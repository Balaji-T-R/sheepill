import React from "react";
import { Divider, Grid, List, ListItem, Typography } from "@mui/material";
import "@fontsource/lexend";

const HomePageFooter = () => {
  const sheePillContent = [
    "Sheepill vs email",
    "Accessibility",
    "Futured Releases",
    "Change log",
    "Status",
  ];

  const sheepillFeatures = [
    "Channels",
    "Connect",
    "Search",
    "File Sharing ",
    "Sheepill AI",
  ];

  const sheepillSolutions = [
    "Engineering",
    "IT",
    "Customer Service",
    "Security",
    "Technology",
  ];

  const sheepillResources = [
    "Help Centre",
    "Resource Library",
    "Shepill Blog",
    "Community",
    "Developers",
  ];

  const sheepillCompany = [
    "About us",
    "News",
    "Sheepill Shop",
    "Careers",
    "Contact us",
  ];

  return (
    <React.Fragment>
      <Grid
        style={{
          backgroundColor: "#ccc0af",
          borderTopLeftRadius: "15rem",
          borderTopRightRadius: "15rem",
        }}
      >
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
          <Grid xs={1.5} mt={5} mb={5}>
            <Typography
              variant="h6"
              sx={{ fontWeight: "bold", fontFamily: "Lexend" }}
            >
              Product
            </Typography>
            <List>
              {sheePillContent.map((e) => {
                return (
                  <ListItem disablePadding sx={{ marginTop: "0.8rem" }}>
                    <Typography
                      sx={{ fontFamily: "Lexend", cursor: "pointer" }}
                    >
                      {e}
                    </Typography>
                  </ListItem>
                );
              })}
            </List>
          </Grid>
          <Grid xs={1.5} mt={5} mb={5}>
            <Typography
              variant="h6"
              sx={{ fontWeight: "bold", fontFamily: "Lexend" }}
            >
              Features
            </Typography>
            <List>
              {sheepillFeatures.map((e) => {
                return (
                  <ListItem disablePadding sx={{ marginTop: "0.8rem" }}>
                    <Typography
                      sx={{ fontFamily: "Lexend", cursor: "pointer" }}
                    >
                      {e}
                    </Typography>
                  </ListItem>
                );
              })}
            </List>
          </Grid>
          <Grid xs={1.5} mt={5} mb={5}>
            <Typography
              variant="h6"
              sx={{ fontWeight: "bold", fontFamily: "Lexend" }}
            >
              Solutions
            </Typography>
            <List>
              {sheepillSolutions.map((e) => {
                return (
                  <ListItem disablePadding sx={{ marginTop: "0.8rem" }}>
                    <Typography
                      sx={{ fontFamily: "Lexend", cursor: "pointer" }}
                    >
                      {e}
                    </Typography>
                  </ListItem>
                );
              })}
            </List>
          </Grid>
          <Grid xs={1.5} mt={5} mb={5}>
            <Typography
              variant="h6"
              sx={{ fontWeight: "bold", fontFamily: "Lexend" }}
            >
              Resources
            </Typography>
            <List>
              {sheepillResources.map((e) => {
                return (
                  <ListItem disablePadding sx={{ marginTop: "0.8rem" }}>
                    <Typography
                      sx={{ fontFamily: "Lexend", cursor: "pointer" }}
                    >
                      {e}
                    </Typography>
                  </ListItem>
                );
              })}
            </List>
          </Grid>
          <Grid xs={1.5} mt={5} mb={5}>
            <Typography
              variant="h6"
              sx={{ fontWeight: "bold", fontFamily: "Lexend" }}
            >
              Company
            </Typography>
            <List>
              {sheepillCompany.map((e) => {
                return (
                  <ListItem disablePadding sx={{ marginTop: "0.8rem" }}>
                    <Typography
                      sx={{ fontFamily: "Lexend", cursor: "pointer" }}
                    >
                      {e}
                    </Typography>
                  </ListItem>
                );
              })}
            </List>
          </Grid>
        </Grid>
        <Grid mt={5} pb={5} sx={{ textAlign: "center" }}>
          <Divider />
          <Grid pt={3}>
            <Typography variant="h7" sx={{ fontFamily: "Lexend" }}>
              ©2024 Sheepill Technologies, LLC, a Salesforce company. All rights
              reserved. Various trademarks held by their respective owners.
            </Typography>
          </Grid>
        </Grid>
      </Grid>
    </React.Fragment>
  );
};

export default HomePageFooter;
