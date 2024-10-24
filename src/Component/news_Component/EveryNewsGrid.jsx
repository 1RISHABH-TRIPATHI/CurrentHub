import React, { useState } from "react";
import { useGetEveryNewsQuery } from "../../Store/LatestNewsApiSlice";
import NotFoundPage from "../Errror_Page/notFoundPage";
import TopNewsCard from "../Skeleton/TopNewsCard";
import {
  Box,
  Button,
  InputAdornment,
  TextField,
  Typography,
} from "@mui/material";
import { useSelector } from "react-redux";
import NeswTop_Card from "./NewsTopCard";
import { SearchOutlined } from "@mui/icons-material";

function EveryNewsGrid() {
  const [page, setPage] = useState(1);
  const [search, setSearch] = useState("a");
  const lang = useSelector((state) => state.Language.languageCode);
  const { data, isloading, isFetching, isError } = useGetEveryNewsQuery({
    lang,
    page,
    search,
  });
  if (isError) return <NotFoundPage />;
 
  return (
    <>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          gap: "20px",
          mb: "10px",
          pb: "20px",
          borderBottom: "2px solid",
        }}
      >
        <Typography
          sx={{
            fontFamily: "monospace",
            fontSize: { xs: "20px", md: "26px" },
          }}
        >
          Search
        </Typography>
        <TextField
          variant="outlined"
          placeholder="Minds Over Matter"
          fullWidth
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <SearchOutlined />
              </InputAdornment>
            ),
            sx: {
              borderRadius: "10px",
              fontFamily: "monospace",
            },
          }}
          onChange={(e) => {
            setSearch(e.target.value);
          }}
        />
      </Box>
      {isloading || isFetching ? (
        <TopNewsCard />
      ) : data?.articles?.length === 0 ? (
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
            onClick={() => {}}
          >
            Go Back
          </Button>
        </Box>
      ) : (
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
              disabled={page <= 1} // Disable on first page or during fetch
              onClick={() => {
                setPage(page - 1);
              }}
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
              disabled={page < 0} // Disable if less than 10 items (end of pages)
              sx={{
                ":focus": {
                  outline: "none",
                },
              }}
              onClick={() => {
                setPage(page + 1);
              }}
            >
              Next
            </Button>
          </Box>
        </>
      )}
    </>
  );
}

export default EveryNewsGrid;
