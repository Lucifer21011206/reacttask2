import {
  AppBar,
  Box,
  Button,
  Container,
  InputAdornment,
  TextField,
  Toolbar,
  Typography,
  ThemeProvider,
  useTheme,
} from "@mui/material"
import { Search, LocationOn, Business } from "@mui/icons-material"

export default function Home() {
  const theme = useTheme()

  return (
    <ThemeProvider theme={theme}>
      <Box sx={{ minHeight: "100vh", position: "relative", overflow: "hidden" }}>
        {/* Background Image */}
        <Box
          sx={{
            position: "absolute",
            right: 0,
            top: 0,
            width: "60%",
            height: "100%",
            zIndex: -1,
            // backgroundImage:
              // "url(https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Background-XBhFkh1Z7FfZOeKgJtquY8QlQ4PCoy.png)",
              
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />

        {/* Navigation */}
        <AppBar position="static" elevation={0} sx={{ backgroundColor: "transparent" }}>
          <Container maxWidth="xl">
            <Toolbar disableGutters sx={{ justifyContent: "space-between" }}>
              <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
                <Box component="img" src="/placeholder.svg?height=40&width=40" alt="Logo" sx={{ height: 40 }} />
                <Typography variant="h6" sx={{ fontWeight: "bold" }}>
                  Logoipsum
                </Typography>
              </Box>

              <Box sx={{ display: "flex", gap: 3, alignItems: "center" }}>
                {["Home", "Browse Jobs", "Find Job", "Employer", "Blog"].map((item) => (
                  <Button key={item} color="inherit" sx={{ color: "text.primary" }}>
                    {item}
                  </Button>
                ))}
                <Button variant="outlined" sx={{ borderRadius: 2 }}>
                  Sign Up
                </Button>
                <Button
                  variant="contained"
                  sx={{
                    borderRadius: 2,
                    bgcolor: "#00A76F",
                    "&:hover": {
                      bgcolor: "#007867",
                    },
                  }}
                >
                  Login
                </Button>
              </Box>
            </Toolbar>
          </Container>
        </AppBar>

        {/* Hero Section */}
        <Container
          maxWidth="xl"
          sx={{
            mt: 8,
            display: "flex",
            flexDirection: "column",
            gap: 4,
          }}
        >
          <Box sx={{ maxWidth: "600px" }}>
            <Typography
              variant="h1"
              sx={{
                fontSize: { xs: "2.5rem", md: "3.5rem" },
                fontWeight: "bold",
                mb: 2,
                lineHeight: 1.2,
              }}
            >
              Find Your Dream Job with AI-Powered Recommendations
            </Typography>
            <Typography variant="h6" color="text.secondary" sx={{ mb: 4 }}>
              Upload Your CV And Let Our AI Find The Best Matches For You
            </Typography>

            {/* Search Form */}
            <Box
              sx={{
                display: "flex",
                gap: 2,
                flexWrap: "wrap",
                p: 2,
                bgcolor: "background.paper",
                borderRadius: 2,
                boxShadow: "0 2px 12px rgba(0,0,0,0.1)",
              }}
            >
              <TextField
                select
                label="Industry"
                SelectProps={{
                  native: true,
                }}
                sx={{ minWidth: 200 }}
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <Business />
                    </InputAdornment>
                  ),
                }}
              >
                <option value="">Select Industry</option>
                <option value="tech">Technology</option>
                <option value="health">Healthcare</option>
                <option value="finance">Finance</option>
              </TextField>

              <TextField
                placeholder="Location"
                sx={{ flex: 1, minWidth: 200 }}
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <LocationOn />
                    </InputAdornment>
                  ),
                }}
              />

              <TextField
                placeholder="Search Job"
                sx={{ flex: 2, minWidth: 200 }}
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <Search />
                    </InputAdornment>
                  ),
                }}
              />

              <Button
                variant="contained"
                size="large"
                sx={{
                  minWidth: 120,
                  bgcolor: "#00A76F",
                  "&:hover": {
                    bgcolor: "#007867",
                  },
                }}
              >
                Find Job
              </Button>
            </Box>
          </Box>

          {/* Stats Section */}
          <Box
            sx={{
              position: "absolute",
              right: "15%",
              top: "25%",
              bgcolor: "background.paper",
              p: 3,
              borderRadius: 4,
              boxShadow: "0 4px 24px rgba(0,0,0,0.1)",
              width: "300px",
            }}
          >
            <Box sx={{ display: "flex", justifyContent: "space-between", mb: 2 }}>
              <Box>
                <Typography variant="body2" color="text.secondary">
                  Jobs
                </Typography>
                <Typography variant="h4" fontWeight="bold">
                  15,337
                </Typography>
              </Box>
              <Box>
                <Typography variant="body2" color="text.secondary">
                  Auto Applied
                </Typography>
                <Typography variant="h4" fontWeight="bold">
                  240,273
                </Typography>
              </Box>
            </Box>
          </Box>
        </Container>
      </Box>
    </ThemeProvider>
  )
}

