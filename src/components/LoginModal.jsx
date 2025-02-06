import {
    Box,
    Button,
    Checkbox,
    IconButton,
    Modal,
    TextField,
    Typography,
  } from "@mui/material";
  import CloseIcon from "@mui/icons-material/Close";
  import Login from "../images/Login.svg";
  
  const LoginModal = ({ open, onClose, form, setForm, errors, handleLogin }) => {
    return (
      <Modal open={open} onClose={onClose}>
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            height: "100vh",
            position: "relative",
          }}
        >
          <IconButton
            onClick={onClose}
            sx={{
              mt: 12,
              ml: 70,
              mr: -4,
              position: "absolute",
              top: "5px",
              right: "calc(50% - 400px)",
              bgcolor: "white",
              borderRadius: "50%",
              boxShadow: 1,
            }}
          >
            <CloseIcon />
          </IconButton>
          <Box
            sx={{
              display: "flex",
              bgcolor: "white",
              borderRadius: 6,
              overflow: "hidden",
              maxWidth: 800,
              position: "relative",
            }}
          >
            <Box sx={{ padding: 4, width: "50%" }}>
              <Typography variant="h5" fontWeight="bold">
                Login Now
              </Typography>
              <Typography
                sx={{ fontSize: "0.9rem", color: "gray", mb: 3, mt: 1 }}
              >
                To get started, create an account with us. It’s a quick and easy
                process that only takes a few minutes.
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
              <Box sx={{ display: "flex", alignItems: "center", mb: 2 }}>
                <Checkbox
                  checked={form.agree}
                  onChange={(e) => setForm({ ...form, agree: e.target.checked })}
                />
                <Box sx={{ display: "flex" }}>
                  <Typography variant="body2">Remember me</Typography>
                  <Typography sx={{ ml: 8.5 }}>
                    <a href="#" color="green">
                      Forgot password?
                    </a>
                  </Typography>
                </Box>
              </Box>
              {errors.agree && (
                <Typography color="error">{errors.agree}</Typography>
              )}
              <Button
                variant="contained"
                fullWidth
                sx={{
                  bgcolor: "#00A76F",
                  "&:hover": { bgcolor: "#007867" },
                  mb: 2,
                }}
                onClick={handleLogin}
              >
                Login
              </Button>
              <Typography sx={{ mt: 2, mb: 2, ml: 19 }}>OR</Typography>
              <Button variant="outlined" fullWidth>
                Sign in with Google
              </Button>
              <Typography
                sx={{ fontSize: "0.9rem", color: "gray", mb: 3, mt: 3, ml: 7.5 }}
              >
                Don't have an account?{" "}
                <a href="#" onClick={onClose}>
                  Sign Up
                </a>
              </Typography>
            </Box>
            <Box
              sx={{
                width: "50%",
                bgcolor: "#E6F7F1",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <Box
                component="img"
                src={Login}
                alt="Signup Illustration"
                sx={{ width: "100%", height: "100%", objectFit: "cover" }}
              />
            </Box>
          </Box>
        </Box>
      </Modal>
    );
  };
  
  export default LoginModal;