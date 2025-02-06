import { Box, Button, TextField, InputAdornment } from "@mui/material";
import { Search, LocationOn, Business } from "@mui/icons-material";
import styles from './styles.jsx'


const JobSearchForm = () => {
  return (
    <Box
      sx={styles.JobSearchFormBox}
    >
      <TextField
        select
        label="Industry"
        SelectProps={{ native: true }}
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
        sx={{ flex: 1, minWidth: 100 }}
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
        sx={{ flex: 1, minWidth: 100 }}
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
          minWidth: 50,
          bgcolor: "#00A76F",
          "&:hover": { bgcolor: "#007867" },
        }}
      >
        Find Job
      </Button>
    </Box>
  );
};

export default JobSearchForm;
