import React from 'react';
import { Grid, Paper, Typography, Box } from '@mui/material';
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
    <Box my={4} px={{ xs: 2, sm: 4 }}>
      <Grid container spacing={2} justifyContent="center">
        {cardData.map((card, index) => (
          <Grid item xs={12} sm={4} key={index}>
            <Paper
              elevation={3}
              sx={{
                display: 'flex',
                alignItems: 'center',
                gap: 2,
                p: 2,
                height: '100%',
                borderRadius: 2,
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
    </Box>
  );
}
