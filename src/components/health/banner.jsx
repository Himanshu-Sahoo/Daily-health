import React from 'react';
import { Box, Typography, Button } from '@mui/material';

export default function Banner() {
  return (
    <Box
      sx={{
        position: 'relative',
        backgroundImage: 'url("/images/hero.jpg")',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        height: { xs: 300, sm: 400, md: 450 },
        display: 'flex',
        alignItems: 'center',
        px: { xs: 2, sm: 8 },
        color: 'white',
      }}
    >
      {/* Overlay for contrast */}
      <Box
        sx={{
          position: 'absolute',
          width: '100%',
          height: '100%',
          backgroundColor: 'rgba(0, 0, 0, 0.7)',
          top: 0,
          left: 0,
        }}
      />
      
      {/* Content */}
      <Box sx={{ position: 'relative', zIndex: 1 }}>
        <Typography variant="h4" fontWeight="bold" gutterBottom>
          Empower Your<br />
           Health Journey<br />
            Daily
        </Typography>
        <Button variant="contained" color="success">
          Get Started
        </Button>
      </Box>
    </Box>
  );
}
