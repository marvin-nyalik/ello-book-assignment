import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import Drawer from "@mui/material/Drawer";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useTheme } from "@mui/material/styles";
import { Link } from "react-router-dom";

export default function Layout({ children }) {
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("sm"));
  const [drawerOpen, setDrawerOpen] = React.useState(false);

  const handleMenuClick = () => {
    setDrawerOpen(true);
  };

  const handleCloseClick = () => {
    setDrawerOpen(false);
  };

  const handleLinkClick = () => {
    if (isSmallScreen) {
      setDrawerOpen(false);
    }
  };

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar
        position="static"
        sx={{ backgroundColor: theme.palette.primary.main }}
      >
        <Toolbar>
          {isSmallScreen && (
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="menu"
              sx={{ mr: 2 }}
              onClick={handleMenuClick}
            >
              <MenuIcon />
            </IconButton>
          )}
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Ello Books
          </Typography>
          {!isSmallScreen && (
            <>
              <Link to="/" onClick={handleLinkClick}>
                <Button color="inherit">Books</Button>
              </Link>
              <Link to="/read-list" onClick={handleLinkClick}>
                <Button color="inherit">Read List</Button>
              </Link>
            </>
          )}
        </Toolbar>
      </AppBar>
      {children}
      <Drawer
        anchor="left"
        open={drawerOpen}
        onClose={handleCloseClick}
        ModalProps={{ keepMounted: true }}
      >
        <Box
          sx={{
            width: "100vw",
            height: "100vh",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            backgroundColor: theme.palette.background.paper,
          }}
        >
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="close"
            sx={{ position: "absolute", top: 10, right: 10 }}
            onClick={handleCloseClick}
          >
            <CloseIcon />
          </IconButton>
          <Link to="/" onClick={handleLinkClick}>
            <Button color="inherit">Books</Button>
          </Link>
          <Link to="/read-list" onClick={handleLinkClick}>
            <Button color="inherit">Read List</Button>
          </Link>
        </Box>
      </Drawer>
    </Box>
  );
}