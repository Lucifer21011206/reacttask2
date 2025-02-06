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
  import SignUpRightImage from "../images/signuprightimage1.svg";
  
  const SignUpModal = ({
    open,
    onClose,
    form,
    setForm,
    errors,
    handleSubmit,
  }) => {
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
                Create Your Account
              </Typography>
              <Typography sx={{ fontSize: "0.9rem", color: "gray", mb: 3 }}>
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
              <TextField
                fullWidth
                label="Confirm Password"
                value={form.confirmPassword}
                onChange={(e) =>
                  setForm({ ...form, confirmPassword: e.target.value })
                }
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
                  I agree to the <a href="#">Terms & Conditions</a> and{" "}
                  <a href="#">Privacy Policy</a>
                </Typography>
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
                onClick={handleSubmit}
              >
                Create an account
              </Button>
              <Button variant="outlined" fullWidth>
                Sign in with Google
              </Button>
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
                src={SignUpRightImage}
                alt="Signup Illustration"
                sx={{ width: "100%", height: "100%", objectFit: "cover" }}
              />
            </Box>
          </Box>
        </Box>
      </Modal>
    );
  };
  
  export default SignUpModal;