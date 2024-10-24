import { Box, Button, Container, Typography } from "@mui/material";
import React from "react";
import { useNavigate } from "react-router-dom";

export default function NotFoundPage({errorMessage}) {
  const navigate = useNavigate();

  return (
    <Container sx={{ position: "relative", textAlign: "center", mt: 1 }}>
      <Box
        sx={{
          backgroundImage:
            "url(https://res.cloudinary.com/duih8hld2/image/upload/v1728991001/news/zztsbtgim9n3juxfy4fc.jpg)",
          backgroundSize: "cover", 
          backgroundPosition: "center",
          height: { xs: "400px", md: "550px" },
          position: "relative", 
          borderRadius: 2,
        }}
      >
        
        <Box
          sx={{
            position: "absolute",
            bottom: { xs: "20px", md: "50px" }, 
            left: 0,
            right: 0,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            flexDirection: "column",
            gap: 1,
            textAlign: "center",
          }}
        >
          <Typography variant="h4" fontWeight="bold" color="white">
            Oops! Page Not Found
          </Typography>

          <Typography variant="body1" color="white">
            {errorMessage ?errorMessage :"The page you're looking for doesn't exist or has been moved."}
          </Typography>

          <Button
            variant="contained"
            color="primary"
            sx={{ mt: 2 }}
            onClick={() => navigate("/")} 
          >
            Go Back Home
          </Button>
        </Box>
      </Box>
    </Container>
  );
}
