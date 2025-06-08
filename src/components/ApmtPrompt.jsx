// AppointmentPrompt.jsx
import React from 'react';
import { Box, Typography, Button, Grid, Paper } from '@mui/material';
import doctor from "../assets/doctor-clip.avif"

function AppointmentPrompt() {
  return (
    <Box sx={{ p: 4 }}>
      <Grid container spacing={2} alignItems="center">
        
        {/* Left: Image */}
        <Grid item xs={12} md={6}>
          <Paper elevation={0} sx={{ textAlign: 'center',pr: { md: 18 } }}>
            <img
              src={doctor} // Update path accordingly
              alt="Doctor"
              style={{ width: '100%', maxWidth: 400, borderRadius: 10 }}
            />
          </Paper>
        </Grid>

        {/* Right: Text & Button */}
        <Grid item xs={12} md={6}>
          <Box textAlign={{ xs: 'center', md: 'left' }} sx={{ pl: { md: 10 } }}>
            <Typography variant="h6" fontWeight="bold" gutterBottom>
              No appointments yet
            </Typography>
            <Typography variant="body1" color="text.secondary" gutterBottom>
              Book one now and stay ahead with your health
            </Typography>
            <Button variant="contained" sx={{ mt: 2, backgroundColor: '#f1eee8', color: 'black' ,borderRadius: '50px',px: 3,py: 1, }} href="#contained-buttons">
             Book Appointment
            </Button>
          </Box>
        </Grid>

      </Grid>
    </Box>
  );
}

export default AppointmentPrompt;
