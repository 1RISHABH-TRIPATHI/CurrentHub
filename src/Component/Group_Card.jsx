import { Archive, ArrowRightAlt, RuleRounded, Star } from "@mui/icons-material";
import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  CardMedia,
  Divider,
  Skeleton,
  Typography,
} from "@mui/material";
import React from "react";
import { useDispatch } from "react-redux";
import { setCategory } from "../Store/NewsDataGroup";
import { useNavigate } from "react-router-dom";

function Group_Card({ type, img, loading }) {
  const Navigate = useNavigate();
  const dispatch = useDispatch();

  return (
    <>
      <Card
        sx={{
          width: { xs: "350px", md: "430px" },
          mb: "20px",
        }}
      >
        {loading ? (
          <CardMedia>
            <Skeleton variant="rectangular" height={200} />
          </CardMedia>
        ) : (
          <CardMedia height={200} component={"img"} image={img} />
        )}
        {loading ? (
          <CardHeader
            title={<Skeleton variant="text" sx={{ borderRadius: 1 }} />}
          />
        ) : (
          <CardHeader
            sx={{
              background:
                "-webkit-linear-gradient(304deg, rgba(16,14,174,1) 15%, rgba(3,0,255,1) 20%, rgba(16,13,191,1) 21%, rgba(16,13,196,1) 64%, rgba(25,0,255,1) 68%, rgba(31,13,196,1) 70%, rgba(28,4,244,1) 77%, rgba(21,35,171,1) 80%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
            titleTypographyProps={{
              fontFamily: "monospace",
              fontSize: "32px",
              textTransform: "uppercase",
              fontWeight: "600",
            }}
            title={type}
          />
        )}
        <Divider sx={{ backgroundColor: "blue" }} />
        {loading ? (
          <CardContent sx={{ paddingY: 1 }}>
            <Skeleton variant="text" width="90%" height={20} />
          </CardContent>
        ) : (
          <CardContent>
            <Typography>
              Stay updated with the latest and odd {type} news.
            </Typography>
          </CardContent>
        )}
        {loading ? (
          <CardActions sx={{ display: "flex", justifyContent: "center" }}>
            <Skeleton
              variant="rectangular"
              width={"80%"}
              height={40}
              sx={{ borderRadius: 2 }}
            />
          </CardActions>
        ) : (
          <CardActions
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Button
              variant="contained"
              onClick={() => {
                dispatch(setCategory(type));
                Navigate("/News");
              }}
              endIcon={<ArrowRightAlt />}
              sx={{
                ":focus": {
                  outline: "none",
                },
                width: "90%",
                background: "navy",
              }}
            >
              Go
            </Button>
          </CardActions>
        )}
      </Card>
    </>
  );
}

export default Group_Card;
