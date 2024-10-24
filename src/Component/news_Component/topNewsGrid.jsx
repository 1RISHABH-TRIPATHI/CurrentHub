import React, { useState } from "react";
import NotFoundPage from "../Errror_Page/notFoundPage";
import { useGetTopHeadingQuery } from "../../Store/LatestNewsApiSlice";
import { Box, Button, Typography } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { setCountry, setCountryId } from "../../Store/CountrySlice";
import NeswTop_Card from "./NewsTopCard";
import TopNewsCard from "../Skeleton/TopNewsCard";

export default function topNewsGrid() {
  let country = useSelector((state) => state.Country.countryCode);
  const lang=useSelector(state=>state.Language.languageCode);
  if(country=='all')
    country='us'
  const { data, isLoading, isError, isFetching } = useGetTopHeadingQuery({lang,country});
  const dispatch = useDispatch();
  if (isError) {
    return <NotFoundPage />;
  }
  if(isLoading || isFetching){
    return <Box>
      <TopNewsCard/>
    </Box>
  }
  if (data?.articles?.length == 0) {
    return (
      <>
        <Box>
          <img
            style={{
              maxWidth: "350px",
            }}
            src="https://res.cloudinary.com/duih8hld2/image/upload/v1728991368/news/tzxvpz5ajqrf7utvx8hy.jpg"
            alt=""
          />
          <Typography
            sx={{
              fontSize: "22px",
              fontFamily: "monospace",
            }}
          >
            NO News Available
          </Typography>
          <Typography
            sx={{
              fontFamily: "monospace",
            }}
          >
            It seems we couldn't find any news. Please try again later
          </Typography>
          <Button
            variant="contained"
            sx={{
              ":focus": {
                outline: "none",
              },
              mt: "10px",
            }}
            onClick={() => {
              dispatch(setCountry("all"));
              dispatch(setCountryId(2));
            }}
          >
            Go Back
          </Button>
        </Box>
      </>
    );
  }
  return (
    <>
      <Box
        sx={{
          display: "flex",
          flexWrap: "wrap",
          alignContent: "center",
          alignItems: "center",
          justifyContent: "space-around",
        }}
      >
        {data.articles?.map((Item, index) => {
          return (
            <Box key={index}>
              <NeswTop_Card
                urlToImage={Item.urlToImage}
                title={Item.title}
                url={Item.url}
                description={Item.description}
                author={Item.author}
               
              />
            </Box>
          );
        })}
      </Box>
      <Box display="flex" justifyContent="space-between" mt={2}>
        <Button
          variant="contained"
          disabled={true} // Disable on first page or during fetch
          onClick={() => {}}
          sx={{
            ":focus": {
              outline: "none",
            },
          }}
        >
          Previous
        </Button>

        <Button
          variant="contained"
          disabled={true} // Disable if less than 10 items (end of pages)
          sx={{
            ":focus": {
              outline: "none",
            },
          }}
        >
          Next
        </Button>
      </Box>
    </>
  );
}
