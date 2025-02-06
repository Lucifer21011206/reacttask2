import {
    Box,
    Button,
    IconButton,
    Modal,
    TextField,
    Typography,
  } from "@mui/material";
  import CloseIcon from "@mui/icons-material/Close";
  import OTPRightImage from "../images/OTPRightImage.svg";
  
  const OTPModal = ({ open, onClose, resendOTP, handleSubmit }) => {
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
              mt: 18,
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
              borderRadius: 2,
              overflow: "hidden",
              maxWidth: 800,
              position: "relative",
              borderRadius: 6,
            }}
          >
            <Box sx={{ padding: 4, width: "50%" }}>
              <Typography variant="h5" fontWeight="bold">
                OTP Verification
              </Typography>
              <Typography sx={{ fontSize: "0.9rem", color: "gray", mb: 3 }}>
                Please enter the 6-digit verification code To 's123@gmail.com'.
                The Code is valid for 3 minutes
              </Typography>
              <Box
                sx={{ display: "flex", justifyContent: "center", gap: 1, mb: 3 }}
              >
                {[...Array(6)].map((_, i) => (
                  <TextField
                    key={i}
                    sx={{ width: 40, textAlign: "center", borderRadius: 17 }}
                  />
                ))}
              </Box>
              <Box
                sx={{ display: "flex", fontSize: "0.9rem", color: "gray", mb: 3 }}
              >
                <Typography
                  sx={{ ml: 3.5, color: "#00A76F" }}
                  style={{ cursor: "pointer" }}
                  onClick={resendOTP}
                >
                  Resend
                </Typography>
                <Typography sx={{ ml: 23 }}>02:58</Typography>
              </Box>
              <Button
                fullWidth
                variant="contained"
                sx={{ bgcolor: "#00A76F" }}
                onClick={handleSubmit}
              >
                Submit
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
                src={OTPRightImage}
                alt="Signup Illustration"
                sx={{ width: "100%", height: "100%", objectFit: "cover" }}
              />
            </Box>
          </Box>
        </Box>
      </Modal>
    );
  };
  
  export default OTPModal;
