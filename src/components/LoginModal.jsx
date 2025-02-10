import React, { useState } from "react";
import {
  Box, Button, Checkbox, IconButton, Modal, TextField, Typography, Grid,
  useMediaQuery, useTheme, InputAdornment
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import Login from "../images/Login.svg";
import styles from "./styles";
import emailicon from "../images/Vector.svg";
import passwordicon from "../images/Icon.svg";
import line from "../images/Line.svg";
import { Visibility, VisibilityOff } from "@mui/icons-material";

const LoginModal = ({ open, onClose, loginsignup, form, setForm, errors, handleLogin }) => {
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("sm"));
  const [showPassword, setShowPassword] = useState(false);

  return (
    <Modal open={open} onClose={onClose}>
      <Box sx={{ position: "relative", display: "flex", justifyContent: "center", alignItems: "center", height: "100vh", p: 2 }}>
        {/* Close Button Outside Box */}
        <IconButton onClick={onClose} sx={{ position: "absolute", top: 10, right: 10, zIndex: 10, bgcolor: "white", boxShadow: 1 }}>
          <CloseIcon />
        </IconButton>

        {/* Modal Content Box */}
        <Box sx={styles.BoxStyle}>
          <Grid container sx={styles.Box}>
            <Grid item xs={12} sm={6} sx={{ padding: isSmallScreen ? 2 : 4 }}>
              <Typography variant="h5" fontWeight="bold">Login Now</Typography>
              <Typography sx={{ fontSize: "0.9rem", color: "gray", mb: 3, mt: 2 }}>
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
                sx={{ mb: 2, "& .MuiOutlinedInput-root": { borderRadius: 3 } }}
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
                      <IconButton onClick={() => setShowPassword(!showPassword)}>
                        {showPassword ? <Visibility /> : <VisibilityOff />}
                      </IconButton>
                    </InputAdornment>
                  ),
                }}
                sx={{ mb: 3, "& .MuiOutlinedInput-root": { borderRadius: 3 } }}
              />

              {/* Remember Me & Forgot Password */}
              <Box sx={{ display: "flex", alignItems: "center", mb: 2 }}>
                <Checkbox checked={form.agree} onChange={(e) => setForm({ ...form, agree: e.target.checked })} />
                <Typography variant="body2">Remember me</Typography>
                <Typography sx={{ ml: "auto" }}>
                  <a href="#" style={{ color: "#008080", textDecoration: "none" }}>Forgot password?</a>
                </Typography>
              </Box>

              {/* Login Button */}
              <Button variant="contained" fullWidth sx={{ bgcolor: "#00A76F", "&:hover": { bgcolor: "#007867" }, mb: 2, borderRadius: "9px" }} onClick={handleLogin}>
                Login
              </Button>

              {/* OR Separator */}
              <Typography sx={{ fontSize: "0.9rem", color: "gray", textAlign: "center", mb: 1.2, mt: 1.2 }}>OR</Typography>

              {/* Google Sign-In Button */}
              <Button variant="outlined" fullWidth sx={{ borderRadius: "9px", display: "flex", alignItems: "center" }}>
                <img src="https://cdn4.iconfinder.com/data/icons/logos-brands-7/512/google_logo-google_icongoogle-512.png" alt="Google Logo" style={{ width: 20, height: 20, marginRight: 8 }} />
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
                <Box component="img" src={Login} alt="Login Illustration" sx={{ width: "100%", height: "610px", objectFit: "cover" }} />
              </Grid>
            )}
          </Grid>
        </Box>
      </Box>
    </Modal>
  );
};

export default LoginModal;
