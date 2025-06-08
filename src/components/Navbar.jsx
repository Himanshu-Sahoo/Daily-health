// Navbar.jsx
import React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';
import Logo from '../assets/demologo.jpg'; // use your actual logo path

const Navbar = () => {
  return (
    <AppBar position="sticky" sx={{ zIndex: 1100 }} color="primary">
      <Toolbar sx={{ display: 'flex', justifyContent: 'space-between' }}>
        
        {/* Left side: Logo + Name */}
        <Stack direction="row" alignItems="center" spacing={1}>
          <img src={Logo} alt="logo" style={{ width: 40, height: 40 }} />
          <Typography variant="h6" component="div">
            Daily Life
          </Typography>
        </Stack>

        {/* Right side: Nav Links + Avatar */}
        <Box sx={{ display: 'flex', gap: 2 }}>
          <Button color="inherit">Home</Button>
          <Button color="inherit">My Profile</Button>
          <Button color="inherit">My Appointment</Button>
          <Button color="inherit">Book Appointment</Button>
          <Button color="inherit">Modules</Button>
          <Button variant="contained" sx={{backgroundColor: '#00b33c',borderRadius: '50px'}}>Logout</Button>
        
        <Avatar alt="User" src="https://i.pravatar.cc/150?img=3" />
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
