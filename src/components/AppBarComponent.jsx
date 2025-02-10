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
          <Box sx={{ display: "flex", gap: 2.7,fontSize:43, alignItems: "center" ,color:"#444"}}>
            {["Home", "Browse Jobs", "Find Job", "Employer", "Blog"].map(
              (item) => (
                <Box
                  key={item}
                  color= "#444"
                  sx={{ color: "text.primary", height:33 , fontSize: "1.1rem", color: "gray",mt:5, mr:1.8}}
                >
                  {item}
                </Box>
              )
            )}
            
            <Button
              variant="contained"
              sx={{ color: "black", backgroundColor: "white", borderRadius: 2, mt:3.2 ,mr:1,height:53,width: 102}}
              elevation={15} 
              onClick={onSignUpClick}
            >
              Sign Up
            </Button>
            <Button
              variant="contained"
              sx={{
                color: "white",
                borderRadius: 2,
                mt:3.2,mr:-3.5,height:53,
                width: 102,
                elevation:15,
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
