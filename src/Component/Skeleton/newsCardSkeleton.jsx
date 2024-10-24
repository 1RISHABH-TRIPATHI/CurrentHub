import React from "react";
import {
  Card,
  CardContent,
  Box,
  Skeleton,
  CardActions,
} from "@mui/material";
const CardSkeleton = () => (
  <Card sx={{ maxWidth: 700, m: 2, boxShadow: 3, borderRadius: 3 }}>
    <Skeleton
      variant="rectangular"
      sx={{
        width: { xs: "300px", md: "400px" },
        height: { xs: "140px", md: "180px" },
      }}
    />

    <CardContent>
      <Box display="flex" alignItems="center" gap={1} mb={1}>
        <Skeleton variant="circular" width={40} height={30} />
        <Skeleton variant="text" width="100%" />
      </Box>

      <Skeleton variant="text" width="80%" height={20} sx={{ mb: 1 }} />

      <Skeleton variant="text" width="100%" height={20} />
      <Skeleton variant="text" width="95%" height={20} />
      <Skeleton
        variant="text"
        width="90%"
        height={20}
        sx={{ mb: { xs: 2, md: 1 } }}
      />

      <Box display="flex" alignItems="center" gap={1} mt={1} mb={2}>
        <Skeleton width={20} height={30} />
        <Skeleton variant="text" width="60%" />
      </Box>

      <Box display="flex" gap={1} mb={2}>
        <Skeleton variant="rectangular" width={80} height={20} />
        <Skeleton variant="rectangular" width={80} height={20} />
      </Box>

      <Skeleton variant="rectangular" width={120} height={25} />

      <Box display="flex" alignItems="center" gap={1} mt={2}>
      <Skeleton width={20} height={30} />
        <Skeleton variant="text" width="50%" height={20} />
      </Box>
    </CardContent>

    <CardActions sx={{
      display:'flex',
      justifyContent:'center'
    }}  mb={2}>
      <Skeleton variant="rectangular" width={'90%'} height={36} />
    </CardActions>
  </Card>
);
const NewsCardSkeleton = () => {
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
        <CardSkeleton />
        <CardSkeleton />
        <CardSkeleton/>
        <CardSkeleton/>
      </Box>
      <Box display="flex" justifyContent="space-between" mt={2}>
        <Skeleton variant="rectangular" width={100} height={36} />
        <Skeleton variant="rectangular" width={100} height={36} />
      </Box>
    </>
  );
};
export default NewsCardSkeleton;
