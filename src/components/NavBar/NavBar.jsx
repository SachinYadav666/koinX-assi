import React, { useState } from "react";
import {
  AppBar,
  Box,
  Button,
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Toolbar,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { Link } from "react-router-dom";
import logo from "../../assets/Logo.svg";

// Constants
const drawerWidth = 240;
const navItems = ["Crypto Taxes", "Free Tools", "Resource Center"];

function NavBar(props) {
  // State
  const { window } = props;
  const [mobileOpen, setMobileOpen] = useState(false);

  // Functions
  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  // Drawer Component
  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: "center" }}>
      <List>
        {navItems.map((item) => (
          <Link
            key={item}
            to={`/${item.toLowerCase().replace(" ", "-")}`}
            style={{ textDecoration: "none" }}
          >
            <ListItem key={item} disablePadding>
              <ListItemButton sx={{ textAlign: "center" }}>
                <ListItemText primary={item} />
              </ListItemButton>
            </ListItem>
          </Link>
        ))}
      </List>
    </Box>
  );

  // Container for Drawer
  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: "flex" }}>
      {/* AppBar */}
      <AppBar
        component="nav"
        sx={{
          bgcolor: "white",
          padding: { lg: "10px 50px" },
          height: { lg: "86px" },
          position: "static",
        }}
      >
        <Toolbar
          sx={{
            bgcolor: "white",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          {/* Logo */}
          <Box>
            <Link to={`/`} style={{ textDecoration: "none" }}>
              <img
                src={logo}
                alt="Logo"
                style={{
                  height: "70px",
                  display: { sm: "block" },
                  alignSelf: "start",
                }}
              />
            </Link>
          </Box>

          {/* Menu Icon */}
          <IconButton
            color="black"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ display: { sm: "none" } }}
          >
            <MenuIcon sx={{ fontSize: "32px" }} />
          </IconButton>

          {/* Navigation Links */}
          <Box
            sx={{
              display: {
                xs: "none",
                sm: "block",
                display: "flex",
                justifyContent: "space-between",
              },
            }}
          >
            {navItems.map((item) => (
              <Link
                key={item}
                to={`/${item.toLowerCase().replace(" ", "-")}`}
                style={{ textDecoration: "none" }}
              >
                <Button
                  key={item}
                  sx={{
                    color: "#000",
                    marginRight: "30px",
                    fontSize: "18px",
                    textTransform: "none",
                  }}
                >
                  {item}
                </Button>
              </Link>
            ))}

            <Link to={`/get-started`} style={{ textDecoration: "none" }}>
              <Button
                variant="contained"
                sx={{
                  bgcolor: "#0f53fc",
                  borderRadius: "7px",
                  height: "43px",
                  fontSize: "18px",
                  textTransform: "none",
                }}
              >
                Get Started
              </Button>
            </Link>
          </Box>
        </Toolbar>
      </AppBar>

      {/* Drawer */}
      <nav>
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{ keepMounted: true }}
          anchor="right"
          sx={{
            display: { xs: "block", sm: "none" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
        >
          {drawer}
        </Drawer>
      </nav>
    </Box>
  );
}

export default NavBar;
