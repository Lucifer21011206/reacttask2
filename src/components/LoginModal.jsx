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
  useTheme,
  InputAdornment,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import LockIcon from "@mui/icons-material/Lock";
// import GoogleIcon from "@mui/icons-material/Google";
import GoogleIcon from "../images/google_logo-google_icongoogle-512.svg";

import Login from "../images/Login.svg";
import styles from "./styles";
import emailicon from "../images/Vector.svg";
import passwordicon from "../images/Icon.svg";
import line from "../images/Line.svg";

const LoginModal = ({
  open,
  onClose,
  loginsignup,
  form,
  setForm,
  errors,
  handleLogin,
}) => {
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <Modal open={open} onClose={onClose}>
      <Box sx={styles.BoxStyle}>
        <IconButton onClick={onClose} sx={styles.IconButton2}>
          <CloseIcon />
        </IconButton>
        <Grid container sx={styles.Box}>
          <Grid item xs={12} sm={6} sx={{ padding: isSmallScreen ? 2 : 4 }}>
            <Typography variant="h5" fontWeight="bold" sx={{ mt: -0.9 }}>
              Login Now
            </Typography>
            <Typography
              sx={{ fontSize: "0.9rem", color: "gray", mb: 3, mt: 2 }}
            >
              To get started, log in with your account. It’s a quick and easy
              process that only takes a few minutes.
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
                "& .MuiOutlinedInput-root": {
                  ml: 0,
                  borderRadius: 3, // Rounded corners
                  "& input": {
                    ml: -3.4,
                    padding: "5%", // Adjust padding for better spacing
                  },
                  "& .MuiFormHelperText-root": {
                    textAlign: "left",
                    ml: 0,
                    mt: 1.7,
                    mb: -1.5,
                    minHeight: "20px",
                    display: "flex",
                    alignItems: "center",
                  },
                },
              }}
            />

            {/* Password Input Field */}
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
                mb: 3,
                "& .MuiOutlinedInput-root": { borderRadius: 3 },
                "& input": {
                  ml: -1.5,
                  paddingTop: "5%", // Adjusts the vertical position of the placeholder
                  // paddingBottom: "8px", // Ensures content remains centered
                },
                "& .MuiFormHelperText-root": {
                  textAlign: "left",
                  ml: 0,
                  mt: 1.7,
                  mb: -1.5,
                  minHeight: "20px",
                  display: "flex",
                  alignItems: "center",
                },
              }}
            />

            {/* Remember Me & Forgot Password */}
            <Box sx={{ display: "flex", alignItems: "center", mb: 2 }}>
              <Checkbox
                checked={form.agree}
                onChange={(e) => setForm({ ...form, agree: e.target.checked })}
              />
              <Typography variant="body2">Remember me</Typography>
              <Typography sx={{ ml: "auto" }}>
                <a href="#" style={{ color: "green" }}>
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
                borderRadius: "9px",
              }}
              onClick={handleLogin}
            >
              Login
            </Button>

            {/* OR Separator */}
            <Typography
              sx={{
                fontSize: "0.9rem",
                color: "gray",
                textAlign: "center",
                mb: 1.5,
                mt: 1.5,
              }}
            >
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
                textTransform: "none",
              }}
            >
              <img
                src={GoogleIcon}
                alt="Google Logo"
                style={{ width: 20, height: 20, marginRight: 8 }}
              />{" "}
              Sign in with Google
            </Button>

            {/* Signup Redirect */}
            <Typography
              sx={{
                textAlign: "center",
                fontSize: "0.9rem",
                color: "gray",
                mt: 3,
              }}
            >
              Don't have an account?{" "}
              <a
                href="#"
                onClick={loginsignup}
                style={{ color: "#008080", textDecoration: "none" }}
              >
                Sign Up
              </a>
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
                  height: "600px",
                  objectFit: "cover",
                  objectPosition: "center",
                  display: "block",
                  flexShrink: 0,
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
