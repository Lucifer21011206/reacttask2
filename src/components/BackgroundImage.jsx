import { Box } from "@mui/material";
import backgroundImage from "../images/landing_page_background.svg";

const BackgroundImage = () => {
  return (
    <Box
      sx={{
        position: "absolute",
        right: 0,
        top: 0,
        width: "90%",
        height: "100%",
        zIndex: -1,
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    />
  );
};

export default BackgroundImage;
