import {
  Box,
  Button,
  IconButton,
  Modal,
  TextField,
  Typography,
  Grid,
  useMediaQuery,
  useTheme
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import OTPRightImage from "../images/OTPRightImage.svg";
import styles from "./styles";

const ResendOTPModal = ({ open, onClose, handleSubmit }) => {
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <Modal open={open} onClose={onClose}>
      <Box sx={styles.BoxStyle}>
        <IconButton
          onClick={onClose}
           sx={styles.IconButton2}
        >
          <CloseIcon />
        </IconButton>
        <Grid container sx={styles.OTPModalBox1}>
          <Grid
            item
            xs={12}
            sm={6}
            sx={{
              padding: isSmallScreen ? 2 : 4,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <Typography variant="h5" fontWeight="bold">
              OTP Verification
            </Typography>
            <Typography sx={{ fontSize: "0.9rem", color: "gray", mb: 3, textAlign: "center" }}>
              Please enter the 6-digit verification code sent to 's123@gmail.com'.
              The Code is valid for 3 minutes.
            </Typography>
            <Box sx={{ display: "flex", justifyContent: "center", gap: 1, mb: 3 }}>
              {[...Array(6)].map((_, i) => (
                <TextField key={i} sx={{ width: isSmallScreen ? 30 : 40, textAlign: "center", borderRadius: 17 }} />
              ))}
            </Box>
            <Box sx={{ display: "flex", justifyContent: "space-between", width: "100%", mb: 3 }}>
              <Typography
                sx={{ color: "#00A76F", cursor: "pointer" }}
                onClick={handleSubmit}
              >
                Resend
              </Typography>
              <Typography>02:58</Typography>
            </Box>
            <Button fullWidth variant="contained" sx={{ bgcolor: "#00A76F" }} onClick={handleSubmit}>
              Submit
            </Button>
            <Button fullWidth variant="contained" sx={{ mt: 1, bgcolor: "#33B58A" }}>
              OTP Resent Successfully
            </Button>
          </Grid>
          {!isSmallScreen && (
            <Grid item sm={6} sx={styles.OTPModalBox2}>
              <Box
                component="img"
                src={OTPRightImage}
                alt="OTP Illustration"
                sx={{ width: "100%", height: "100%", objectFit: "cover" }}
              />
            </Grid>
          )}
        </Grid>
      </Box>
    </Modal>
  );
};

export default ResendOTPModal;
