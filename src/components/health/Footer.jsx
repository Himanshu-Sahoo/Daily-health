// Footer.jsx
import React from "react";
import { Box, Grid, Typography, Link, IconButton } from "@mui/material";
import EmailIcon from "@mui/icons-material/Email";
import PhoneIcon from "@mui/icons-material/Phone";
import LocationOnIcon from "@mui/icons-material/LocationOn";

const Footer = () => {
  return (
    <Box sx={{ backgroundColor: "#1e1e1e", color: "white", px: 4, py: 6 }}>
      <Grid container spacing={4}>
        {/* Logo & About */}
        <Grid size={{xs:12,md:4}}>
          <Typography variant="h6" fontWeight="bold">
            <span style={{ fontFamily: "cursive", fontSize: "24px" }}>logo</span>
          </Typography>
          <Typography variant="body2" sx={{ mt: 2 }}>
            We are a young company 
            always looking for 
            new and creative ideas to help you
            on your everyday work.
          </Typography>
          <Link href="#" underline="hover" sx={{ display: "block", mt: 1, color: "#A0E7E5" }}>
            Our Team
          </Link>
        </Grid>

        {/* Contact Info */}
        <Grid size={{xs:12,md:4}}>
          <Typography variant="h6" fontWeight="bold">
            Contact
          </Typography>
          <Box sx={{ display: "flex", alignItems: "center", mt: 2 }}>
            <LocationOnIcon sx={{ mr: 1 }} />
            <Typography variant="body2">Via Rossini 10, 10136 Turin Italy</Typography>
          </Box>
          <Box sx={{ display: "flex", alignItems: "center", mt: 1 }}>
            <PhoneIcon sx={{ mr: 1 }} />
            <Typography variant="body2">Phone: (0039) 333 12 68 347</Typography>
          </Box>
          <Box sx={{ display: "flex", alignItems: "center", mt: 1 }}>
            <EmailIcon sx={{ mr: 1 }} />
            <Typography variant="body2">mail: health@email.com</Typography>
          </Box>
          <Typography variant="body2" sx={{ mt: 1 }}>Skype: you_me</Typography>
        </Grid>

        {/* Links */}
        <Grid size={{xs:12,md:4}}>
          <Typography variant="h6" fontWeight="bold">
            Links
          </Typography>
          <Box sx={{ mt: 2 }}>
            <Link href="#" underline="hover" sx={{ display: "block", mb: 1, color: "white" }}>
              Home
            </Link>
            <Link href="#" underline="hover" sx={{ display: "block", mb: 1, color: "white" }}>
              Plans & Pricing
            </Link>
            <Link href="#" underline="hover" sx={{ display: "block", mb: 1, color: "white" }}>
              Features
            </Link>
            <Link href="#" underline="hover" sx={{ display: "block", mb: 1, color: "white" }}>
              Our Clients
            </Link>
            <Link href="#" underline="hover" sx={{ display: "block", color: "white" }}>
              Terms
            </Link>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Footer;
