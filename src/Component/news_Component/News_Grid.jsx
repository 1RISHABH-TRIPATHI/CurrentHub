import { Box, Button, Typography } from "@mui/material";
import { useGetTasksQuery } from "../../Store/LatestNewsApiSlice";
import News_Card from "./news_Card";
import { useState } from "react";
import NewsCardSkeleton from "../Skeleton/newsCardSkeleton";
import NotFoundPage from "../Errror_Page/notFoundPage";
import { useDispatch, useSelector } from "react-redux";
import { setCountry, setCountryId } from "../../Store/CountrySlice";
import { setLanguageCode } from "../../Store/LanguageSlice";

export default function News_Grid() {
  const [pageToken, setPageToken] = useState([null]);

  const [currentPage, setCurrentPage] = useState(0);
  const { languageCode, Priority } = useSelector((state) => state.Language);
  const country = useSelector((state) => state.Country.countryCode);
  const Category = useSelector((state) => state.Group.Category);
  const dispatch=useDispatch();
  const page = pageToken[currentPage];

  const { data, isLoading, isError, isFetching } = useGetTasksQuery({
    page,
    lang: languageCode,
    country,
    Category,
    Priority,
  });
  if (isLoading || isFetching) {
    return <NewsCardSkeleton />;
  }
  if (isError) {
    return <NotFoundPage />;
  }
  if (data?.results?.length == 0) {
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
              setCurrentPage(0);
              dispatch(setCountry("all"));
              dispatch(setCountryId(0));
              dispatch(setLanguageCode('en'))
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
        {data?.results.map((Item, index) => {
          return (
            <News_Card
              key={index}
              title={Item.title}
              pubDate={Item.pubDate}
              link={Item.link}
              image_url={Item.image_url}
              description={Item.description}
              country={Item.country[0]}
              creator={Item.creator}
              source_name={Item.source_name}
              category={Item.category}
              source_icon={Item.source_icon}
            />
          );
        })}
      </Box>
      <Box display="flex" justifyContent="space-between" mt={2}>
        <Button
          variant="contained"
          disabled={currentPage === 0 || isFetching} // Disable on first page or during fetch
          onClick={() => {
            if (currentPage > 0) setCurrentPage((pre) => pre - 1);
          }}
        >
          Previous
        </Button>

        <Button
          variant="contained"
          disabled={!data?.nextPage || isFetching} // Disable if less than 10 items (end of pages)
          onClick={() => {
            if (data?.nextPage) {
              setPageToken((pretoken) => [...pretoken, data?.nextPage]);
              setCurrentPage((pre) => pre + 1);
            }
          }}
        >
          Next
        </Button>
      </Box>
    </>
  );
}
