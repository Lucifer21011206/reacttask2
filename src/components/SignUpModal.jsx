import React, { useState } from "react";
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
import LockIcon from "@mui/icons-material/Lock";
import CloseIcon from "@mui/icons-material/Close";
import { Visibility, VisibilityOff } from '@mui/icons-material'; 
import SignUpRightImage from "../images/signuprightimage1.svg";
import emailicon from "../images/Vector.svg";
import passwordicon from "../images/Icon.svg";
import line from "../images/Line.svg";

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
  const isMediumScreen = useMediaQuery("(max-width:984px)"); // Check for medium screen size
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const handleClickShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const handleClickShowConfirmPassword = () => {
    setShowConfirmPassword(!showConfirmPassword);
  };

  return (
    <Modal
      open={open}
      onClose={onClose}
      aria-labelledby="signup-modal-title"
      aria-describedby="signup-modal-description"
      sx={{ display: "flex", alignItems: "center", justifyContent: "center" }}
    >
      <Box sx={{ 
        position: "relative", 
        display: "flex", 
        justifyContent: "center",
        margin: isMediumScreen ? '40px' : '0' // Add margin if screen width is less than 984px
      }}>
        {/* Modal Container */}
        <Box
          sx={{
            width: "100%",
            maxWidth: "900px",
            bgcolor: "background.paper",
            borderRadius: 6,
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
              <Typography variant="h5" marginBottom="3%" fontWeight="bold" gutterBottom>
                Create Your Account
              </Typography>
              <Typography sx={{ fontSize: "0.9rem", color: "#333333", mb: 3 }}>
                To Get Started, We Need You To Create An Account With Us. It’s A Quick And Straightforward Process. That Will Only 
                Take A Few Minutes.
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
                      <Box
                        component="img"
                        src={emailicon}
                        alt="Email Icon"
                        sx={{ width: 24, height: 24, ml: 0.5 }}
                      />
                      <Box
                        component="img"
                        src={line}
                        alt="Second Icon"
                        sx={{ width: 24, height: 24, ml: 1 }}
                      />
                    </InputAdornment>
                  ),
                }}
                sx={{
                  mb: 3,
                  mt: -0.5,
                  "& .MuiOutlinedInput-root": { borderRadius: 3 },
                  "& input": {
                    paddingTop: "5.5%",
                  },
                  "& .MuiFormHelperText-root": { 
                    textAlign: "left", 
                    ml: 0, 
                    mt: 1.7,
                    mb: -1.5,
                    minHeight: "20px",  
                    display: "flex", 
                    alignItems: "center" 
                  },
                }}
              />

              {/* Password Field */}
              <TextField
                fullWidth
                placeholder="Enter password"
                type={showPassword ? 'text' : 'password'}
                value={form.password || ''}
                onChange={(e) => setForm({ ...form, password: e.target.value })}
                error={!!errors.password}
                helperText={errors.password}
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <Box
                        component="img"
                        src={passwordicon}
                        alt="Password Icon"
                        sx={{ width: 24, height: 24, ml: 0.5 }}
                      />
                      <Box
                        component="img"
                        src={line}
                        alt="Second Icon"
                        sx={{ width: 24, height: 24, ml: 1 }}
                      />
                    </InputAdornment>
                  ),
                  endAdornment: (
                    <InputAdornment position="end">
                      <IconButton
                        onClick={handleClickShowPassword}
                        edge="end"
                        aria-label="toggle password visibility"
                      >
                        {showPassword ? <Visibility /> : <VisibilityOff />}
                      </IconButton>
                    </InputAdornment>
                  ),
                }}
                sx={{
                  mb: 3,
                  '& .MuiOutlinedInput-root': { borderRadius: 3 },
                  '& input': {
                    paddingTop: '5%',
                  },
                  '& .MuiFormHelperText-root': {
                    textAlign: 'left',
                    ml: 0,
                    mt: 1.7,
                    mb: -1.5,
                    minHeight: '20px',
                    display: 'flex',
                    alignItems: 'center',
                  },
                }}
              />

              {/* Confirm Password Field */}
              <TextField
                fullWidth
                placeholder="Enter confirm password"
                type={showConfirmPassword ? 'text' : 'password'}
                value={form.confirmPassword || ""}
                onChange={(e) => setForm({ ...form, confirmPassword: e.target.value })}
                error={!!errors.confirmPassword}
                helperText={errors.confirmPassword}
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <Box
                        component="img"
                        src={passwordicon}
                        alt="Password Icon"
                        sx={{ width: 24, height: 24, ml: 0.5 }}
                      />
                      <Box
                        component="img"
                        src={line}
                        alt="Second Icon"
                        sx={{ width: 24, height: 24, ml: 1 }}
                      />
                    </InputAdornment>
                  ),
                  endAdornment: (
                    <InputAdornment position="end">
                      <IconButton
                        onClick={handleClickShowConfirmPassword}
                        edge="end"
                        aria-label="toggle password visibility"
                      >
                        {showConfirmPassword ? <Visibility /> : <VisibilityOff />}
                      </IconButton>
                    </InputAdornment>
                  ),
                }}
                sx={{
                  mb: 3,
                  "& .MuiOutlinedInput-root": { borderRadius: 3 },
                  "& input": {
                    paddingTop: "5.5%",
                  },
                  "& .MuiFormHelperText-root": { 
                    textAlign: "left", 
                    ml: 0, 
                    mt: 1.7,
                    mb: -1.5,
                    minHeight: "20px", 
                    display: "flex", 
                    alignItems: "center"
                  },
                }}
              />

              {/* Terms & Conditions Checkbox */}
              <Box sx={{ display: "flex", alignItems: "center", mb: 2 }}>
                <Checkbox sx={{ ml: -1.5, mt: -3 }}
                  checked={form.agree || false}
                  onChange={(e) =>
                    setForm({ ...form, agree: e.target.checked })
                  }
                />
                <Typography variant="body2" sx={{ mt: -0.5 }}>
                  I agree to the <a href="#" style={{ color: "#3F76D1", textDecoration: "none" }}>Terms & Conditions</a> and{" "}
                  <a href="#" style={{ color: "#3F76D1", textDecoration: "none" }}>Privacy Policy</a> and confirm that the country selection is correct
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
                  mb: 2,
                  width: "99.5%",
                  height:"10%"
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
                  mt: 0.5,
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
                  height: 45,
                  mt: 1,
                  mb: 1,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  color: "#696969",
                  fontWeight: "bold",
                  width: "99.5%"
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
                <a href="#" onClick={signuplogin} style={{ color: "#008080", textDecoration: "none" }}>
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
                    width: "101%",
                    height: "100%",
                    objectFit: "cover",
                    objectPosition: "center",
                    flexShrink: 0,
                    backgroundPosition: "center",
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
            top: "-39px",
            right: "-28px",
            zIndex: 10,
            color: "text.primary",
            bgcolor: "background.paper",
            borderRadius: "50%",
            boxShadow: 2,
            transition: "all 0.3s ease",
            "&:hover": {
              bgcolor: "background.default",
            },
            "@media (max-width: 900px)": {
              top: "-39px",
              right: "-28px",
            },
            "@media (max-width: 600px)": {
              top: "-39px",
              right: "-28px",
            },
            "@media (max-width: 400px)": {
              top: "-39px",
              right: "-28px",
            },
            "@media (max-width: 300px)": {
              top: "-39px",
              right: "-28px",
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
