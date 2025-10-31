import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import { Link } from "react-router-dom"

export default function ButtonAppBar() {
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
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            ROYAL COMPANY
          </Typography>
          <Link to ="/Loginpage"
          style={{
                color: "white",
                fontWeight: 600,
                textDecoration: "none",
                 marginRight: "20px",
              }}>Login</Link>
               <Link to ="/Registration"
          style={{
                color: "white",
                fontWeight: 600,
                marginRight: "20px",
                textDecoration: "none",
              }}>Register</Link>
               <Link to ="/Users"
          style={{
                color: "white",
                fontWeight: 600,
                textDecoration: "none",
              }}>UsersList</Link>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
