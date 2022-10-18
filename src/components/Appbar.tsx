import React from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";

import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import AdbIcon from "@mui/icons-material/Adb";
import MenuItem from "@mui/material/MenuItem";
import { ToggleButton } from "./ToggleButton";

import NavLink from "./NavLink";
//const pages = ["Products", "Pricing", "Blog", "Contact"];

const pages = [
  {
    menuTitle: "Products",
    pageURL: "#products"
  },
  {
    menuTitle: "Pricing",
    pageURL: "#pricing"
  },
  {
    menuTitle: "Blog",
    pageURL: "#blog"
  },
  {
    menuTitle: "Contact",
    pageURL: "#contact"
  }
];

export const Appbar = () => {
  const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(
    null
  );

  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  return (
    <AppBar position="static" color="transparent" sx={{ boxShadow: "none" }}>
      <Container>
        <Toolbar id="back-to-top-anchor">
          <AdbIcon sx={{ display: { xs: "none", md: "flex" }, mr: 1 }} />
          <Typography
            variant="h6"
            noWrap
            component="a"
            href="#"
            sx={{
              mr: 2,
              display: { xs: "none", md: "flex" },
              fontFamily: "monospace",
              fontWeight: 700,
              letterSpacing: ".3rem",
              color: "inherit",
              textDecoration: "none"
            }}
          >
            LOGO
          </Typography>
          <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "left"
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "left"
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: "block", md: "none" }
              }}
            >
              {pages.map((page, index) => (
                <MenuItem key={index} onClick={handleCloseNavMenu}>
                  {/* <Typography textAlign="center">{page.menuTitle}</Typography> */}
                  <NavLink key={index} page={page} />
                </MenuItem>
              ))}
            </Menu>
          </Box>
          <AdbIcon sx={{ display: { xs: "flex", md: "none" }, mr: 1 }} />
          <Typography
            variant="h5"
            noWrap
            component="a"
            href="#"
            sx={{
              mr: 2,
              display: { xs: "flex", md: "none" },
              flexGrow: 1,
              fontFamily: "monospace",
              fontWeight: 700,
              letterSpacing: ".3rem",
              color: "inherit",
              textDecoration: "none"
            }}
          >
            LOGO
          </Typography>
          <Box
            justifyContent="flex-end"
            alignItems="center"
            sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}
          >
            {pages.map((page, index) => (
              <NavLink key={index} page={page} />
            ))}
          </Box>
          <ToggleButton />
        </Toolbar>
      </Container>
    </AppBar>
  );
};
