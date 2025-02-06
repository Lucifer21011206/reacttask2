import { Box, Button, IconButton, InputAdornment, Modal, Typography } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import CheckCircleTwoToneIcon from "@mui/icons-material/CheckCircleTwoTone";
import check from "../images/check.svg"
import AccountCreatedImage from "../images/AccountCreatedImage.svg";
import styles from './styles.jsx'

const AccountCreatedModal = ({ open, onClose }) => {
  return (
    <Modal open={open} onClose={onClose}>
      <Box 
        sx={styles.BoxStyle}
      >
        <IconButton className="AccountCreatedModalCloseIconCss"
          onClick={onClose}
          sx={{
            mt: 15,
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
          sx={styles.Box}
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
            <Typography variant="h6" sx={{ alignItems: "center" }}>
  <Box
    component="img"
    src={check}  // Path to your check.svg image
    sx={{top:"10px", position:"relative", mt:-3, ml:14, mb:-15}}
  />
  
</Typography>


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
            sx={styles.Box2}
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
