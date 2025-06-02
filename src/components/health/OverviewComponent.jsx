import React from 'react';
import { Box, Button, Typography, Divider, Grid, Paper } from '@mui/material';
import Sidebar from './Sidebar'; // Assuming Sidebar is in the same directory
export default function OverviewComponent() {
  return (
    <Box sx={{ bgcolor: '#fff', minHeight: '100vh', p: 4 }}>
      <Typography variant="h5" fontWeight="bold" mb={3}>Overview</Typography>

      <Grid container spacing={2} mb={3}>
        <Grid item xs={12} sm={6}>
          <Typography variant="body1" fontWeight="bold">Gender</Typography>
          <Typography variant="body2">Female</Typography>
        </Grid>
        <Grid item xs={12} sm={6}>
          <Typography variant="body1" fontWeight="bold">Date Of Birth</Typography>
          <Typography variant="body2" fontWeight="bold">January 1, 1980</Typography>
        </Grid>
        <Grid item xs={12} sm={6}>
          <Typography variant="body1" fontWeight="bold">Contact Source</Typography>
          <Typography variant="body2">Doctor's Office</Typography>
        </Grid>
      </Grid>

      <Box mb={3}>
        <Button variant="contained" color="success" fullWidth sx={{ mb: 1 }}>My Appointments</Button>
        <Button variant="outlined" fullWidth sx={{ mb: 1, bgcolor: '#f5f1eb' }}>Book Appointments</Button>
        <Button variant="outlined" fullWidth sx={{ bgcolor: '#f5f1eb' }}>Request Blood from Trust</Button>
      </Box>

      <Paper variant="outlined" sx={{ p: 2, display: 'flex', alignItems: 'center' }}>
        <Box sx={{ flexGrow: 1 }}>
          <Typography variant="subtitle1" fontWeight="bold">Latest Lab Reports</Typography>
          <Typography variant="body2" color="primary" sx={{ cursor: 'pointer' }}>View All</Typography>
        </Box>
        <Box component="img" src="https://via.placeholder.com/150" alt="lab" sx={{ width: 120, borderRadius: 2 }} />
      </Paper>

      <Divider sx={{ my: 4 }} />

      <Grid container spacing={2} justifyContent="center">
        <Grid item><Typography variant="body2">About Us</Typography></Grid>
        <Grid item><Typography variant="body2">Contact Us</Typography></Grid>
        <Grid item><Typography variant="body2">Privacy Policy</Typography></Grid>
      </Grid>

      <Box sx={{ textAlign: 'center', mt: 2 }}>
        <Typography variant="body2" color="textSecondary">Copyright © 2023 Healthcare Dashboard</Typography>
      </Box>
    </Box>
  );
}
