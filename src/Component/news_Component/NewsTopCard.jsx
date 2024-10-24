// ArticleCard.js
import React from "react";
import {
  Card,
  CardContent,
  CardMedia,
  Typography,
  CardActions,
  Button,
} from "@mui/material";
import { ArrowRightAlt, Person, Person2 } from "@mui/icons-material";

const NeswTop_Card = ({ author, urlToImage, url, title, description }) => {
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
          <Typography
            sx={{
              display: "flex",
              alignItems: "center",
              fontFamily: "monospace",
              gap: "10px",
            }}
          >
            <Person />
            {author}
          </Typography>
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
            ":hover":{
                backgroundColor:'navy',
                color:'white'

              },
            p:1
          }}
          endIcon={<ArrowRightAlt/>}
         
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
