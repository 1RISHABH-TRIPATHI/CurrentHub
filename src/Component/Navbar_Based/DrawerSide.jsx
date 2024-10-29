import {
  AddLocationAltOutlined,
  Adjust,
  AllInclusiveOutlined,
  CategoryOutlined,
  HighlightAltOutlined,
  LanguageOutlined,
  PanoramaFishEye,
  Sort,
  TrendingDown,
  TrendingUp,
} from "@mui/icons-material";
import {
  Collapse,
  Divider,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setPriority } from "../../Store/LanguageSlice";
const LanguageDialog=React.lazy(()=>import("../news_Component/LanguageDialog"));
const Country_DialogBox=React.lazy(()=>import("../news_Component/Country_DialogBox"));
function DrawerSide({ open }) {
  const [openSort, setOpenSort] = useState(false);
  const [openLang, setOpenLang] = useState(false);
  const [openCountry, setOpenCountry] = useState(false);
  const dispatch=useDispatch();
  const ToggleSortList = () => {
    setOpenSort(!openSort);
  };

  const ToggleLanguage = () => {
    setOpenLang(!openLang);
  };

  const ToggleCountry = () => {
    setOpenCountry(!openCountry);
  };
  const Navigate = useNavigate();
  return (
    <>
      <Drawer
        variant="permanent"
        sx={{
          width: open ? "220px" : "120px",
          transition: "width 0.6s",
          overflowX: "hidden",
          position: "fixed",
          top: "49px",
        }}
        PaperProps={{
          sx: {
            width: "inherit", 
            position: "fixed",
            top: "49px",
            overflowX:'hidden'
          },
        }}
      >
        <List>
          <ListItem>
            <ListItemButton
              onClick={() => {
                Navigate("/Category");
              }}
            >
              <ListItemIcon
                sx={[
                  open
                    ? { justifyContent: "initial" }
                    : { alignItems: "center" },
                ]}
              >
                <CategoryOutlined />
              </ListItemIcon>
              <ListItemText
                primary="Category"
                sx={[
                  open
                    ? {
                        opacity: 10,
                      }
                    : {
                        opacity: 0,
                      },
                  {
                    transition: "opacity 0.6s",
                  },
                ]}
              />
            </ListItemButton>
          </ListItem>
          <ListItem>
            <ListItemButton
              onClick={() => {
                Navigate("/Headline");
              }}
            >
              <ListItemIcon
                sx={[
                  open
                    ? { justifyContent: "initial" }
                    : { alignItems: "center" },
                ]}
              >
                <HighlightAltOutlined />
              </ListItemIcon>
              <ListItemText
                primary="Headline"
                sx={[
                  open
                    ? {
                        opacity: 10,
                      }
                    : {
                        opacity: 0,
                      },
                  {
                    transition: "opacity 0.6s",
                  },
                ]}
              />
            </ListItemButton>
          </ListItem>
          <ListItem>
            <ListItemButton onClick={ToggleSortList}>
              <ListItemIcon
                sx={[
                  open
                    ? { justifyContent: "initial" }
                    : { alignItems: "center" },
                ]}
              >
                <Sort />
              </ListItemIcon>
              <ListItemText
                primary="Sort"
                sx={[
                  open
                    ? {
                        opacity: 10,
                      }
                    : {
                        opacity: 0,
                      },
                  {
                    transition: "opacity 0.6s",
                  },
                ]}
              />
            </ListItemButton>
          </ListItem>
          <Collapse in={openSort}>
            <Divider />
            <List>
              <ListItem>
                <ListItemButton onClick={()=>dispatch(setPriority('all'))} >
                  <ListItemIcon
                    sx={{
                      justifyContent: "flex-end",
                      paddingRight: openSort ? "10px" : "2px",
                    }}
                  >
                    < PanoramaFishEye/>
                  </ListItemIcon>
                  <ListItemText
                    primary="None"
                    sx={[
                      open
                        ? {
                            opacity: 10,
                          }
                        : {
                            opacity: 0,
                          },
                      {
                        transition: "opacity 0.6s",
                      },
                    ]}
                  />
                </ListItemButton>
              </ListItem>
              <ListItem>
                <ListItemButton onClick={()=>dispatch(setPriority('top'))} >
                  <ListItemIcon
                    sx={{
                      justifyContent: "flex-end",
                      paddingRight: openSort ? "10px" : "2px",
                    }}
                  >
                    <TrendingUp />
                  </ListItemIcon>
                  <ListItemText
                    primary="TOP"
                    sx={[
                      open
                        ? {
                            opacity: 10,
                          }
                        : {
                            opacity: 0,
                          },
                      {
                        transition: "opacity 0.6s",
                      },
                    ]}
                  />
                </ListItemButton>
              </ListItem>
              <ListItem>
                <ListItemButton onClick={()=>dispatch(setPriority('medium'))} >
                  <ListItemIcon
                    sx={{
                      justifyContent: "flex-end",
                      paddingRight: openSort ? "10px" : "2px",
                    }}
                  >
                    <Adjust />
                  </ListItemIcon>
                  <ListItemText
                    primary="Medium"
                    sx={[
                      open
                        ? {
                            opacity: 10,
                          }
                        : {
                            opacity: 0,
                          },
                      {
                        transition: "opacity 0.6s",
                      },
                    ]}
                  />
                </ListItemButton>
              </ListItem>
              <ListItem>
                <ListItemButton onClick={()=>dispatch(setPriority('low'))} >
                  <ListItemIcon
                    sx={{
                      justifyContent: "flex-end",
                      paddingRight: openSort ? "10px" : "2px",
                    }}
                  >
                    <TrendingDown />
                  </ListItemIcon>
                  <ListItemText
                    primary="Low"
                    sx={[
                      open
                        ? {
                            opacity: 10,
                          }
                        : {
                            opacity: 0,
                          },
                      {
                        transition: "opacity 0.6s",
                      },
                    ]}
                  />
                </ListItemButton>
              </ListItem>
            </List>
            <Divider />
          </Collapse>
          <ListItem>
            <ListItemButton onClick={() => ToggleLanguage()}>
              <ListItemIcon
                sx={[
                  open
                    ? { justifyContent: "initial" }
                    : { alignItems: "center" },
                ]}
              >
                <LanguageOutlined />
              </ListItemIcon>
              <ListItemText
                primary="Language"
                sx={[
                  open
                    ? {
                        opacity: 10,
                      }
                    : {
                        opacity: 0,
                      },
                  {
                    transition: "opacity 0.6s",
                  },
                ]}
              />
            </ListItemButton>
          </ListItem>
          <ListItem>
            <ListItemButton onClick={ToggleCountry} >
              <ListItemIcon
                sx={[
                  open
                    ? { justifyContent: "initial" }
                    : { alignItems: "center" },
                ]}
              >
                <AddLocationAltOutlined />
              </ListItemIcon>
              <ListItemText
                primary="Country"
                sx={[
                  open
                    ? {
                        opacity: 10,
                      }
                    : {
                        opacity: 0,
                      },
                  {
                    transition: "opacity 0.6s",
                  },
                ]}
              />
            </ListItemButton>
          </ListItem>
          <ListItem>
            <ListItemButton onClick={()=>Navigate('/every')} >
              <ListItemIcon
                sx={[
                  open
                    ? { justifyContent: "initial" }
                    : { alignItems: "center" },
                ]}
              >
                <AllInclusiveOutlined />
              </ListItemIcon>
              <ListItemText
                primary="Every"
                sx={[
                  open
                    ? {
                        opacity: 10,
                      }
                    : {
                        opacity: 0,
                      },
                  {
                    transition: "opacity 0.6s",
                  },
                ]}
              />
            </ListItemButton>
          </ListItem>
         
        </List>
      </Drawer>
      <LanguageDialog open={openLang} ToggleLanguage={ToggleLanguage} />
      <Country_DialogBox open={openCountry} ToggleCountry={ToggleCountry} />
    </>
  );
}

export default DrawerSide;
