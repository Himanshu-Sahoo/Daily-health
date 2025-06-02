import React from 'react';
import {
  AppBar,
  Toolbar,
  Typography,
  Box,
  Button,
  Avatar,
  IconButton,
} from '@mui/material';
import LogoutIcon from '@mui/icons-material/Logout';
import MenuIcon from '@mui/icons-material/Menu';

export default function Navbar() {
  return (
    <AppBar position="static" elevation={0} sx={{ bgcolor: '#fff', color: '#000', px: 2 }}>
      <Toolbar sx={{ justifyContent: 'space-between' }}>
        {/* Left: Logo and Title */}
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
          <IconButton edge="start" color="inherit" aria-label="menu">
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" fontWeight="bold">
            Healthcare Dashboard
          </Typography>
        </Box>

        {/* Center: Navigation Links */}
        <Box sx={{ display: 'flex', gap: 3 }}>
          {['Home', 'My Profile', 'My Appointments', 'Book Appointment', 'Modules'].map((item) => (
            <Typography key={item} variant="body1" sx={{ cursor: 'pointer' }}>
              {item}
            </Typography>
          ))}
        </Box>

        {/* Right: Icons and Logout */}
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
          <Button variant="contained" color="success"  sx={{ textTransform: 'none' }}>
            Logout
          </Button>
          <Avatar sx={{ width: 32, height: 32 }}>R</Avatar>
          <Avatar sx={{ width: 32, height: 32 }}>C</Avatar>
          <Avatar sx={{ width: 32, height: 32 }}>A</Avatar>
          <Avatar src="https://via.placeholder.com/150" sx={{ width: 32, height: 32 }} />
        </Box>
      </Toolbar>
    </AppBar>
  );
}
