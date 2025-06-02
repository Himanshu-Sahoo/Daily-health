import React from 'react'
import { Person, CalendarToday, Wc, LocalHospital } from '@mui/icons-material';
export default function Sidebar() {
  return (
      <Box sx={{ width: 250, bgcolor: '#f5f1eb', p: 2 }}>
        <Box sx={{ textAlign: 'center', mb: 4 }}>
          <Avatar
            alt="Dr. Sarah Johnson"
            src="https://via.placeholder.com/100"
            sx={{ width: 80, height: 80, mx: 'auto', mb: 1 }}
          />
          <Typography variant="subtitle1" fontWeight="bold">Dr. Sarah Johnson</Typography>
          <Typography variant="body2" color="textSecondary">Cardiologist</Typography>
        </Box>

        <List>
          <ListItem selected>
            <ListItemIcon><Person /></ListItemIcon>
            <ListItemText primary="Overview" />
          </ListItem>
          <ListItem>
            <ListItemIcon><Person /></ListItemIcon>
            <ListItemText primary="Contact Details" />
          </ListItem>
          <ListItem>
            <ListItemIcon><Wc /></ListItemIcon>
            <ListItemText primary="Gender" />
          </ListItem>
          <ListItem>
            <ListItemIcon><CalendarToday /></ListItemIcon>
            <ListItemText primary="Date Of Birth" />
          </ListItem>
          <ListItem>
            <ListItemIcon><LocalHospital /></ListItemIcon>
            <ListItemText primary="Contact Source" />
          </ListItem>
        </List>
      </Box>

  )
}
