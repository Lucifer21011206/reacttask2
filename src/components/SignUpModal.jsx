import { Box, Button, Checkbox, IconButton, Modal, TextField, Typography, Grid, useMediaQuery } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import SignUpRightImage from "../images/signuprightimage1.svg";
import styles from "./styles";
import GoogleIcon from "@mui/icons-material/Google";

const SignUpModal = ({ open, onClose, form, setForm, errors, signuplogin,handleSubmit }) => {
  const isSmallScreen = useMediaQuery("(max-width:600px)");

  return (
    <Modal open={open} onClose={onClose}>
      <Box sx={styles.BoxStyle}>
        <IconButton onClick={onClose} sx={styles.IconButton}>
          <CloseIcon />
        </IconButton>
        <Grid container sx={styles.Box}>
          <Grid item xs={12} sm={6} sx={{ padding: 4 }}>
            <Typography variant="h5" fontWeight="bold">
              Create Your Account
            </Typography>
            <Typography sx={{ fontSize: "0.9rem", color: "gray", mb: 3 }}>
              To get started, create an account with us. It’s a quick and easy process that only takes a few minutes.
            </Typography>
            <TextField
              fullWidth
              label="Enter email address"
              value={form.email}
              onChange={(e) => setForm({ ...form, email: e.target.value })}
              error={!!errors.email}
              helperText={errors.email}
              sx={{ mb: 2 }}
            />
            <TextField
              fullWidth
              label="Enter Password"
              type="password"
              value={form.password}
              onChange={(e) => setForm({ ...form, password: e.target.value })}
              error={!!errors.password}
              helperText={errors.password}
              sx={{ mb: 2 }}
            />
            <TextField
              fullWidth
              label="Confirm Password"
              value={form.confirmPassword}
              onChange={(e) => setForm({ ...form, confirmPassword: e.target.value })}
              error={!!errors.confirmPassword}
              helperText={errors.confirmPassword}
              type="password"
              sx={{ mb: 2 }}
            />
            <Box sx={{ display: "flex", alignItems: "center", mb: 2 }}>
              <Checkbox
                checked={form.agree}
                onChange={(e) => setForm({ ...form, agree: e.target.checked })}
              />
              <Typography variant="body2">
                I agree to the <a href="#">Terms & Conditions</a> and <a href="#">Privacy Policy</a>
              </Typography>
            </Box>
            {errors.agree && <Typography color="error">{errors.agree}</Typography>}
            <Button
              variant="contained"
              fullWidth
              sx={{ bgcolor: "#00A76F", "&:hover": { bgcolor: "#007867" }, mb: 2 }}
              onClick={handleSubmit}
            >
              Create an account
            </Button>
            <Typography  sx={{ fontSize: "0.9rem", color: "gray", mb: 3 , ml:19,mt:1,mb:1}}>
              OR
            </Typography>
            <Button variant="outlined" fullWidth> 
            <GoogleIcon sx={{mr:1}}/> 
              Sign in with Google
            </Button>
            <Typography sx={{ textAlign: "center", fontSize: "0.9rem", color: "gray", mt: 3 }}>
              Already have an acoount? <a href="#" onClick={signuplogin}>Login</a>
            </Typography>
          </Grid>
          {!isSmallScreen && (
            <Grid item xs={6} sx={styles.Box2}>
              <Box
                component="img"
                src={SignUpRightImage}
                alt="Signup Illustration"
                sx={styles.Box3}
              />
            </Grid>
          )}
        </Grid>
      </Box>
    </Modal>
  );
};

export default SignUpModal;
