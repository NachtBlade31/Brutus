import React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import  LockIcon  from "@mui/icons-material/Lock";
import LockOpenIcon from "@mui/icons-material/LockOpen";
const Navbar = () => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          ></IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Brutus 
          </Typography>
          <Button color="inherit"> Encrypt <LockIcon /></Button>
          <Button color="inherit">Decrypt  <LockOpenIcon/> </Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default Navbar;
