import { Box, Button, IconButton, Modal, Typography, Grid, useMediaQuery } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import check from "../images/check.svg";
import AccountCreatedImage from "../images/AccountCreatedImage.svg";
import styles from "./styles.jsx";

const AccountCreatedModal = ({ open, onClose }) => {
  const isSmallScreen = useMediaQuery("(max-width:600px)");

  return (
    <Modal open={open} onClose={onClose}>
      <Box sx={styles.BoxStyle}>
        <IconButton
          onClick={onClose}
          sx={styles.IconButton4}
        >
          <CloseIcon />
        </IconButton>

        <Grid container sx={styles.Box}>
          <Grid item xs={12} sm={6} sx={{ padding: 4, textAlign: "center" }}>
            <Typography sx={{mt:2.4}} variant="h5" fontWeight="bold">Account Created</Typography>
            <Typography sx={{ fontSize: "0.9rem", color: "gray", mb: 3, mt: 1 }}>
              Your account has been created successfully.
            </Typography>

            <Box display="flex" justifyContent="center" my={2}>
              <Box component="img" src={check} sx={{ width: 70, height: 70 , mt: 3, mb:2.5}} />
            </Box>

            <Typography variant="h5" fontWeight="bold">Complete Your Profile</Typography>

            <Button
              fullWidth
              variant="contained"
              sx={{ fontSize: "0.9rem", bgcolor: "#D3D3D3", color: "black", mt: 3, height:45 }}
              
            >
              Upload your CV/Resume
            </Button>
            <Button
              fullWidth
              variant="contained"
              sx={{ bgcolor: "#D3D3D3", color: "black", mt: 2 ,height:45}}
              
            >
              Create your CV/Resume
            </Button>
          </Grid>
          {!isSmallScreen && (
            <Grid item xs={6} sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
              <Box
                component="img"
                src={AccountCreatedImage}
                alt="Signup Illustration"
                sx={{ width: "401px", height: "500px", maxWidth: "401px", objectFit: "cover" }}
              />
            </Grid>
          )}
        </Grid>
      </Box>
    </Modal>
  );
};

export default AccountCreatedModal;

