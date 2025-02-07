import { Box, useMediaQuery, useTheme } from "@mui/material";
import styles from "./styles.jsx";

const BackgroundImage = () => {
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <Box
      sx={{
        ...styles.BackgroundImageBox,
        backgroundSize: isSmallScreen ? "contain" : "cover",
        backgroundPosition: "center",
        backgroundRepeat:"no-repeat",
        width: "100%",
        mt:5,
        height: isSmallScreen ? "50vh" : "100vh",
      }}
    />
  );
};

export default BackgroundImage;
