// DoctorTabs.jsx
import React, { useState } from 'react';
import d from '../assets/images/defaultImg.jpg';
import img1 from "../assets/images/Dentist.png";
import img2 from "../assets/images/Neurologistimg.jpg"
import img3 from "../assets/images/Orthopedicimg.jpg"
import img4 from "../assets/images/Surgeonimg.jpg"
import img5 from "../assets/images/Cardiologistimg.jpg"

import { Tabs, Tab, Box, Grid, Typography, Button } from '@mui/material';

const specialtyImages = {
  Dentist: img1 ,
  Neurologist: img2,
  Orthopedic: img3,
  Surgeon: img4,
  Cardiologist: img5,
  Pulmonologist: d,
  Pharmacist: d,
  GeneralPhysician: d,
  Radiologist: d,
  Dermatologist: d,
  Ophthalmologist : d,
  ENTSpecialist: d,
  Pediatrician: d,
  Oncologist: d,
  Gastroenterologist: d,
  Endocrinologist: d,
  Psychiatrist: d,
  Gynecologist: d,
  Nephrologist: d,
  Hematologist: d,
};


const tabs = ['Doctor Appointment', 'Nurse Appointment', 'Lab Appointment', 'Dietician Appointment'];

const DoctorTabs = () => {
  const [tabIndex, setTabIndex] = useState(0);
  const specialties = Object.keys(specialtyImages);


  const handleTabChange = (event, newValue) => {
    if (typeof newValue === 'number') {
      setTabIndex(newValue);
    } else {
      console.error('Unexpected tab value:', newValue);
    }
  };

  const handleSpecialtyClick = (specialty) => {
    alert(`Clicked on ${specialty}`);
  };

  return (
    <Box p={2} sx={{ fontFamily: 'Arial, sans-serif' }}>
      {/* <Tabs
        value={tabIndex}
        onChange={handleTabChange}
        variant="fullWidth"
        textColor="inherit"
        sx={{ borderRadius: 2, mb: 2, background: '#f5f1ea' }}
      >
        {tabs.map((tab, index) => (
          <Tab
            key={index}
            label={tab}
            sx={{
              backgroundColor: tabIndex === index ? 'white' : '#f5f1ea',
              borderRadius: 2,
              fontWeight: 'bold'
            }}
          />
        ))}
      </Tabs> */}
      <Tabs
  value={tabIndex}
  onChange={handleTabChange}
  variant="fullWidth"
  textColor="inherit"
  TabIndicatorProps={{ style: { display: 'none' } }} // hide default underline
  sx={{
    borderRadius: 2,
    mb: 2,
    backgroundColor: '#f5f1ea',
    boxShadow: 'inset 0 -1px 0 #ddd',
    px: 1,
  }}
>
  {tabs.map((tab, index) => (
    <Tab
      key={index}
      label={tab}
      sx={{
        backgroundColor: tabIndex === index ? '#ffffff' : '#f5f1ea',
        color: tabIndex === index ? '#000' : '#A67C52', // brownish for inactive
        fontWeight: 'bold',
        borderRadius: 2,
        border: tabIndex === index ? '1px solid #ccc' : 'none',
        mx: 0.5,
        py: 1,
        fontSize: '0.95rem',
        transition: 'all 0.3s ease',
        textTransform: 'none',
      }}
    />
  ))}
</Tabs>


      {tabIndex === 0 && (
        <>
          <Button variant="contained"   sx={{ mt: 4 ,backgroundColor: '#f1eee8', color: 'black' ,borderRadius: '50px',px: 2,py: 0.5,fontSize: '1.rem' }}>
            (+ Select Speciality)
          </Button>

          <Grid container spacing={2}>
            {specialties.map((specialty, index) => (
              <Grid item xs={6} sm={4} md={2.4} key={index}>
                <Box
                  onClick={() => handleSpecialtyClick(specialty)}
                  sx={{
                    borderRadius: '50%',
                    width: 200,
                    height: 200,
                    backgroundColor: '#ccc',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    cursor: 'pointer',
                    textAlign: 'center',
                    mx: 4,
                    overflow: 'hidden',
                    backgroundImage: `url(${specialtyImages[specialty] || '/images/default.png'})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center'
                  }}
                >
                  <Typography
                    variant="caption"
                    sx={{
                      color: 'black',
                      p: 1,
                      borderRadius: 1,
                      textAlign: 'center',
                      fontWeight: 'bold',     // makes text bold
                      fontSize: '0.9rem'      // increases text size; you can adjust this (e.g. '1rem', '1.2rem')
                    }}
                  >
                    {specialty}
                  </Typography>
                </Box>
              </Grid>
            ))}
          </Grid>
        </>
      )}
    </Box>
  );
};

export default DoctorTabs;
