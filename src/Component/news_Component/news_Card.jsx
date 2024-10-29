import React from "react";
import {
  Avatar,
  Box,
  Button,
  Card,
  CardContent,
  CardMedia,
  Chip,
  Typography,
} from "@mui/material";
import { AccessTime, ArrowRightAlt, Article, Favorite, Person, Public } from "@mui/icons-material";
export default function News_Card({
  title,
  description,
  pubDate,
  image_url,
  link,
  country,
  creator,
  source_name,
  category,
  source_icon,
}) {
  
  const data={
  title,
  description,
  pubDate,
  image_url,
  link,
  country,
  creator,
  source_name,
  category,
  source_icon,
  }
  
  return (
    <>
      <Card sx={{ maxWidth: {xs:'320px',md:'380px'}, m: 2, boxShadow: 3, borderRadius: 3 }}>
        <CardMedia component="img" sx={{
          width:{xs:'320px',md:'380px'}
        }} height="200" image={image_url ? image_url :'https://res.cloudinary.com/duih8hld2/image/upload/v1729591059/news/i4wvfwhdyrr0c4hc9klg.jpg' } alt={title?.slice(0,10)} />

        <CardContent>
          <Box display="flex" alignItems="center" gap={1} mb={1}>
            <Avatar src={source_icon} alt={source_name} />
            <Typography sx={{
               fontFamily:'serif',
               textDecorationLine:'underline',
            }}  variant="subtitle2" >
              {source_name}
            </Typography>
          </Box>

          <Typography sx={{
            color:'darkblue',
            fontFamily:'serif'
          }}   >
            {title}
          </Typography>

          <Typography variant="body2" sx={{
                fontFamily: "Inconsolata, monospace",
          }} color="text.secondary" gutterBottom>
            { description && description?.slice(0,230)+'...'}
          </Typography>

          {creator && (
            <Box display="flex" alignItems="center" gap={1} mt={1} mb={2}>
              <Person fontSize="small" color="action" />
              <Typography variant="body2" color="text.secondary">
                {`By: ${creator.join(", ")}`}
              </Typography>
            </Box>
          )}

          <Box display="flex" gap={1} mb={2}>
            {category.map((cat) => (
              <Chip
                key={cat}
                label={cat.toUpperCase()}
                color="primary"
                icon={<Article />}
              />
            ))}
            <Chip label={country} color="secondary" icon={<Public />} />
          </Box>

          <Box display="flex" alignItems="center" gap={'10px'} >
            <AccessTime fontSize="small" color="action" />
            <Typography variant="body2" color="text.secondary">
              {new Date(pubDate).toLocaleString()}
            </Typography>
            </Box>
        </CardContent>

        <Box textAlign="center" mb={2}>
          <Button
            variant="contained"
            href={link}
            target="_blank"
            sx={{
              ":focus":{
                outline:'none'
              },
              ":hover":{
                backgroundColor:'navy',
                color:'white'

              },
              backgroundColor:'navy',
              width:'90%'
            }}
            endIcon={<ArrowRightAlt/>}
          >
            Read More
          </Button>
        </Box>
      </Card>
    </>
  );
}
