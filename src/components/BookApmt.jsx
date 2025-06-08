import React from "react";
import {
  Box,
  Typography,
  TextField,
  MenuItem,
  Select,
  FormControl,
  InputLabel,
  RadioGroup,
  FormControlLabel,
  Radio,
  Button,
  Tabs,
  Tab,
  Grid,
  TextareaAutosize,
} from "@mui/material";
import demo from "../assets/doctor-clip.avif"

const AppointmentForm = () => {
  const [tabValue, setTabValue] = React.useState(1);

  return (
    <Box sx={{ maxWidth: 600, mx: "auto", p: 3 }}>
      <Typography variant="h5" fontWeight="bold" mb={1}>
        Book Your Appointment
      </Typography>
      <Typography variant="body2" color="text.secondary" mb={2}>
        Schedule your visit with ease.
      </Typography>

      <Box sx={{ textAlign: "center", mb: 2 }}>
        <Box
          component="img"
          src=  {demo}  //"/path-to-your-image.jpg" // replace with your image
          alt="hospital"
          sx={{
            width: 80,
            height: 80,
            borderRadius: "50%",
            objectFit: "cover",
          }}
        />
        <Typography fontWeight="bold" mt={1}>
          St. Mary’s Hospital
        </Typography>
        <Typography variant="body2" color="text.secondary">
          San Francisco, CA
        </Typography>
      </Box>
{/* Entity Type */}
<Box mt={2}>
  <Typography variant="subtitle2" fontWeight="bold" mb={0.5}>
    Entity Type
  </Typography>
  <FormControl fullWidth>
    <Select displayEmpty>
      <MenuItem value="" disabled>
        Select entity type
      </MenuItem>
      <MenuItem value="Hospital">Hospital</MenuItem>
      <MenuItem value="Clinic">Clinic</MenuItem>
    </Select>
  </FormControl>
</Box>

{/* First Name */}
<Box mt={2}>
  <Typography variant="subtitle2" fontWeight="bold" mb={0.5}>
    First Name
  </Typography>
  <TextField fullWidth placeholder="Enter first name" variant="outlined" />
</Box>

{/* Last Name */}
<Box mt={2}>
  <Typography variant="subtitle2" fontWeight="bold" mb={0.5}>
    Last Name
  </Typography>
  <TextField fullWidth placeholder="Enter last name" variant="outlined" />
</Box>

{/* Age */}
<Box mt={2}>
  <Typography variant="subtitle2" fontWeight="bold" mb={0.5}>
    Age
  </Typography>
  <TextField fullWidth placeholder="Enter age" variant="outlined" />
</Box>

{/* Phone No */}
<Box mt={2}>
  <Typography variant="subtitle2" fontWeight="bold" mb={0.5}>
    Phone No
  </Typography>
  <TextField fullWidth placeholder="Enter phone number" variant="outlined" />
</Box>

{/* Gender */}
<Box mt={2}>
  <Typography variant="subtitle2" fontWeight="bold" mb={0.5}>
    Gender
  </Typography>
  <FormControl fullWidth>
    <Select displayEmpty>
      <MenuItem value="" disabled>
        Select gender
      </MenuItem>
      <MenuItem value="Male">Male</MenuItem>
      <MenuItem value="Female">Female</MenuItem>
      <MenuItem value="Other">Other</MenuItem>
    </Select>
  </FormControl>
</Box>

{/* Preferred Date and Time */}
<Grid container spacing={2} mt={1}>
  <Grid item xs={6}>
    <Typography variant="subtitle2" fontWeight="bold" mb={0.5}>
      Preferred Date
    </Typography>
    <TextField fullWidth type="date" InputLabelProps={{ shrink: true }} />
  </Grid>
  <Grid item xs={6}>
    <Typography variant="subtitle2" fontWeight="bold" mb={0.5}>
      Time
    </Typography>
    <TextField fullWidth type="time" InputLabelProps={{ shrink: true }} />
  </Grid>
</Grid>

{/* Symptoms Description */}
<Box mt={3}>
  <Typography variant="subtitle2" fontWeight="bold" mb={0.5}>
    Symptoms Description
  </Typography>
  <TextareaAutosize
    minRows={4}
    placeholder="Describe your symptoms"
    style={{ width: '100%', padding: '10px', borderRadius: 6, border: '1px solid #ccc' }}
  />
</Box>

{/* Criticality */}
<Box mt={2}>
  <Typography variant="subtitle2" fontWeight="bold" mb={0.5}>
    Criticality
  </Typography>
  <FormControl fullWidth>
    <Select defaultValue="Low">
      <MenuItem value="Low">Low</MenuItem>
      <MenuItem value="Medium">Medium</MenuItem>
      <MenuItem value="High">High</MenuItem>
    </Select>
  </FormControl>
</Box>


      {/* Referred by NGO */}
      <FormControl component="fieldset" margin="normal">
        <RadioGroup defaultValue="Yes">
          <FormControlLabel value="Yes" control={<Radio />} label="Yes - Are you referred from any NGO?" />
          <FormControlLabel value="No" control={<Radio />} label="No" />
        </RadioGroup>
      </FormControl>

      {/* Tabs */}
      {/* <Box mt={2}>
        <Tabs value={tabValue} onChange={(e, val) => setTabValue(val)} centered>
          <Tab label="Available" />
          <Tab label="Selected" />
          <Tab label="Booked" />
        </Tabs>
      </Box> */}
      <Box mt={2}>
  <Tabs
    value={tabValue}
    onChange={(e, val) => setTabValue(val)}
    centered
    TabIndicatorProps={{ style: { display: 'none' } }} // remove underline
    sx={{
      backgroundColor: '#f5f1ea',
      borderRadius: 2,
      px: 1,
      py: 0.5,
      boxShadow: 'inset 0 -1px 0 #ddd',
    }}
  >
    {['Available', 'Selected', 'Booked'].map((label, index) => (
      <Tab
        key={index}
        label={label}
        sx={{
          backgroundColor: tabValue === index ? '#ffffff' : '#f5f1ea',
          color: tabValue === index ? '#000' : '#A67C52',
          fontWeight: 'bold',
          borderRadius: 3,
          border: tabValue === index ? '1px solid #ccc' : 'none',
          mx: 1,
          py: 1,
          px: 2,
          fontSize: '0.95rem',
          textTransform: 'none',
          transition: 'all 0.3s ease',
        }}
      />
    ))}
  </Tabs>
</Box>


      {/* Submit Button */}
      <Box mt={3} textAlign="center">
        <Button
          variant="contained"
          size="large"
          sx={{
            backgroundColor: "#0A9D58",
            borderRadius: "20px",
            px: 5,
            textTransform: "none",
            fontWeight: "bold",
            "&:hover": { backgroundColor: "#0C7A47" },
          }}
        >
          Book Appointment
        </Button>
      </Box>

      {/* Footer */}
      <Box
        mt={5}
        display="flex"
        justifyContent="center"
        alignItems="center"
        flexDirection="column"
        fontSize="14px"
        color="gray"
      >
        <Box display="flex" gap={2} mb={1}>
          <span>Privacy Policy</span>
          <span>Terms of Service</span>
          <span>ContactUs</span>
        </Box>
        <Box display="flex" gap={1} mb={1}>
          <i className="fab fa-facebook"></i>
          <i className="fab fa-twitter"></i>
          <i className="fab fa-instagram"></i>
        </Box>
        <Typography variant="caption">© 2023 Daily Life. All rights reserved.</Typography>
      </Box>
    </Box>
  );
};

export default AppointmentForm;
