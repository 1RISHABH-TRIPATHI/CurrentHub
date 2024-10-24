import React, { useEffect, useState } from "react";
import Group_Card from "./Group_Card";
import { useDispatch, useSelector } from "react-redux";
import { AddAllGroup, FetchError, fetchLoading } from "../Store/NewsDataGroup";
import { Box } from "@mui/material";
import NotFoundPage from "./Errror_Page/notFoundPage";

export default function Category() {
  const dispatch = useDispatch();
  const { loading, errorMessage, list } = useSelector(state=>state.Group);
  const [refresh,setRef]=useState(1)
  useEffect(()=>{
    try {
      dispatch(fetchLoading());
    setTimeout(()=>{
      dispatch(AddAllGroup(listAllData));
    },1000)
    } catch (error) {
      dispatch(FetchError());
    }
    
  },[dispatch,refresh])
  
  if(errorMessage){
    return <NotFoundPage errorMessage={errorMessage} />
  }
  return (
    <Box
      sx={{
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "space-around",
        gap: "20px",
      }}
    >
      {list.map((Item) => {
        return <Group_Card loading={loading} img={Item.img} key={Item.id} s={Item.s} type={Item.category} />;
      })}
    </Box>
  ); 
}

const listAllData = [
  { "id": 1, "category": "business", "img": "https://th.bing.com/th/id/OIP.AIJpBxiQGSIFAlOOEqENFQHaE8?rs=1&pid=ImgDetMain" },
  { "id": 2, "category": "crime", "img": "https://th.bing.com/th/id/OIP.GhgvO8uC0ULmWQriC8p4GgHaEo?rs=1&pid=ImgDetMain" },
  { "id": 3, "category": "domestic", "img": "https://th.bing.com/th/id/OIP.ihC40NWrdIxXrKhGZWrIUwHaEf?rs=1&pid=ImgDetMain" },
  { "id": 4, "category": "education", "img": "https://th.bing.com/th/id/OIP.mM8CqrkGjjjqmXmxZ8PBFgHaE8?rs=1&pid=ImgDetMain" },
  { "id": 5, "category": "entertainment", "img": "https://th.bing.com/th/id/OIP.VU6HnN-aMjc-gu2qndQ0MQHaEw?rs=1&pid=ImgDetMain" },
  { "id": 6, "category": "environment", "img": "https://th.bing.com/th/id/OIP.5G3bORYokmDEjMAyMVXIkgHaE5?rs=1&pid=ImgDetMain" },
  { "id": 7, "category": "food", "img": "https://th.bing.com/th/id/OIP.ekgX4a7JMIaoe0649-tqKQHaE8?rs=1&pid=ImgDetMain" },
  { "id": 8, "category": "health", "img": "https://pristacorp.com/wp-content/uploads/2017/11/shutterstock_693442927.jpg" },
  { "id": 9, "category": "lifestyle", "img": "https://th.bing.com/th/id/OIP.HOIfs22d1QxBTE1RJpSEzAHaHa?w=800&h=800&rs=1&pid=ImgDetMain" },
  { "id": 10, "category": "other", "img": "https://th.bing.com/th/id/OIP.jbgurBJbbBIjt61f7ADnUgHaEH?rs=1&pid=ImgDetMain" },
  { "id": 11, "category": "politics", "img": "https://th.bing.com/th/id/OIP.ylAdVn8VeV-VZJFcF-S55gHaEr?w=1300&h=821&rs=1&pid=ImgDetMain" },
  { "id": 12, "category": "science", "img": "https://img.freepik.com/premium-photo/technology-research-laboratory-microbiology-science-high-quality-photo_163305-263482.jpg" },
  { "id": 13, "category": "sports", "img": "https://wallpaperaccess.com/full/1624817.jpg" },
  { "id": 14, "category": "technology", "img": "https://wallpaperset.com/w/full/b/3/3/436108.jpg" },
  { "id": 15, "category": "top", "img": "https://th.bing.com/th/id/OIP.0ZalwxYmZDeure9CxAihXgHaE7?w=1078&h=718&rs=1&pid=ImgDetMainhttps://th.bing.com/th/id/OIP.jbgurBJbbBIjt61f7ADnUgHaEH?rs=1&pid=ImgDetMain" },
  { "id": 16, "category": "tourism", "img": "https://images.hdqwalls.com/download/travel-hd-2880x1800.jpg" },
  { "id": 17, "category": "world", "img": "https://thumbs.dreamstime.com/b/top-view-globe-world-map-high-quality-beautiful-photo-concept-resolution-231119568.jpg" }
]
