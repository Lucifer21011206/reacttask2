import { Box, Button, IconButton, Modal, Typography } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import CheckCircleTwoToneIcon from "@mui/icons-material/CheckCircleTwoTone";
import AccountCreatedImage from "../images/AccountCreatedImage.svg";

const AccountCreatedModal = ({ open, onClose }) => {
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
            <Typography variant="h5" fontWeight="bold" sx={{ ml: 7, mt: 3 }}>
              Account Created
            </Typography>
            <Typography
              sx={{ fontSize: "0.9rem", color: "gray", mb: 3, mt: 1, ml: 3 }}
            >
              Your account has been created successfully.
            </Typography>
            <Typography
              InputProps={{ startAdornment: <CheckCircleTwoToneIcon /> }}
            />
            <Typography variant="h5" fontWeight="bold" sx={{ mt: 29, ml: 5 }}>
              Complete Your Profile
            </Typography>
            <Button
              fullWidth
              variant="contained"
              sx={{
                fontSize: "0.9rem",
                bgcolor: "#D3D3D3",
                color: "black",
                mt: 2,
              }}
              onClick={onClose}
            >
              Upload your CV/Resume
            </Button>
            <Button
              fullWidth
              variant="contained"
              sx={{ bgcolor: "#D3D3D3", color: "black", mt: 2 }}
              onClick={onClose}
            >
              Create your CV/Resume
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
              src={AccountCreatedImage}
              alt="Signup Illustration"
              sx={{ width: "100%", height: "100%", objectFit: "cover" }}
            />
          </Box>
        </Box>
      </Box>
    </Modal>
  );
};

export default AccountCreatedModal;