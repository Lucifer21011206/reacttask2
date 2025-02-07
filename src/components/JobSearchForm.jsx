import { Box, Button, TextField, InputAdornment, Grid, useMediaQuery, useTheme } from "@mui/material";
import { Search, LocationOn, Business } from "@mui/icons-material";
import styles from "./styles.jsx";

const JobSearchForm = () => {
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <Box sx={styles.JobSearchFormBox}>
      <Grid container spacing={2} alignItems="center">
        <Grid item xs={12} sm={6} md={3}>
          <TextField
            select
            label="Industry"
            SelectProps={{ native: true }}
            fullWidth
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
        </Grid>

        <Grid item xs={12} sm={6} md={3}>
          <TextField
            placeholder="Location"
            fullWidth
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <LocationOn />
                </InputAdornment>
              ),
            }}
          />
        </Grid>

        <Grid item xs={12} sm={6} md={3}>
          <TextField
            placeholder="Search Job"
            fullWidth
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <Search />
                </InputAdornment>
              ),
            }}
          />
        </Grid>

        <Grid item xs={12} sm={6} md={3} textAlign={isSmallScreen ? "center" : "right"}>
          <Button
            variant="contained"
            size="large"
            sx={{
              minWidth: 50,
              bgcolor: "#00A76F",
              "&:hover": { bgcolor: "#007867" },
            }}
          >
            Find Job
          </Button>
        </Grid>
      </Grid>
    </Box>
  );
};

export default JobSearchForm;
