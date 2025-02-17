import React, { useState } from "react";
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
import textcontent from "./TextContent.jsx"

const LoginOTPModal = ({ open, onClose, resendOTP, handleSubmit }) => {
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("sm"));

  // State to manage OTP input and error message
  const [otp, setOtp] = useState(Array(6).fill(""));
  const [error, setError] = useState("");

  // Handle OTP input change
  const handleChange = (index, value) => {
    if (/^\d*$/.test(value) && value.length <= 1) {
      const newOtp = [...otp];
      newOtp[index] = value;
      setOtp(newOtp);
      setError(""); // Clear error on valid input
    }
  };

  // Handle form submission
  const handleFormSubmit = () => {
    const otpString = otp.join("");
    if (!otpString || otpString.length === 0) {
      setError(
        <Typography sx={{ marginLeft:"-5px" }}> {/* Add margin left here */}
          Please enter OTP.
        </Typography>
      );
      return;
    }
    if (otpString.length !== 6) {
      setError(
        <Typography sx={{ marginLeft:"-5px" }}>
        Please enter a complete 6-digit OTP.
        </Typography>
        );
      return;
    }
    
    // Call the handleSubmit function passed as a prop
    handleSubmit(otpString);
  };

  return (
    <Modal open={open} onClose={onClose}>
      <Box sx={styles.BoxStyle}>
        <IconButton onClick={onClose} sx={styles.IconButton2}>
          <CloseIcon />
        </IconButton>
        <Grid container sx={styles.OTPModalBox1}>
          <Grid item xs={12} sm={6} sx={{ padding: isSmallScreen ? 2 : 4 }}>
            <Typography variant="h5" fontWeight="bold" sx={{mb:1.5,ml:-0.4,mt:-0.5}}>
              {textcontent.title.otp}
            </Typography>
            <Typography sx={{ fontSize: "0.9rem", color: "gray", mb: 3 ,ml:-0.4}}>
              {textcontent.subtitle.otp}
            </Typography>
            <Box sx={{ display: "flex", justifyContent: "center", gap: 0.5, mb: 3 ,ml:-0.4}}>
  {otp.map((digit, index) => (
    <TextField
      key={index}
      value={digit}
      onChange={(e) => handleChange(index, e.target.value)}
      sx={{
        ml: -0.2,
        mr: 1.3,
        width: isSmallScreen ? 30 : 55,
        textAlign: "center",
        "& .MuiOutlinedInput-root": {
          borderRadius: "9px", // Add rounded corners
          textAlign: "center",
        },
        "& input": {
          textAlign: "center", // Ensure text is centered inside input
          padding: "10px", // Adjust padding for better spacing
        }
      }}
      inputProps={{ maxLength: 1 }} // Limit input to 1 character
    />
  ))}
</Box>

            {error && (
              <Typography sx={{ color: "red", mb: 2 }}>
                {error}
              </Typography>
            )}
            <Box sx={{ display: "flex", justifyContent: "space-between", fontSize: "0.9rem", color: "gray", mb: 3 }}>
              <Typography sx={{ color: "#00A76F", cursor: "pointer" ,ml:-0.7}} onClick={resendOTP}>
                Resend
              </Typography>
              <Typography sx={{mr:1.5}}> 02:58</Typography>
            </Box>
            <Button fullWidth variant="contained" sx={{ ml:-0.7,bgcolor: "#00A76F" ,width:330,height:47,mt:-0.7}} onClick={handleFormSubmit}>
              Submit
            </Button>
          </Grid>
          {!isSmallScreen && (
            <Grid item xs={6} sx={styles.OTPModalBox2}>
              <Box
                component="img"
                src={OTPRightImage}
                alt="Signup Illustration"
                sx={{
                  width: "500px",
                  height: "100%",
                  objectFit: "cover",
                  objectPosition: "center", // Ensures the main part of the image remains visible
                  display: "block", // Removes unwanted gaps
                }}
              />
            </Grid>
          )}
        </Grid>
      </Box>
    </Modal>
  );
};

export default LoginOTPModal;

