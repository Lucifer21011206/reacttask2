import { Box, Button, TextField, InputAdornment, Grid, useMediaQuery, useTheme } from "@mui/material";
import styles from "./styles.jsx";
import industryimg from "../images/briefcase alternatif.svg";
import iconn from "../images/Iconn.svg";
import location from "../images/Group 1171279637.svg";
import textContent from "./TextContent.jsx"; // Ensure this is the correct import

const JobSearchForm = () => {
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <Box
      style={styles.jobsearchbox1}
      sx={styles.JobSearchFormBox}
    >
      <Grid container spacing={2} alignItems="center">
        <Grid item xs={12} sm={6} md={3}>
          <TextField
            style={{ marginLeft: "2.5%", borderRadius: "30%" }}
            select
            SelectProps={{ native: true }}
            fullWidth
            variant="standard"
            InputProps={{
              disableUnderline: true,
              startAdornment: (
                <InputAdornment position="start">
                  <img src={industryimg} width="16" height="16" style={{ marginRight: "8px", marginLeft: "2px" }} />
                </InputAdornment>
              ),
            }}
          >
            <option value="" style={{ color: "#767676" }}>{textContent.industry.Industry}</option>
            <option value="tech">{textContent.industry.tech}</option>
            <option value="health">{textContent.industry.health}</option>
            <option value="finance">{textContent.industry.finance}</option>
          </TextField>
        </Grid>

        <Grid item xs={12} sm={6} md={3}>
          <TextField
            placeholder="Location"
            fullWidth
            variant="standard"
            InputProps={{
              disableUnderline: true,
              startAdornment: (
                <InputAdornment position="start">
                  <img src={location} width="16" height="16" style={{ marginRight: "8px" }} />
                </InputAdornment>
              ),
            }}
          />
        </Grid>

        <Grid item xs={12} sm={6} md={3}>
          <TextField
            placeholder="Search Job"
            fullWidth
            variant="standard"
            InputProps={{
              disableUnderline: true,
              startAdornment: (
                <InputAdornment position="start">
                  <img src={iconn} width="16" height="16" style={{ marginRight: "8px" }} />
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
            {textContent.industry.findjob}
          </Button>
        </Grid>
      </Grid>
    </Box>
  );
};

export default JobSearchForm;
