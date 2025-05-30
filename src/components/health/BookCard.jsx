import React from 'react';
import { Grid, Paper, Typography, Box, Container } from '@mui/material';
import EventAvailableIcon from '@mui/icons-material/EventAvailable';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import PsychologyIcon from '@mui/icons-material/Psychology';

const cardData = [
  {
    title: 'Book Appointment',
    icon: <EventAvailableIcon fontSize="large" color="primary" />,
  },
  {
    title: 'View My Bookings',
    icon: <CalendarMonthIcon fontSize="large" color="primary" />,
  },
  {
    title: 'Mental Health Corner',
    icon: <PsychologyIcon fontSize="large" color="primary" />,
  },
];

export default function BookCard() {
  return (
    <Box sx={{ backgroundColor: '#f0f0f0', py: 4, my:2 }}>
      {/* Controls width and padding */}
      <Container maxWidth="lg">
        <Grid container spacing={3} justifyContent="center">
          {cardData.map((card, index) => (
            <Grid size={{ xs:12, sm:6, md:4}} key={index}>
              <Paper
                elevation={3}
                sx={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: 2,
                  p: 2,
                  height: '100%',
                  borderRadius: 2,
                  backgroundColor: '#fff',
                }}
              >
                {card.icon}
                <Typography variant="subtitle1" fontWeight="bold">
                  {card.title}
                </Typography>
              </Paper>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
}
