import {
  CurrencyBitcoin,
  Landscape,
  Language,
  Today,
} from "@mui/icons-material";
import Search from "@mui/icons-material/Search";
import {
  Box,
  Button,
  Container,
  Divider,
  Grid2,
  Paper,
  Typography,
} from "@mui/material";
import React from "react";
import FAQ from "./Faq_Component";
import { useNavigate } from "react-router-dom";
import ReactPlayer from "react-player";
function HomePage() {
  const Navigate = useNavigate();
  return (
    <>
      <Box
        sx={{
          
          height: { xs: "300px", md: "550px" },
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          textAlign: "center",
          
        }}
      >
       <img src='https://res.cloudinary.com/duih8hld2/image/upload/v1729679634/news/v5yab14otgvungrufpnd.png' height={'100%'} width={'100%'} alt="" /> 
      </Box>
      <Container
        maxWidth="md"
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          py: 4,
        }}
      >
        <Box sx={{ flex: "1", mr: 4 }}>
          <img
            src="https://res.cloudinary.com/duih8hld2/image/upload/v1728912835/news/kzsej6fmumtqjsn30hii.jpg"
            alt="News Illustration"
            style={{ width: "100%" }}
          />
        </Box>
        <Box sx={{ flex: "1", textAlign: "center" }}>
          <Typography variant="h4" fontWeight="bold" gutterBottom>
            Stay Informed!
          </Typography>
          <Typography
            variant="body1"
            color="textSecondary"
            sx={{ fontFamily: "monospace" }}
            paragraph
          >
            Stay ahead of the curve with real-time updates and exclusive news
            stories. Press 'Start' to unlock the latest happenings from every
            corner of the globe.
          </Typography>
          <Button
            variant="contained"
            color="primary"
            size="large"
            onClick={() => Navigate("/News")}
          >
            Start
          </Button>
        </Box>
      </Container>

      <Container
        sx={{
          padding: "8px",
        }}
      >
        <Typography
          sx={{
            fontFamily: "monospace",
            fontSize: { xs: "25px", md: "30px" },
            fontWeight: "400",
            fontStyle: "italic",
            background: "navy",
            WebkitBackgroundClip: "text",
          }}
        >
          Your News ! Your Way
        </Typography>
        <Grid2
          container
          sx={{
            marginTop: "30px",
            justifyContent: "center",
            gap: "45px",
          }}
          spacing={4}
        >
          <Grid2 item xs={12} sm={6} md={4}>
            <Paper
              sx={{
                height: "210px",
                transition: "transform 2s",
                ":hover": {
                  cursor: "pointer",
                  transform: "scale(1.1)",
                },
              }}
              elevation={3}
              style={{ padding: "20px" }}
            >
              <Box>
                <Today />
                <Typography
                  sx={{
                    fontFamily: "monospace",
                    fontSize: "20px",
                    fontStyle: "oblique",
                    background: "red",
                    WebkitBackgroundClip: "text",
                  }}
                >
                  Top-Headline
                </Typography>
              </Box>
              <Divider
                sx={{
                  backgroundColor: "red",
                }}
              />
              <Typography
                sx={{
                  maxWidth: "400px",
                  fontFamily: "monospace",
                }}
              >
                Live-breaking news and headlines from reputed and global news
                they are published online.
              </Typography>
            </Paper>
          </Grid2>
          <Grid2 item xs={12} sm={6} md={4}>
            <Paper
              sx={{
                height: "210px",
                transition: "transform 2s",
                ":hover": {
                  cursor: "pointer",
                  transform: "scale(1.1)",
                },
              }}
              elevation={3}
              style={{ padding: "20px" }}
            >
              <Box>
                <Landscape />
                <Typography
                  sx={{
                    fontFamily: "monospace",
                    fontSize: "20px",
                    fontStyle: "oblique",
                    background: "red",
                    WebkitBackgroundClip: "text",
                  }}
                >
                  Country
                </Typography>
              </Box>
              <Divider
                sx={{
                  backgroundColor: "red",
                }}
              />
              <Typography
                sx={{
                  maxWidth: "400px",
                  fontFamily: "monospace",
                }}
              >
                Track relevant news source from 206 different countries
              </Typography>
            </Paper>
          </Grid2>
          <Grid2 item xs={12} sm={6} md={4}>
            <Paper
              sx={{
                height: "210px",
                transition: "transform 2s",
                ":hover": {
                  cursor: "pointer",
                  transform: "scale(1.1)",
                },
              }}
              elevation={3}
              style={{ padding: "20px" }}
            >
              <Box>
                <Language />
                <Typography
                  sx={{
                    fontFamily: "monospace",
                    fontSize: "20px",
                    fontStyle: "oblique",
                    background: "red",
                    WebkitBackgroundClip: "text",
                  }}
                >
                  20+ Language
                </Typography>
              </Box>
              <Divider
                sx={{
                  backgroundColor: "red",
                }}
              />
              <Typography
                sx={{
                  maxWidth: "400px",
                  fontFamily: "monospace",
                }}
              >
                Track global news sources in 89 different languages to access
                relevant source
              </Typography>
            </Paper>
          </Grid2>
          <Grid2 item xs={12} sm={6} md={4}>
            <Paper
              sx={{
                height: "210px",
                transition: "transform 2s",
                ":hover": {
                  cursor: "pointer",
                  transform: "scale(1.1)",
                },
              }}
              elevation={3}
              style={{ padding: "20px" }}
            >
              <Box>
                <Search />
                <Typography
                  sx={{
                    fontFamily: "monospace",
                    fontSize: "20px",
                    fontStyle: "oblique",
                    background: "red",
                    WebkitBackgroundClip: "text",
                  }}
                >
                  Advance Search Filter
                </Typography>
              </Box>
              <Divider
                sx={{
                  backgroundColor: "red",
                }}
              />
              <Typography
                sx={{
                  maxWidth: "400px",
                  fontFamily: "monospace",
                }}
              >
                Search news articles filtered by any keyword, country and more
                will help you find the news you're interested in.
              </Typography>
            </Paper>
          </Grid2>
          <Grid2 item xs={12} sm={6} md={4}>
            <Paper
              sx={{
                height: "210px",
                transition: "transform 2s",
                ":hover": {
                  cursor: "pointer",
                  transform: "scale(1.1)",
                },
              }}
              elevation={3}
              style={{ padding: "20px" }}
            >
              <Box>
                <CurrencyBitcoin />
                <Typography
                  sx={{
                    fontFamily: "monospace",
                    fontSize: "20px",
                    fontStyle: "oblique",
                    background: "red",
                    WebkitBackgroundClip: "text",
                  }}
                >
                  Crypto news
                </Typography>
              </Box>
              <Divider
                sx={{
                  backgroundColor: "red",
                }}
              />
              <Typography
                sx={{
                  maxWidth: "400px",
                  fontFamily: "monospace",
                }}
              >
                Search and Monitor Worldwide Cryptocurrency-related news and
                blog data from the most reliable News and Blog Websites.
              </Typography>
            </Paper>
          </Grid2>
        </Grid2>
      </Container>
      <FAQ />
    </>
  );
}

export default HomePage;
