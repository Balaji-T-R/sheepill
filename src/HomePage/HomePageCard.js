import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import {
  Button,
  Box,
  FormControl,
  TextField,
  Link,
  Grid,
  Typography,
} from "@mui/material";

const HomePageCard = () => {
  return (
    <React.Fragment>
      <Box sx={{ marginLeft: "70rem", marginTop: "5rem" }}>
        <Card
          sx={{
            minWidth: "30rem",
            minHeight: "30rem",
            borderRadius: "2rem",
            backgroundColor: "#FFFAF0",
          }}
        >
          <CardContent sx={{ textAlign: "center", marginTop: "1rem" }}>
            <Typography
              variant="h5"
              component="div"
              sx={{ fontFamily: "Lexend" }}
            >
              Sign Up
            </Typography>
            <FormControl sx={{ width: "20rem", marginTop: "2rem" }}>
              <TextField
                fullWidth
                InputLabelProps={{
                  style: { fontFamily: "Lexend" },
                }}
                InputProps={{
                  style: {
                    fontFamily: "Lexend",
                    fontSize: "0.8rem",
                  },
                }}
                sx={{
                  borderRadius: "none",
                }}
                label="Email Address"
              />
            </FormControl>
            <br />
            <FormControl sx={{ width: "20rem", marginTop: "2rem" }}>
              <TextField
                fullWidth
                InputLabelProps={{
                  style: { fontFamily: "Lexend" },
                }}
                InputProps={{
                  style: {
                    fontFamily: "Lexend",
                    fontSize: "0.8rem",
                  },
                }}
                sx={{
                  borderRadius: "none",
                }}
                label="Username"
              />
            </FormControl>
            <br />
            <FormControl sx={{ width: "20rem", marginTop: "2rem" }}>
              <TextField
                fullWidth
                InputLabelProps={{
                  style: { fontFamily: "Lexend" },
                }}
                InputProps={{
                  style: {
                    fontFamily: "Lexend",
                    fontSize: "0.8rem",
                  },
                }}
                sx={{
                  borderRadius: "none",
                }}
                label="Password"
              />
            </FormControl>
            <br />
            <Grid>
              <Button
                sx={{
                  backgroundColor: "#66bb6a",
                  width: "20rem",
                  marginTop: "2rem",
                  textTransform: "none",
                  color: "black",
                  fontFamily: "Lexend",
                  "&:hover": {
                    backgroundColor: "#388e3c",
                    boxShadow: "none",
                  },
                }}
              >
                Sign Up
              </Button>
            </Grid>
            <Grid mt={1}>
              <Typography sx={{ fontFamily: "Lexend" }}>
                {" "}
                Already a User?{" "}
                <Link underline="none" sx={{ cursor: "pointer" }}>
                  {" "}
                  Sign In{" "}
                </Link>{" "}
              </Typography>
            </Grid>
          </CardContent>
        </Card>
      </Box>
    </React.Fragment>
  );
};

export default HomePageCard;
