import { AppBar, Box, Button, Container, Toolbar } from "@mui/material";
import Logo from "../images/logo.svg";
import textcontent from "./TextContent.jsx"
import styles from "./styles.jsx";

const AppBarComponent = ({ onSignUpClick, onLoginClick }) => {
  return (
    <AppBar
      position="static"
      elevation={0}
      sx={styles.appbarcompomain}
    >
      <Container maxWidth="xl">
        <Toolbar disableGutters sx={styles.appbarcompodisablegutter}>
          <Box sx={styles.appbarcompobox1}>
            <Box
              component="img"
              alt="Logo"
              src={Logo}
              sx={styles.appbarcompobox2}
            />
          </Box>
          <Box sx={styles.appbarcompobox3}>
            {["Home", "Browse Jobs", "Find Job", "Employer", "Blog"].map(
              (item) => (
                <Box
                  key={item}
                  color= "#ffffff"
                  sx={styles.appbarcompobox4}
                >
                  {item}
                </Box>
              )
            )}
            
            <Button
              variant="contained"
              sx={styles.appbarbutton1}
              elevation={15} 
              onClick={onSignUpClick}
            >
              {textcontent.btntext.signup}
            </Button>
            <Button
              variant="contained"
              sx={styles.appbarbutton2}
              
              onClick={onLoginClick}
            >
              {textcontent.btntext.login}
            </Button>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default AppBarComponent;
