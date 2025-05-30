import React from 'react';
import { Box, Typography, Button, Container } from '@mui/material';

export default function Banner() {
  return (
    <Box sx={{ backgroundColor: '#f0f0f0', py: 4, px: 2 }}>
      {/* Margin around the actual banner */}
      <Container disableGutters maxWidth="lg">
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
            borderRadius: 2,
            overflow: 'hidden',
          }}
        >
          {/* Overlay for dark contrast */}
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
          <Box sx={{ position: 'relative', zIndex: 2 }}>
            <Typography
              variant="h2"
              fontWeight="bold"
              gutterBottom
              sx={{ fontSize: { xs: '2rem', sm: '2.5rem', md: '3rem' } }}
            >
              Empower Your<br />
              Health Journey<br />
              Daily
            </Typography>

            <Button variant="contained" color="success">
              Get Started
            </Button>
          </Box>
        </Box>
      </Container>
    </Box>
  );
}
