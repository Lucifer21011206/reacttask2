import React,{useState} from "react";
import { 
  Box, Button, Checkbox, IconButton, Modal, TextField, Typography, Grid, 
  useMediaQuery, useTheme ,InputAdornment
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import Login from "../images/Login.svg";
import styles from "./styles";
import emailicon from "../images/Vector.svg";
import passwordicon from "../images/Icon.svg";
import line from "../images/Line.svg";
import { Visibility, VisibilityOff } from '@mui/icons-material'; 

const LoginModal = ({ open, onClose, loginsignup, form, setForm, errors, handleLogin }) => {
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("sm"));
  const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  
  
    const handleClickShowPassword = () => {
      setShowPassword(!showPassword);
    };
  
    const handleClickShowConfirmPassword = () => {
      setShowConfirmPassword(!showConfirmPassword);
    };
  

  return (
    <Modal open={open} onClose={onClose}>
      <Box sx={styles.BoxStyle}>
        <IconButton onClick={onClose} sx={styles.IconButton2}>
          <CloseIcon />
        </IconButton>
        <Grid container sx={styles.Box}>
          <Grid item xs={12} sm={6} sx={{ padding: isSmallScreen ? 2 : 4 }}>
            <Typography variant="h5" fontWeight="bold">
              Login Now
            </Typography>
            <Typography sx={{ fontSize: "0.9rem", color: "gray", mb: 3 ,mt:2}}>
              To get started, log in with your account. It’s a quick and easy process that only takes a few minutes.
            </Typography>

            {/* Email Input Field */}
            <TextField
              fullWidth
              placeholder="Enter email address"
              value={form.email}
              onChange={(e) => setForm({ ...form, email: e.target.value })}
              error={!!errors.email}
              helperText={errors.email}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <Box component="img" src={emailicon} alt="Email Icon" sx={{ width: 24, height: 24, ml: 0.5 }} />
                    <Box component="img" src={line} alt="Second Icon" sx={{ width: 24, height: 24, ml: 1 }} />
                  </InputAdornment>
                ),
              }}
              sx={{
                mb: 2,
                "& .MuiOutlinedInput-root": {
                  borderRadius: 3, 
                  "& input": {
                    ml: -3.5,
                    padding: "5%",
                  }
                },
                "& .MuiFormHelperText-root": { 
                  textAlign: "left", 
                  ml: 0, /* Adjust the left margin here */
                  mt: 1.2,
                  mb: -1.5,
                  minHeight: "20px", 
                  display: "flex", 
                  alignItems: "center"
                },
              }}
            />

            {/* Password Input Field */}
            <TextField
              fullWidth
              placeholder="Enter password"
              type={showPassword ? 'text' : 'password'}
              value={form.password || ""}
              onChange={(e) => setForm({ ...form, password: e.target.value })}
              error={!!errors.password}
              helperText={errors.password}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <Box component="img" src={passwordicon} alt="Password Icon" sx={{ width: 24, height: 24, ml: 0.5 }} />
                    <Box component="img" src={line} alt="Second Icon" sx={{ width: 24, height: 24, ml: 1 }} />
                  </InputAdornment>
                ),
                endAdornment: (
                          <InputAdornment position="end">
                            <IconButton
                              onClick={handleClickShowPassword}
                              edge="end"
                              aria-label="toggle password visibility"
                            >
                              {showPassword ? <Visibility /> : <VisibilityOff />} {/* Toggle eye icon */}
                            </IconButton>
                          </InputAdornment>
                        ),
              }}
              sx={{
                mb: 3,
                "& .MuiOutlinedInput-root": { borderRadius: 3 },
                "& input": {
                  ml: -1.5,
                  paddingTop: "5%", 
                },
                "& .MuiFormHelperText-root": { 
                  textAlign: "left", 
                  ml: 0, /* Adjust the left margin here */
                  mt: 1.2,
                  mb: -1.5,
                  minHeight: "20px", 
                  display: "flex", 
                  alignItems: "center"
                },
              }}
            />

            {/* Remember Me & Forgot Password */}
            <Box sx={{ display: "flex", alignItems: "center", mb: 2, ml: -1.5 }}>
              <Checkbox
                checked={form.agree}
                onChange={(e) => setForm({ ...form, agree: e.target.checked })}
              />
              <Typography variant="body2">Remember me</Typography>
              <Typography sx={{ ml: "auto" }}>
                <a href="#" style={{ color: "#008080", textDecoration: "none" }}>
                  Forgot password?
                </a>
              </Typography>
            </Box>

            {/* Error Message for Agreement Checkbox */}
            {errors.agree && (
              <Typography color="error" sx={{ mb: 2, fontSize: "0.9rem" }}>
                {errors.agree}
              </Typography>
            )}

            {/* Login Button */}
            <Button
              variant="contained"
              fullWidth
              sx={{
                bgcolor: "#00A76F",
                "&:hover": { bgcolor: "#007867" },
                mb: 2,
                borderRadius: "9px"
              }}
              onClick={handleLogin}
            >
              Login
            </Button>

            {/* OR Separator */}
            <Typography sx={{ fontSize: "0.9rem", color: "gray", textAlign: "center", mb: 1.2, mt: 1.2 }}>
              OR
            </Typography>

            {/* Google Sign-In Button */}
            <Button
              variant="outlined"
              fullWidth
              sx={{
                borderRadius: "9px",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                textTransform: "none"
              }}
            >
              <img
                src="https://cdn4.iconfinder.com/data/icons/logos-brands-7/512/google_logo-google_icongoogle-512.png"
                alt="Google Logo"
                style={{ width: 20, height: 20, marginRight: 8 }}
              />
              Sign in with Google
            </Button>

            {/* Signup Redirect */}
            <Typography sx={{ textAlign: "center", fontSize: "0.9rem", color: "gray", mt: 3 }}>
              Don't have an account? <a href="#" onClick={loginsignup} style={{ color: "#008080", textDecoration: "none" }}>Sign Up</a>
            </Typography>
          </Grid>

          {/* Right-Side Illustration (Only on Large Screens) */}
          {!isSmallScreen && (
            <Grid item xs={6} sx={styles.Box2}>
              <Box
                component="img"
                src={Login}
                alt="Login Illustration"
                sx={{
                  width: "100%",
                  height: "610px",
                  objectFit: "cover",
                  objectPosition: "center",
                  display: "block",
                  flexShrink: 0
                }}
              />
            </Grid>
          )}
        </Grid>
      </Box>
    </Modal>
  );
};

export default LoginModal;
