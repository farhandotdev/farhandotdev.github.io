import React from "react";
import "./Hero.css";
import TopSkill from "../topSkill/TopSkill";
// import fimage from "../../assets/farhan.jpeg";
// import ConnectWithoutContactIcon from '@mui/icons-material/ConnectWithoutContact';
// import { Button, Stack, Typography } from "@mui/material";
import { Box } from '@mui/material'
import Container from "@mui/material/Container";

const Hero = () => {
  return (
    <>
    <Container minWidth='sm'>
    <Box className="hero">
      <div className="hero-left">
        <div>
          <h1 className="text-3xl">Hi, I'm Farhan Alam</h1>
          <div className="title">
            MERN Stack Developer | Flutter Developer | Asst. Organizer{" "}
            <span style={{ color: "darkGray", margin: 0 }}>
              @Flutter_Jaipur
            </span>
          </div>
          <div className="ab">
            Farhan = <span style={{ color: "purple", margin: 0 }}>Joy</span> |{" "}
            <span style={{ color: "blue", margin: 0 }}>Happiness</span> |{" "}
            <span style={{ color: "green", margin: 0 }}>Cheerful</span>.
          </div>
          <div >
            <p className="about">
            I am self-taught as a fullstack developer in web and junior frontend
            developer in Flutter and an open-source contributor who loves
            getting involved in developer communities.
            </p>
          </div>
        </div>
      </div>
    </Box>
    </Container>
    </>
  );
};
export default Hero;
