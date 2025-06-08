import React from 'react';
import { Box, Typography, Avatar, Button, Rating } from '@mui/material';
import CallIcon from '@mui/icons-material/Call';
import MicIcon from '@mui/icons-material/Mic';

const AppointmentDetails = () => {
  return (
    <Box display="flex" minHeight="100vh" ml={4}>
      {/* Main Content */}
      <Box flex={1} p={4}>
        <Typography variant="h6" fontWeight="bold" gutterBottom>
          Appointment Details
        </Typography>

        {/* Patient Info */}
        <Box display="flex" alignItems="center" p={2} borderRadius={2} border="1px solid #eee" mb={3}>
          <Avatar
            variant="square"
            src="https://via.placeholder.com/150"
            sx={{ width: 190, height: 160 ,borderRadius: 5, border: '2px solid #c2c2f0', mr: 2 }}
          />
          <Box>
            <Typography fontWeight="bold">Name: Ipsita Kuanr</Typography>
            <Typography>Age: 64, Gender: Male</Typography>
            <Typography color="green">Phone No: 7377083147</Typography>
          </Box>
        </Box>

        {/* Description */}
        <Typography fontWeight="bold">Description</Typography>
        <Typography mb={2}>ugriuw3rwefjshjghriu3wyrs shgfsufsyraoi</Typography>

        {/* Doctor Section */}
        <Typography fontWeight="bold" mb={1}>Doctor</Typography>
        <Box
          display="flex"
          justifyContent="space-between"
          alignItems="center"
          p={2}
          border="1px solid #eee"
          borderRadius={2}
          mb={3}
        >
          <Box>
            <Typography fontWeight="bold">Dr. Psycho</Typography>
            <Box display="flex" alignItems="center" gap={1}>
              <Rating value={4.5} precision={0.5} readOnly size="small" />
              <Typography variant="body2">4.5</Typography>
            </Box>
            <Button
              variant="outlined"
              startIcon={<CallIcon />}
              sx={{ mt: 1 ,borderRadius: 5, px: 5}}
            >
              Call
            </Button>
          </Box>
          <Avatar
            variant="square"
            src="https://via.placeholder.com/100x100.png?text=Doctor"
            sx={{ width: 150, height: 180 ,borderRadius: 5, px: 5}}
          />
        </Box>

        {/* Action Buttons */}
       <Box>
  {/* First line - Start Recording */}
  <Box mb={2}>
    <Button
      variant="contained"
      color="success"
      startIcon={<MicIcon />}
      sx={{ borderRadius: 5, px: 30 }}
    >
      Start Recording
    </Button>
  </Box>

  {/* Second line - Proceed to Pay and Rate with space between */}
  <Box display="flex" gap={85}>
    <Button
      variant="contained"
      color="success"
      sx={{ borderRadius: 5, px: 14 }}
    >
      Proceed to Pay
    </Button>
    <Button
      variant="contained"
      sx={{ bgcolor: '#f3efe8', color: '#000', borderRadius: 5 }}
    >
      Rate
    </Button>
  </Box>
</Box>

      </Box>

      {/* Sidebar - Now on the Right */}
      <Box width="200px" bgcolor="#f8f6f2" p={2} ml={4}>
        <Avatar sx={{ width: 40, height: 40, mb: 2 }} />
        <Typography variant="body1" fontWeight="bold" mb={2}>
          My Profile
        </Typography>
        <Button fullWidth sx={{ justifyContent: 'flex-start', bgcolor: '#e5e0d8', mb: 1 }}>
          My Appointments
        </Button>
        <Button fullWidth sx={{ justifyContent: 'flex-start', mb: 1 }}>
          Book Appointment
        </Button>
        <Button fullWidth sx={{ justifyContent: 'flex-start' }}>
          Account
        </Button>
      </Box>
    </Box>
  );
};

export default AppointmentDetails;
