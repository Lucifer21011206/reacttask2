import { Box, Button, IconButton, Modal, Typography, Grid, useMediaQuery } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import check from "../images/check.svg";
import AccountCreatedImage from "../images/AccountCreatedImage.svg";
import styles from "./styles.jsx";
import textcontent from "./TextContent.jsx";

const AccountCreatedModal = ({ open, onClose }) => {
  const isSmallScreen = useMediaQuery("(max-width:500px)");
  const isMediumScreen = useMediaQuery("(max-width:984px)");
  const isBelow600px = useMediaQuery("(max-width:600px)");

  return (
    <Modal open={open} onClose={onClose} sx={{ display: "flex", alignItems: "center", justifyContent: "center" }}>
      <Box sx={{
        position: "relative",
        display: "flex",
        justifyContent: "center",
        width: "90%",
        maxWidth: "801px",
        margin: isMediumScreen ? "40px" : "0",
      }}>
        <Box
          sx={{
            width: "100%",
            bgcolor: "background.paper",
            borderRadius: 6,
            boxShadow: 24,
            overflow: "hidden",
            display: "flex",
            flexDirection: isSmallScreen ? "column" : "row",
          }}
        >
          <Grid container>
            <Grid item xs={12} sm={6} sx={styles.accountcreatemodelfirstgrid}>
              <Typography variant="h5" fontWeight="bold" gutterBottom>
                {textcontent.title.accountcreatedtext}
              </Typography>
              <Typography sx={styles.accountcreatemodelsecondtypo}>
                {textcontent.subtitle.accountcreatedtext}
              </Typography>

              <Box display="flex" justifyContent="center" my={2}>
                <Box component="img" src={check} sx={styles.accountcheckicon} />
              </Box>

              <Typography variant="h5" fontWeight="bold">
                {textcontent.title.accountcreated2}
              </Typography>

              <Button
                fullWidth
                variant="contained"
                sx={styles.accountcreatemodelfirstbutton}
              >
                {textcontent.btntext.uploadcv}
              </Button>
              <Button fullWidth variant="contained" sx={styles.accountcreatecv}>
                {textcontent.btntext.createcv}
              </Button>
            </Grid>

            {/* Right-Side Illustration (Only on Large Screens)*/}
            {!isSmallScreen && !isBelow600px && (
              <Grid item xs={6} sx={styles.accountcreatemodelrightsideimage}>
                <Box
                  component="img"
                  src={AccountCreatedImage}
                  alt={textcontent.subtitle.accimg}
                  sx={styles.accountcreatemodelrightsideimagebox}
                />
              </Grid>
            )}
          </Grid>
        </Box>

        {/* Close Icon Button (Properly Positioned Outside with Margins) */}
        <IconButton
          onClick={onClose}
          sx={styles.accountcreatemodelicon}
        >
          <CloseIcon />
        </IconButton>
      </Box>
    </Modal>
  );
};

export default AccountCreatedModal;
