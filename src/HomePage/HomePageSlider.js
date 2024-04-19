import React from "react";
import { Box, Typography } from "@mui/material";
import "react-slideshow-image/dist/styles.css";
import { Fade } from "react-slideshow-image";
import YogaStressManagement from "../Assets/YogaStressManagement.jpg";
import Reliefaffection from "../Assets/Reliefaffection.jpg";
import Stress_FireWorks from "../Assets/Stress_FireWorks.jpg";

const slideImgaes = [
  {
    url: YogaStressManagement,
    caption: (
      <Box>
        <Typography
          variant="h4"
          sx={{ fontWeight: "bold", fontFamily: "cursive" }}
        >
          Self Care is how <br /> you take your power back. <br />
          Shepill helps you to do that.
        </Typography>
      </Box>
    ),
  },
  {
    url: Reliefaffection,
    caption: (
      <Box>
        <Typography
          variant="h4"
          sx={{ color: "#263238", fontWeight: "bold", fontFamily: "cursive" }}
        >
          Mental Health begins with <br /> Sheepill
        </Typography>
      </Box>
    ),
  },
  {
    url: Stress_FireWorks,
    caption: (
      <Box>
        <Typography
          variant="h4"
          sx={{ color: "#fafafa", fontWeight: "bold", fontFamily: "cursive" }}
        >
          Fire away your Negative thought on <br /> Sheepill
        </Typography>
      </Box>
    ),
  },
];

const imageSliderStyle = {
  display: "flex",
  height: "45rem",
  backgroundSize: "cover",
};

const imageSpanStyle = {
  fontSize: "20px",
  color: "#000000",
  marginTop: "23rem",
  marginLeft: "5rem",
};

const imageStyle = {
  fontSize: "20px",
  color: "#000000",
  marginTop: "35rem",
  marginLeft: "70rem",
};

const HomePageslider = () => {
  return (
    <Box>
      <Fade>
        {slideImgaes.map((e, i) => {
          return (
            <div key={i}>
              <div
                style={{
                  ...imageSliderStyle,
                  backgroundImage: `url(${e.url})`,
                }}
              >
                <span style={i % 2 === 0 ? imageSpanStyle : imageStyle}>
                  {e.caption}
                </span>
              </div>
            </div>
          );
        })}
      </Fade>
    </Box>
  );
};

export default HomePageslider;
