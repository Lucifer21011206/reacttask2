import { Box, Button, IconButton, Modal, Typography, Grid, useMediaQuery } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import check from "../images/check.svg";
import AccountCreatedImage from "../images/AccountCreatedImage.svg";
import styles from "./styles.jsx";
import textcontent from "./TextContent.jsx"

const AccountCreatedModal = ({ open, onClose }) => {
  const isSmallScreen = useMediaQuery("(max-width:600px)");

  return (
    <Modal open={open} onClose={onClose} sx={{ display: "flex", alignItems: "center", justifyContent: "center" }}>
      <Box sx={styles.BoxStyle}>
        <IconButton
          onClick={onClose}
          sx={styles.IconButton4}
        >
          <CloseIcon />
        </IconButton>

        <Grid container sx={styles.Box}>
          <Grid item xs={12} sm={6} sx={{ padding: 4, textAlign: "center" }}>
            <Typography sx={{mt:2.4}} variant="h5" fontWeight="bold">{textcontent.title.accountcreatedtext}</Typography>
            <Typography sx={{ fontSize: "0.9rem", color: "gray", mb: 3, mt: 1 }}>
              {textcontent.subtitle.accountcreatedtext}
            </Typography>

            <Box display="flex" justifyContent="center" my={2}>
              <Box component="img" src={check} sx={styles.accountcheckicon} />
            </Box>

            <Typography variant="h5" fontWeight="bold">{textcontent.title.accountcreated2}</Typography>

            <Button
              fullWidth
              variant="contained"
              sx={{ fontSize: "0.9rem", bgcolor: "#D3D3D3", color: "black", mt: 3, height:45 }}
              
            >
             {textcontent.btntext.uploadcv}
            </Button>
            <Button
              fullWidth
              variant="contained"
              sx={styles.accountcreatecv}
              
            >
              {textcontent.btntext.createcv}
            </Button>
          </Grid>
          {!isSmallScreen && (
            <Grid item xs={6} sx={styles.accountrightimage2}>
              <Box
                component="img"
                src={AccountCreatedImage}
                alt={textcontent.subtitle.accimg}
                sx={styles.accountrightimage}
              />
            </Grid>
          )}
        </Grid>
      </Box>
    </Modal>
  );
};

export default AccountCreatedModal;

