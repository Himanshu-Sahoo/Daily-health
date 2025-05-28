import { AppBar, Toolbar, Typography, Button, Box } from '@mui/material';
// import heroImage from "/assets/hero.jpg" // Use your image

export default function HeaderSection() {
  return (
    <>
      <AppBar position="static" color="default" elevation={0}>
        <Toolbar sx={{ justifyContent: "space-between" }}>
          <Typography variant="h6">LOGO</Typography>
          <Box sx={{ display: 'flex', gap: 2 }}>
            <Button>Home</Button>
            <Button>Tips & Articles</Button>
            <Button>Modules</Button>
          </Box>
          <Button color="error" variant="outlined">Logout</Button>
        </Toolbar>
      </AppBar>

    
    </>
  );
}
