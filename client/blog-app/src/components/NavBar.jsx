import {
  AppBar,
  Container,
  Toolbar,
  Tooltip,
  Typography,
  Box,
  Button,
  IconButton,
  Menu,
  MenuItem,
  //Avatar,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import AdbIcon from "@mui/icons-material/Adb";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const NavBar = () => {
  const [navMenuBtn, setNavMenuBtn] = useState(false);
  const [profileMenuBtn, setProfileMenuBtn] = useState(false);
  const navigate = useNavigate();
  return (
    <>
      <AppBar position="fixed" sx={{ zIndex: "1" }}>
        <Container maxWidth="xl">
          <Toolbar disableGutters>
            {/* display only when screen size medium */}
            <AdbIcon sx={{ display: { xs: "none", md: "flex" }, mr: 1 }} />
            <Typography
              variant="h6"
              noWrap
              component="a"
              href="/"
              sx={{
                mr: 2,
                display: { xs: "none", md: "flex" },
                fontFamily: "monospace",
                fontWeight: 700,
                letterSpacing: ".3rem",
                color: "inherit",
                textDecoration: "none",
              }}
            >
              LOGO
            </Typography>

            {/* display only when screen size small */}
            <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
              <IconButton
                size="large"
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={() => setNavMenuBtn((prev) => !prev)}
                color="inherit"
              >
                <MenuIcon />
              </IconButton>
              <Menu
                id="menu-appbar"
                anchorOrigin={{
                  vertical: 60,
                  horizontal: "left",
                }}
                keepMounted
                transformOrigin={{
                  vertical: "top",
                  horizontal: "left",
                }}
                open={navMenuBtn}
                onClose={() => setNavMenuBtn((prev) => !prev)}
                sx={{
                  display: { xs: "block", md: "none" },
                }}
              >
                <MenuItem onClick={()=>{}}>
                  <Typography
                    textAlign="center"
                    onClick={() => navigate("/login")}
                  >
                    Login
                  </Typography>
                </MenuItem>
                <MenuItem onClick={()=>{}}>
                  <Typography textAlign="center">Profile</Typography>
                </MenuItem>
                <MenuItem onClick={()=>{}}>
                  <Typography textAlign="center">Logout</Typography>
                </MenuItem>
              </Menu>
            </Box>

            <AdbIcon sx={{ display: { xs: "flex", md: "none" }, mr: 1 }} />
            <Typography
              variant="h5"
              noWrap
              component="a"
              href="/"
              sx={{
                mr: 2,
                display: { xs: "flex", md: "none" },
                flexGrow: 1,
                fontFamily: "monospace",
                fontWeight: 700,
                letterSpacing: ".3rem",
                color: "inherit",
                textDecoration: "none",
              }}
            >
              LOGO
            </Typography>
            {/* //menu for medium size*/}
            <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
              <Button
                onClick={() => navigate("/profile")}
                sx={{ my: 2, color: "white", display: "block" }}
              >
                Profile
              </Button>

              <Button
                onClick={() => navigate("/login")}
                sx={{ my: 2, color: "white", display: "block" }}
              >
                Login
              </Button>
            </Box>
            {/* profile menu */}
            <Box sx={{ flexGrow: 0 }}>
              <Tooltip title="Open settings">
                <IconButton
                  onClick={() => setProfileMenuBtn((prev) => !prev)}
                  sx={{ p: 0 }}
                >
                  {/* <Avatar alt="Profile" src="/static/images/avatar/2.jpg" /> */}
                  <AccountCircleIcon
                    fontSize="large"
                    sx={{ background: "white", borderRadius: "5rem" }}
                  />
                </IconButton>
              </Tooltip>
              <Menu
                sx={{ mt: "45px" }}
                id="menu-appbar"
                //anchorEl={anchorElUser}
                anchorOrigin={{
                  vertical: "top",
                  horizontal: "right",
                }}
                keepMounted
                transformOrigin={{
                  vertical: "top",
                  horizontal: "right",
                }}
                open={profileMenuBtn}
                onClose={() => setProfileMenuBtn((prev) => !prev)}
              >
                <MenuItem onClick={()=>navigate('/account')}>
                  <Typography textAlign="center">Account</Typography>
                </MenuItem>
              </Menu>
            </Box>
          </Toolbar>
        </Container>
      </AppBar>
    </>
  );
};
export default NavBar;
