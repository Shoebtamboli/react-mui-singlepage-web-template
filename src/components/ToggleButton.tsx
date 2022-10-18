import { Box, IconButton, useTheme } from "@mui/material";
import Brightness3Icon from "@mui/icons-material/Brightness3";
import FlareIcon from "@mui/icons-material/Flare";
import React from "react";
import { ColorContext } from "../ColorContext";
import { ToolTip } from "./ToolTip";

export const ToggleButton = () => {
  const theme = useTheme();
  const colorMode = React.useContext(ColorContext);

  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "right",
        justifyContent: "right"
      }}
    >
      <ToolTip>
        <IconButton
          aria-label={
            theme.palette.mode === "dark" ? "Set light theme" : "Set dark theme"
          }
          edge="end"
          sx={{ ml: 1 }}
          onClick={colorMode.toggleColorMode}
          color="inherit"
        >
          {theme.palette.mode === "dark" ? <FlareIcon /> : <Brightness3Icon />}
        </IconButton>
      </ToolTip>
    </Box>
  );
};
