import { AppBar, Box, Button, Container, Toolbar } from "@mui/material";
import Logo from "../images/logo.svg";

const AppBarComponent = ({ onSignUpClick, onLoginClick }) => {
  return (
    <AppBar
      position="static"
      elevation={0}
      sx={{ backgroundColor: "transparent" }}
    >
      <Container maxWidth="xl">
        <Toolbar disableGutters sx={{ justifyContent: "space-between" }}>
          <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
            <Box
              component="img"
              alt="Logo"
              src={Logo}
              sx={{ height: 40, width: 300, objectFit: "contain" }}
            />
          </Box>
          <Box sx={{ display: "flex", gap: 3, alignItems: "center" }}>
            {["Home", "Browse Jobs", "Find Job", "Employer", "Blog"].map(
              (item) => (
                <Button
                  key={item}
                  color="inherit"
                  sx={{ color: "text.primary" }}
                >
                  {item}
                </Button>
              )
            )}
            <Button
              variant="contained"
              sx={{ color: "black", backgroundColor: "white", borderRadius: 2 }}
              onClick={onSignUpClick}
            >
              Sign Up
            </Button>
            <Button
              variant="contained"
              sx={{
                borderRadius: 2,
                bgcolor: "#00A76F",
                "&:hover": { bgcolor: "#007867" },
              }}
              onClick={onLoginClick}
            >
              Login
            </Button>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default AppBarComponent;