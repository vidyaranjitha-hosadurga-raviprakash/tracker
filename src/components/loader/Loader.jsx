import React from "react";
import { Backdrop, CircularProgress, Box, Typography } from "@mui/material";
export const Loader = ({ progressLabelName }) => {
  return (
    <Backdrop
      sx={{ color: "#fff", zIndex: (theme) => theme.zIndex.drawer + 1 }}
      open={true}
    >
      <Box sx={{ position: "relative", display: "inline-flex" }}>
        <CircularProgress color="inherit" size={"5rem"} />
        <Box
          sx={{
            top: 0,
            left: 0,
            bottom: 0,
            right: 0,
            position: "absolute",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Typography
            sx={{ fontSize: "0.7rem" }}
            component="div"
            color="text.secondary"
          >
            {progressLabelName || ""}
          </Typography>
        </Box>
      </Box>
    </Backdrop>
  );
};
