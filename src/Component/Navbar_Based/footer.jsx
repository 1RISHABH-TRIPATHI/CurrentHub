import React from "react";
import {
  Box,
  Typography,
  Grid2,
  Container,
  IconButton,
  Divider,
} from "@mui/material";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import { NavLink } from "react-router-dom";
import { Code, GitHub } from "@mui/icons-material";

const Footer = () => {
  return (
    <Box
      sx={{
        backgroundColor: "#2c3e50",
        color: "white",
        padding: "40px 0",
        mt:4,
        
      }}
    >
      <Container>
        <Grid2 justifyContent={"space-around"} container spacing={4}>
          <Grid2 item xs={12} md={4}>
            <img
              style={{
                filter: "drop-shadow(1px 2px 0px rgba(0, 0, 0, 0.7))",
              }}
              width={200}
              height={80}
              src="https://res.cloudinary.com/duih8hld2/image/upload/v1729681861/news/uf6evvt3vhjgm6nfk3fa.png"
            />
            <Typography
              component="h1"
              sx={{
                fontFamily: "'Pacifico', cursive",
                fontSize: { xs: "36px", md: "52px" },
                color: "#ff",
                textShadow: "0px 3px 0px wheat",
                letterSpacing: "2px",
                
              }}
            >
              CurrentsHub
            </Typography>
            <Typography variant="body1" sx={{
                fontFamily: "'Pacifico', cursive",
                fontSize: { xs: "16px", md: "24px" },
                color: "#fff",
                textShadow: "0px 3px 0px wheat",
                letterSpacing: "2px",
                mt:1
              }}>
              Baton ke Batase
            </Typography>
          </Grid2>

          <Grid2 item xs={12} md={4}>
            <Typography variant="h6">Quick Access</Typography>
            <Divider
              sx={{
                backgroundColor: "white",
              }}
            />
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                fontFamily: "monospace",
              }}
            >
              <NavLink style={{ color: "white ",marginTop:'7px' }} to={"/"}>
                Home
              </NavLink>
              <NavLink style={{ color: "white " ,marginTop:'7px'}} to={"/News"}>
                Latest-news
              </NavLink>
              <NavLink style={{ color: "white ",marginTop:'7px' }} to={"/Headline"}>
                Top-Headline
              </NavLink>
              <NavLink style={{ color: "white ",marginTop:'7px' }} to={"/every"}>
                Every
              </NavLink>
            </Box>
          </Grid2>

          <Grid2 item xs={12} md={4}>
            <Typography variant="h6" component="h2" sx={{ fontWeight: "bold" }}>
              Contact Us
            </Typography>
            <Typography variant="body1" sx={{ mt: 1 }}>
              +91 9522574231
            </Typography>
            <Typography variant="body1">
              rishabhtripathi0910@gmail.com
            </Typography>

            <Box sx={{ mt: 2 }}>
              <IconButton
                href="https://facebook.com"
                target="_blank"
                sx={{ color: "white" }}
              >
                <FacebookIcon />
              </IconButton>
              <IconButton
                href="https://github.com/1RISHABH-TRIPATHI"
                target="_blank"
                sx={{ color: "white" }}
              >
                <GitHub />
              </IconButton>
              <IconButton
                href="https://leetcode.com/u/tripathihrishabh428/"
                target="_blank"
                sx={{ color: "white" }}
              >
                <Code />
              </IconButton>
              <IconButton
                href="https://www.instagram.com/shabh_428/profilecard/?igsh=MTV6d2dhdjl6d3h6MA=="
                target="_blank"
                sx={{ color: "white" }}
              >
                <InstagramIcon />
              </IconButton>
              <IconButton
                href="https://www.linkedin.com/in/rishabh-tripathi-966607324?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
                target="_blank"
                sx={{ color: "white" }}
              >
                <LinkedInIcon />
              </IconButton>
            </Box>
          </Grid2>
        </Grid2>

        <Box
          sx={{
            textAlign: "center",
            mt: 4,
            borderTop: "1px solid #ccc",
            pt: 2,
          }}
        >
          <Typography variant="body2">
            &copy; {new Date().getFullYear()} CurrentsHub | All Rights Reserved
          </Typography>
        </Box>
      </Container>
    </Box>
  );
};

export default Footer;
