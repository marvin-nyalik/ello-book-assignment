import * as React from "react";
import CircularProgress from "@mui/material/CircularProgress";
import Box from "@mui/material/Box";
import { useTheme } from "@mui/material/styles";

const Loading = () => {
  const theme = useTheme();

  return (
    <div
      className="spinner"
      style={{
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: 100,
          width: 100,
        }}
      >
        <CircularProgress
          sx={{ color: theme.palette.primary.steelBlue }}
        />
      </Box>
    </div>
  );
};

export default Loading;
