import React from 'react';
import { Box, Typography, Button, Tabs, Tab, Card, CardContent, Avatar, Divider } from '@mui/material';

const AppointmentsDashboard = () => {
  return (
    <Box display="flex" gap={4} p={4} bgcolor="#fafafa">
      
      {/* Left Side: Appointments */}
      <Box flex={3}>
        <Typography variant="h5" fontWeight="bold" mb={1}>My Appointments</Typography>
        <Typography variant="body2" mb={2} color="text.secondary">
          Manage and track all your healthcare appointments.
        </Typography>

        <Tabs value={0} textColor="primary" indicatorColor="primary">
          <Tab label="Upcoming" />
          <Tab label="Past" />
        </Tabs>

        {/* Appointment Card 1 */}
        <Card variant="outlined" sx={{ mt: 3, display: 'flex', p: 2 }}>
          <Box flex={1}>
            <Typography variant="subtitle1" fontWeight="bold">Dr. Sarah Johnson</Typography>
            <Typography variant="body2" color="text.secondary">
              Cardiologist - Heartcare Clinic, Downtown
            </Typography>
            <Button variant="contained" size="small" sx={{ mt: 4 ,backgroundColor: '#f1eee8', color: 'black' ,borderRadius: '50px',px: 2,py: 0.5,fontSize: '0.7rem' }}>Reschedule</Button>
          </Box>
          <Avatar
            variant="rounded"
            src="https://randomuser.me/api/portraits/men/32.jpg"
            sx={{ width: 180, height: 180 }}
          />
        </Card>

        {/* Appointment Card 2 */}
        <Card variant="outlined" sx={{ mt: 2, display: 'flex', p: 2 }}>
          <Box flex={1}>
            <Typography variant="subtitle1" fontWeight="bold">Dr. Michael Lee</Typography>
            <Typography variant="body2" color="text.secondary">
              Dermatologist - Skin Solutions, Uptown
            </Typography>
            <Button variant="contained"  size="small" sx={{ mt: 4 ,backgroundColor: '#f1eee8', color: 'black' ,borderRadius: '50px',px: 2,py: 0.5,fontSize: '0.7rem' }}>Cancel</Button>
          </Box>
          <Avatar
            variant="rounded"
            src="https://randomuser.me/api/portraits/men/45.jpg"
            sx={{ width: 180, height: 180 }}
          />
        </Card>
      </Box>

      {/* Right Side: Overview */}
      <Box flex={1} display="flex" flexDirection="column" gap={2}>
        <Card variant="outlined" sx={{ p: 2 }}>
          <Typography variant="subtitle2" color="text.secondary">Today's Overview</Typography>
          <Typography variant="body2" mt={1}>
            <strong>Next Appointment:</strong> 10:00 AM, Dr. Sarah Johnson
          </Typography>
          <Button variant="contained"  size="small" sx={{ mt: 4 ,backgroundColor: '#f1eee8', color: 'black' ,borderRadius: '40px',px: 2,py: 0.5,fontSize: '0.7rem' }}>
            Starts in 1hr 20min
          </Button>
        </Card>

        <Card variant="outlined" sx={{ p: 2 }}>
          <Typography variant="subtitle2" color="text.secondary">Health Tip of the Day</Typography>
          <Typography variant="body2" mt={1}>
            Stay hydrated and take 10k steps today
          </Typography>
        </Card>

        <Card variant="outlined" sx={{ p: 2 }}>
          <Typography variant="subtitle2" color="text.secondary">Notifications</Typography>
          <Typography variant="body2" mt={1}>
            You have 1 upcoming session today
          </Typography>
          <Button variant="contained" size="small" sx={{ mt: 4 ,backgroundColor: '#f1eee8', color: 'black' ,borderRadius: '40px',px: 2,py: 0.5,fontSize: '0.7rem'}}>View Calendar</Button>
        </Card>
      </Box>
    </Box>
  );
};

export default AppointmentsDashboard;
