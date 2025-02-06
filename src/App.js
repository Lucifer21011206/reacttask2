import { useState } from "react";
import { ThemeProvider, Container, Box, Typography } from "@mui/material";
import AppBarComponent from "./components/AppBarComponent";
import JobSearchForm from "./components/JobSearchForm";
import SignUpModal from "./components/SignUpModal";
import OTPModal from "./components/OTPModal";
import ResendOTPModal from "./components/ResendOTPModal";
import AccountCreatedModal from "./components/AccountCreatedModal";
import LoginModal from "./components/LoginModal";
import LoginOTPModal from "./components/LoginOTPModal";
import BackgroundImage from "./components/BackgroundImage";
import { useTheme } from "@mui/material/styles";
import LoginResendOTPModal from "./components/LoginResendOTPModal";

export default function App() {
  const theme = useTheme();
  const [openSignUp, setOpenSignUp] = useState(false);
  const [openOTP, setOpenOTP] = useState(false);
  const [resendOTP, setResendOTP] = useState(false);
  const [accountCreated, setAccountCreated] = useState(false);
  const [login, setLogin] = useState(false);
  const [loginOtp, setLoginOtp] = useState(false);
  const [resendloginforotp, setResendLoginForOTP] = useState(false)
  
  const [form, setForm] = useState({
    email: "",
    password: "",
    confirmPassword: "",
    agree: false,
  });
  const [errors, setErrors] = useState({});

 
  const resendloginforotpp = () => {
    let newErrors = {};

    if (Object.keys(newErrors).length === 0) {
      // alert("Form submitted successfully!");
      // setOpenSignUp(false);
     
    }
  }

  const resendOTP3 = () => {
    let newErrors = {};

    if (Object.keys(newErrors).length === 0) {
      // alert("Form submitted successfully!");
      setResendLoginForOTP(true);
      setLoginOtp(false)
     
    }
  }

  const handleSubmit = () => {
    let newErrors = {};

    if (!form.email.trim()) {
      newErrors.email = "Email is required.";
    } else if (!/^\S+@\S+\.\S+$/.test(form.email)) {
      newErrors.email = "Please enter a valid email address.";
    }

    if (!form.password.trim()) {
      newErrors.password = "Password is required.";
    } else if (form.password.length < 8) {
      newErrors.password = "Password must have at least 8 characters.";
    }

    if (!form.confirmPassword.trim()) {
      newErrors.confirmPassword = "Please confirm your password.";
    } else if (form.password !== form.confirmPassword) {
      newErrors.confirmPassword = "Passwords do not match.";
    }

    if (!form.agree) {
      newErrors.agree = "You must agree to the terms.";
    }

    setErrors(newErrors);

    if (Object.keys(newErrors).length === 0) {
      // alert("Form submitted successfully!");
      setOpenSignUp(false);
      setOpenOTP(true);
    }
  };

  const resendOTP1 = () => {
    let newErrors = {};

    if (Object.keys(newErrors).length === 0) {
      // alert("Form submitted successfully!");
      // setOpenSignUp(false);
      setOpenOTP(false);
      setResendOTP(true);
    }
  };

  const resendOTP2 = () => {
    let newErrors = {};

    if (Object.keys(newErrors).length === 0) {
      // alert("Form submitted successfully!");
      // setOpenSignUp(false);
      setLoginOtp(false);
      setResendOTP(true);
    }
  };

  const accountCreatedHandler = () => {
    let newErrors = {};

    if (Object.keys(newErrors).length === 0) {
      // alert("Form submitted successfully!");
      // setOpenSignUp(false);
      setOpenOTP(false);
      setAccountCreated(true);
    }
  };

  const resendoffacccreate = () => {
    let newErrors = {};

    if (Object.keys(newErrors).length === 0) {
      // alert("Form submitted successfully!");
      // setOpenSignUp(false);
      setResendOTP(false);
      setAccountCreated(true);
    }
  }

const handleOTPverify = () => {

}


  const handleLogin = () => {
    let newErrors = {};

    if (!form.email.trim()) {
      newErrors.email = "Email is required.";
    } else if (!/^\S+@\S+\.\S+$/.test(form.email)) {
      newErrors.email = "Please enter a valid email address.";
    }

    if (!form.password.trim()) {
      newErrors.password = "Password is required.";
    } else if (form.password.length < 8) {
      newErrors.password = "Password must have at least 8 characters.";
    }

    setErrors(newErrors);

    if (Object.keys(newErrors).length === 0) {
      // alert("Form submitted successfully!");
      // setOpenSignUp(false);
      setLogin(false);
      setLoginOtp(true);
    }
  };

  return (
    <ThemeProvider theme={theme}>
      <Box
        sx={{ minHeight: "100vh", position: "relative", overflow: "hidden" }}
      >
        <BackgroundImage />
        <AppBarComponent
          onSignUpClick={() => setOpenSignUp(true)}
          onLoginClick={() => setLogin(true)}
        />
        <Container
          maxWidth="xl"
          sx={{ mt: 8, display: "flex", flexDirection: "column", gap: 4 }}
        >
          <Box sx={{ maxWidth: "600px" }}>
            <Typography
              variant="h1"
              sx={{
                fontSize: { xs: "2.5rem", md: "3.5rem" },
                fontWeight: "bold",
                mb: 2,
                lineHeight: 1.2,
                mt: 15,
                ml: 15,
                mr:-7,
              }}
            >
              Find Your Dream Job with AI-Powered Recommendations
            </Typography>
            <Typography variant="h6" color="text.secondary" sx={{ mb: 4, ml:40,mr:-27 }}>
              Upload Your CV And Let Our AI Find The Best Matches For You
            </Typography>
            <JobSearchForm />
          </Box>
        </Container>

        <SignUpModal
          open={openSignUp}
          onClose={() => setOpenSignUp(false)}
          form={form}
          setForm={setForm}
          errors={errors}
          handleSubmit={handleSubmit}
        />
        <OTPModal
          open={openOTP}
          onClose={() => setOpenOTP(false)}
          resendOTP={resendOTP1}
          handleSubmit={accountCreatedHandler}
        />
        <ResendOTPModal
          open={resendOTP}
          onClose={() => setResendOTP(false)}
          handleSubmit={resendoffacccreate}
        />
        <AccountCreatedModal
          open={accountCreated}
          onClose={() => setAccountCreated(false)}
        />
        <LoginModal
          open={login}
          onClose={() => setLogin(false)}
          form={form}
          setForm={setForm}
          errors={errors}
          handleLogin={handleLogin}
        />
        <LoginOTPModal
          open={loginOtp}
          onClose={() => setLoginOtp(false)}
          resendOTP={resendOTP3}
          handleSubmit={accountCreatedHandler}
        />
        <LoginResendOTPModal
          open={resendloginforotp}
          onClose={() => setResendLoginForOTP(false)}
          // resendOTP={resendOTP3}
          // handleSubmit={accountCreatedHandler}
        />
      </Box>
    </ThemeProvider>
  );
}
