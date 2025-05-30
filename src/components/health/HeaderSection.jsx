import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  Box,
  IconButton,
} from "@mui/material";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import NotificationsIcon from "@mui/icons-material/Notifications";
import LanguageIcon from "@mui/icons-material/Language";

export default function HeaderSection() {
  return (
    <AppBar position="static" elevation={0} sx={{ backgroundColor: "#fff", color: "#000" }}>
      <Toolbar sx={{ justifyContent: "space-between" }}>
        <Typography variant="h6"  sx={{ fontWeight: "bold" }}>LOGO</Typography>
        <Box sx={{ flexGrow: 1 }} />
        <Box sx={{ display: "flex",  alignItems: "center" }}>
          <Button color="inherit" sx={{ fontWeight: "bold" }}>Home</Button>
          <Button color="inherit" sx={{ fontWeight: "bold" }}>Tips & Articles</Button>
          <Button color="inherit" sx={{ fontWeight: "bold" }}>Modules</Button>

          <IconButton color="inherit" sx={{ color: "green" }}>
            <AccountCircleIcon />
          </IconButton>
          <IconButton color="inherit" sx={{ color: "green" }}>
            <NotificationsIcon />
          </IconButton>
          <IconButton color="inherit" sx={{ color: "green" }}>
            <LanguageIcon />
          </IconButton>

          <Button color="error" variant="outlined" sx={{ fontWeight: "bold" }}>Logout</Button>
          
        </Box>
      </Toolbar>
    </AppBar>
  );
}
