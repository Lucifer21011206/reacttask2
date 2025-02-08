import React from "react";
import {
  Box,
  Button,
  Checkbox,
  IconButton,
  Modal,
  TextField,
  Typography,
  Grid,
  useMediaQuery,
  InputAdornment
} from "@mui/material";
// import EmailIcon from "@mui/icons-material/Email";
import LockIcon from "@mui/icons-material/Lock";
import CloseIcon from "@mui/icons-material/Close";
// import GoogleIcon from "@mui/icons-material/Google";
import SignUpRightImage from "../images/signuprightimage1.svg";
import GoogleIcon from "../images/google_logo-google_icongoogle-512.svg"
import emailicon from "../images/Vector.svg"
import passwordicon from "../images/Icon.svg"
import line from "../images/Line.svg"


const SignUpModal = ({
  open,
  onClose,
  form = {},
  setForm,
  errors = {},
  signuplogin,
  handleSubmit,
}) => {
  const isSmallScreen = useMediaQuery("(max-width:600px)");

  return (
    <Modal
      open={open}
      onClose={onClose}
      aria-labelledby="signup-modal-title"
      aria-describedby="signup-modal-description"
      sx={{ display: "flex", alignItems: "center", justifyContent: "center" }}
    >
      <Box sx={{ position: "relative", display: "flex", justifyContent: "center" }}>
        {/* Modal Container */}
        <Box
          sx={{
            width: "90%",
            maxWidth: "900px",
            bgcolor: "background.paper",
            borderRadius: 4.5,
            boxShadow: 24,
            overflow: "hidden",
            position: "relative",
          }}
        >
          <Grid container>
            {/* Left Side - Form */}
            <Grid
              item
              xs={12}
              sm={6}
              sx={{
                padding: 4,
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
              }}
            >
              <Typography variant="h5" marginBottom="3%" fontWeight="bold" gutterBottom onClick={handleSubmit}>
                Create Your Account
              </Typography>
              <Typography sx={{ fontSize: "0.9rem", color: "gray", mb: 3 }}>
                To get started, create an account with us. It’s a quick and easy
                process that only takes a few minutes.
              </Typography>

              {/* Email Field */}
              <TextField
              
  fullWidth
  placeholder="Enter email address"
  value={form.email || ""}
  onChange={(e) => setForm({ ...form, email: e.target.value })}
  error={!!errors.email}
  helperText={errors.email}
  InputProps={{
    startAdornment: (
      <InputAdornment position="start">
      {/* First Image - Email Icon */}
      <Box
        component="img"
        src={emailicon} // Replace with your actual email icon image path
        alt="Email Icon"
        sx={{ width: 24, height: 24, ml: 0.5 }} // Adjust size & spacing
      />
      
      {/* Second Image - Additional Icon */}
      <Box
        component="img"
        src={line} // Replace with your actual second image path
        alt="Second Icon"
        sx={{ width: 24, height: 24, ml: 1 }} // Adjust spacing between icons
      />
    </InputAdornment>
    ),
  }}
  sx={{
    mb: 2,
    "& .MuiOutlinedInput-root": { borderRadius: 3 },
    "& input": {
        paddingTop: "5.5%", // Adjusts the vertical position of the placeholder
        // paddingBottom: "8px", // Ensures content remains centered
      },
    "& .MuiFormHelperText-root": { 
      textAlign: "left", 
      ml: 0, 
      mt:1,
      mb:-1,
      minHeight: "20px",  // Ensure fixed height for validation text
      display: "flex", 
      alignItems: "center" // Keeps the text vertically aligned
    },
  }}
/>

<TextField
  fullWidth
  placeholder="Enter password"
  type="password"
  value={form.password || ""}
  onChange={(e) => setForm({ ...form, password: e.target.value })}
  error={!!errors.password}
  helperText={errors.password}
  InputProps={{
    startAdornment: (
      <InputAdornment position="start">
      {/* First Image - Email Icon */}
      <Box
        component="img"
        src={passwordicon} // Replace with your actual email icon image path
        alt="Password Icon"
        sx={{ width: 24, height: 24, ml: 0.5 }} // Adjust size & spacing
      />
      
      {/* Second Image - Additional Icon */}
      <Box
        component="img"
        src={line} // Replace with your actual second image path
        alt="Second Icon"
        sx={{ width: 24, height: 24, ml: 1 }} // Adjust spacing between icons
      />
    </InputAdornment>
    ),
  }}
  sx={{
    mb: 2,
    "& .MuiOutlinedInput-root": { borderRadius: 3 },
    "& input": {
        paddingTop: "5%", // Adjusts the vertical position of the placeholder
        // paddingBottom: "8px", // Ensures content remains centered
      },
    "& .MuiFormHelperText-root": { 
      textAlign: "left", 
      ml: 0, 
      mt:1,
      mb:-1,
      minHeight: "20px", 
      display: "flex", 
      alignItems: "center"
    },
  }}
/>

<TextField
  fullWidth
  placeholder="Enter confirm password"
  type="password"
  value={form.confirmPassword || ""}
  onChange={(e) => setForm({ ...form, confirmPassword: e.target.value })}
  error={!!errors.confirmPassword}
  helperText={errors.confirmPassword}
  InputProps={{
    startAdornment: (
      <InputAdornment position="start">
      {/* First Image - Email Icon */}
      <Box
        component="img"
        src={passwordicon} // Replace with your actual email icon image path
        alt="Password Icon"
        sx={{ width: 24, height: 24, ml: 0.5 }} // Adjust size & spacing
      />
      
      {/* Second Image - Additional Icon */}
      <Box
        component="img"
        src={line} // Replace with your actual second image path
        alt="Second Icon"
        sx={{ width: 24, height: 24, ml: 1 }} // Adjust spacing between icons
      />
    </InputAdornment>
    ),
  }}
  sx={{
    mb: 2,
    
    "& .MuiOutlinedInput-root": { borderRadius: 3 },
    "& input": {
      paddingTop: "5.5%", // Adjusts the vertical position of the placeholder
      // paddingBottom: "8px", // Ensures content remains centered
    },
    "& .MuiFormHelperText-root": { 
      textAlign: "left", 
      ml: 0, 
      mt:1,
    mb:-1,
      minHeight: "20px", 
      display: "flex", 
      alignItems: "center"
    },
  }}
/>
              {/* Terms & Conditions Checkbox */}
              <Box sx={{ display: "flex", alignItems: "center", mb: 2 }}>
                <Checkbox sx={{ml:-1.5,mt:-4.5}}
                  checked={form.agree || false}
                  onChange={(e) =>
                    setForm({ ...form, agree: e.target.checked })
                  }
                />
                <Typography variant="body2">
                  I agree to the <a href="#" style={{ color: "#3F76D1" ,textDecoration: "none"}}>Terms & Conditions</a> and{" "}
                  <a href="#" style={{ color: "#3F76D1" ,textDecoration: "none"}}>Privacy Policy</a> and confirm that the country selection is correct
                </Typography>
              </Box>
              {errors.agree && (
                <Typography color="error">{errors.agree}</Typography>
              )}

              {/* Create Account Button */}
              <Button
                variant="contained"
                fullWidth
                sx={{
                  bgcolor: "#1F9874",
                  "&:hover": { bgcolor: "#007867" },
                  mb: 2,width:"99.5%"
                }}
                onClick={handleSubmit}
              >
                Create an account
              </Button>

              {/* OR Divider */}
              <Typography
                sx={{
                  fontSize: "0.9rem",
                  color: "gray",
                  mb: 0.5,
                  mt:0.5,
                  textAlign: "center",
                }}
              >
                OR
              </Typography>

              {/* Google Sign-In Button */}
              <Button
  variant="outlined"
  sx={{
    borderColor: "lightgray",
    height:45,
    mt: 1,
    mb: 1,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    color: "#696969",
    fontWeight:"bold",
   width:"99.5%"
  }}
  fullWidth
>
  <img
    src="https://cdn4.iconfinder.com/data/icons/logos-brands-7/512/google_logo-google_icongoogle-512.png"
    alt="Google Logo"
    style={{ width: 20, height: 20, marginRight: 8 }}
  />
  Sign in with Google 
</Button>



              {/* Login Link */}
              <Typography
                sx={{
                  textAlign: "center",
                  fontSize: "0.9rem",
                  color: "gray",
                  mt: 3,
                }}
              >
                Already have an account?{" "}
                <a href="#" onClick={signuplogin} style={{ color: "#008080" ,textDecoration: "none"}}>
                  Login
                </a>
              </Typography>
            </Grid>

            {/* Right Side - Image (Hidden on Small Screens) */}
            {!isSmallScreen && (
              <Grid
                item
                xs={6}
                sx={{
                  position: "relative",
                  overflow: "hidden",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  bgcolor: "#f0f0f0",
                }}
              >
                <Box
                  component="img"
                  src={SignUpRightImage}
                  alt="Signup Illustration"
                  sx={{
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                  }}
                />
              </Grid>
            )}
          </Grid>
        </Box>

        {/* Close Icon Button (Properly Positioned Outside with Margins) */}
        <IconButton
          onClick={onClose}
          sx={{
            position: "absolute",
            top: "-16px", // Always outside modal
            right: "-20px", // More space to the right
            zIndex: 10,
            color: "text.primary",
            bgcolor: "background.paper",
            borderRadius: "50%",
            boxShadow: 2,
            transition: "all 0.3s ease",
            "&:hover": {
              bgcolor: "background.default",
            },

            /* Adjustments for responsiveness */
            "@media (max-width: 900px)": {
              top: "-12px",
              right: "-16px", // Give more space at smaller screens
            },
            "@media (max-width: 600px)": {
              top: "-10px",
              right: "8px", // Ensures margin from screen edge
            },
            "@media (max-width: 400px)": {
              top: "-8px",
              right: "12px", // More space for ultra-small screens
            },
            "@media (max-width: 300px)": {
              top: "-6px",
              right: "14px", // Ensure it doesn't touch screen edge
            },
          }}
        >
          <CloseIcon />
        </IconButton>
      </Box>
    </Modal>
  );
};

export default SignUpModal;
