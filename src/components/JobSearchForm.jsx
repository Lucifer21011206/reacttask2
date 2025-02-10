import { Box, Button, TextField, InputAdornment, Grid, useMediaQuery, useTheme } from "@mui/material";
import { Search, LocationOn, Business, Widgets } from "@mui/icons-material";
import styles from "./styles.jsx";
import industryimg from "../images/briefcase alternatif.svg"
import iconn from "../images/Iconn.svg"
import location from "../images/Group 1171279637.svg"


const JobSearchForm = () => {
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <Box 
    style={{
      borderradius:"40%",
      marginRight:"-37%",
      marginLeft:"31%",
      paddingRight:"1%",
      paddingLeft:"0%",
      
      // marginTop:"20%"
    }}
    sx={styles.JobSearchFormBox}>
      <Grid container spacing={2} alignItems="center">
        <Grid item xs={12} sm={6} md={3}>
          <TextField
          style={{marginLeft:"2.5%", borderRadius:"30%"}}
            select
            // label="Industry"
            SelectProps={{ native: true }}
            fullWidth
             variant="standard"
            InputProps={{
              disableUnderline: true,
              startAdornment: (
                <InputAdornment position="start">
        <img 
          src={industryimg} 
          
          width="16" 
          height="16"
          style={{ marginRight: "8px" ,marginLeft:"2px"}} // Adjust spacing
        />
      </InputAdornment>
              ),
            }}
            
          >
            <option value="" style={{ color: "#767676" }}>Industry</option>
            <option value="tech">Technology</option>
            <option value="health">Healthcare</option>
            <option value="finance">Finance</option>
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
        <img 
          src={location} 
          
         width="16" 
          height="16"
          style={{ marginRight: "8px" }} // Adjust spacing
        />
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
        <img 
          src={iconn} 
          
           width="16" 
          height="16"
          style={{ marginRight: "8px" }} // Adjust spacing
        />
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
