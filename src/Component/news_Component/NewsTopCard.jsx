// ArticleCard.js
import React from "react";
import {
  Card,
  CardContent,
  CardMedia,
  Typography,
  CardActions,
  Button,
 
  Box,
} from "@mui/material";
import {
  ArrowRightAlt,
  Person,
} from "@mui/icons-material";
import { json } from "react-router-dom";

const NeswTop_Card = (props) => {
  const {author, urlToImage, url, title, description }=props;
 
  
  return (
    <Card
      sx={{
        maxWidth: { xs: "350px", md: "400px" },
        margin: "16px auto",
        boxShadow: 3,
        minWidth: { xs: "290px", md: "380px" },
      }}
    >
      <CardMedia
        component="img"
        height="200"
        image={
          urlToImage
            ? urlToImage
            : "https://res.cloudinary.com/duih8hld2/image/upload/v1729591059/news/i4wvfwhdyrr0c4hc9klg.jpg"
        }
        alt={title.slice(0, 30)}
      />
      <CardContent>
        <Typography
          gutterBottom
          variant="h6"
          sx={{
            color: "darkblue",
            fontFamily: "serif",
          }}
          component="div"
        >
          {title}
        </Typography>

        <Typography variant="body2" color="text.secondary">
          {description}
        </Typography>
        {author && (
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              gap: "10px",
            }}
          >
            <Typography
              sx={{
                display: "flex",
                gap: "10px",
                alignItems: "center",
                fontFamily: "monospace",
              }}
            >
              <Person />
              {author}
            </Typography>
           
          </Box>
        )}
      </CardContent>
      <CardActions
        sx={{
          display: "flex",
          justifyContent: "center",
        }}
      >
        <Button
          variant="contained"
          sx={{
            width: "90%",
            backgroundColor: "navy",
            ":focus": {
              outline: "none",
            },
            ":hover": {
              opacity: "none",
            },
            ":hover": {
              backgroundColor: "navy",
              color: "white",
            },
            p: 1,
          }}
          endIcon={<ArrowRightAlt />}
          href={url}
          target="_blank"
        >
          Read More
        </Button>
      </CardActions>
    </Card>
  );
};

export default NeswTop_Card;
