import { Box, Card, CardActions, CardContent, CardMedia, Skeleton } from '@mui/material'
import React from 'react'

function NewsCard() {
  return (
    <>
      <Card sx={{ maxWidth: {xs:'300px',md:'400px'},minWidth:{xs:'250px',md:'380px'},  margin: "16px auto", boxShadow: 3 ,height:'500px'}} >
          <Skeleton variant='rectangular' height={200} />
          <CardContent sx={{
               mt:'10px'
          }} >
               <Skeleton sx={{
                    mb:2
               }}/>
               <Skeleton/>
               <Box sx={{display:'flex',gap:'10px',alignItems:'center',mt:'30px'}} >
                    <Skeleton width={30} height={60} />
                    <Skeleton width={'100%'} height={40} />
               </Box>
          </CardContent>
          <CardActions sx={{
               display:'flex',
               justifyContent:'center'
          }}>
               <Skeleton width={'90%'} height={50}  />
          </CardActions>
      </Card>
    </>
  )
}
const TopNewsCard=()=>{
    return <Box sx={{
     display: "flex",
          flexWrap: "wrap",
          alignItems: "center",
          justifyContent: "space-around",
          gap:'20px'
    }}>
          <NewsCard/>
          <NewsCard/>
          <NewsCard/>
          <NewsCard/>
     </Box>
}
export default TopNewsCard
