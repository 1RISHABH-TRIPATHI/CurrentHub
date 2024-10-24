import { MenuOutlined } from "@mui/icons-material";
import {
  AppBar,
  Box,
  Breadcrumbs,
  CssBaseline,
  Toolbar,
  Typography,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import DrawerSide from "./DrawerSide";
import { Link, Outlet, useLocation } from "react-router-dom";
import Footer from "./footer";
export default function Navbar() {
  const [open, setOpen] = useState(false);
  const HandleSizeWidth=()=>{
    if (window.innerWidth >= 1100) setOpen(true);
    else setOpen(false);
  }
  useEffect(() => {
   HandleSizeWidth();
   window.addEventListener('resize',HandleSizeWidth);
   return ()=>window.removeEventListener('resize',HandleSizeWidth)
  }, []);
   
  const ToggleDrawer = () => {
    setOpen(!open); 
  };
  const location = useLocation();
  const pathName = location.pathname.split("/").filter((x) => x);
  const breadcrumbNameMap = {
    "/":'Home',
    "/Category": "Category",
    "/Headline": "TOP",
    "/Sort/Relevancy": "Relevency",
    "/Sort/Popularity": "Popularity",
    "/Language": "Language",
    "/Country": "Country",
    "/every": "Every",
    "/News": "LatestNews",
  };
  return (
    <>
      <Box sx={{ display: "flex" }}>
        <AppBar
          sx={{
            background:
              "linear-gradient(305deg, rgba(75,64,110,1) 34%, rgba(22,6,52,1) 34%, rgba(60,60,130,0.9996790952709209) 35%)",
          }}
          position="fixed"
        >
          <CssBaseline />
          <Toolbar
            sx={{ display: "flex", justifyContent: "space-between" }}
            variant="dense"
          >
            <MenuOutlined
              sx={{
                marginLeft: "9px",
                ":hover": {
                  cursor: "pointer",
                },
              }}
              onClick={ToggleDrawer}
            />
           <Typography
              
              sx={{
                fontFamily: "'Pacifico', cursive",
                fontSize: { xs: "20px", md: "37px" },
                color: "wheat",
                textShadow: "0px 3px 0px gray",
                letterSpacing: "2px",
                
              }}
            >
              CurrentsHub
            </Typography>
          </Toolbar>
        </AppBar>
        <Box sx={{ display: "flex" }}>
          <DrawerSide open={open} />
          <Box
            sx={{
              marginTop: "50px",
              marginLeft: open ? "200px" : "100px", // Adjust margin based on drawer state
              transition: "margin-left 0.8s", // Smooth transition
            }}
          >
            <Breadcrumbs sx={{ marginBottom: "10px" }}>
              <Link underline="hover" color="inherit" to={"/"}>
                Home
              </Link>
              {pathName.map((Path, index) => {
                const last = index === pathName.length - 1;
                const to = `/${pathName.slice(0, index + 1).join("/")}`;
                return last ? (
                  <Typography key={to}>{breadcrumbNameMap[to] || to}</Typography>
                ) : (
                  <Link key={to} to={to}>
                   { breadcrumbNameMap[to]}
                  </Link>
                );
              })}
            </Breadcrumbs>
            <Outlet  />
            <Footer />
            
          </Box>
        </Box>
      </Box>
    </>
  );
}
