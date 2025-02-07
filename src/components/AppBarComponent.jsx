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
              sx={{ height: 43, width: 334, objectFit: "contain", mt:4 }}
            />
          </Box>
          <Box sx={{ display: "flex", gap: 3,fontSize:43, alignItems: "center" }}>
            {["Home", "Browse Jobs", "Find Job", "Blog"].map(
              (item) => (
                <Box
                  key={item}
                  color="inherit"
                  sx={{ color: "text.primary", height:33 , fontSize: "1.5rem", color: "gray",mt:4, mr:1.8}}
                >
                  {item}
                </Box>
              )
            )}
            <Button
              variant="contained"
              sx={{ color: "white", backgroundColor: "white", borderRadius: 2, mt:4,mr:4,height:51, bgcolor: "#00A76F",
                "&:hover": { bgcolor: "#ffffff" ,color:"black"},}}
              
            >
              Employer
            </Button>
            <Button
              variant="contained"
              sx={{ color: "black", backgroundColor: "white", borderRadius: 2, mt:4,height:51}}
              onClick={onSignUpClick}
            >
              Sign Up
            </Button>
            <Button
              variant="contained"
              sx={{
                color: "white",
                borderRadius: 2,
                mt:3.8,mr:22,height:51,
                width: 95,
                elevation:17,
                bgcolor: "#00A76F",
                "&:hover": { bgcolor: "#ffffff",color:"black" },
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
