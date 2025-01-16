import React, { useState } from 'react';
import { TextField, Button, MenuItem, Select, InputLabel, FormControl, Grid } from '@mui/material';

const SearchForm = ({ onSearch }) => {
  const [formData, setFormData] = useState({
    applicationId: '',
    applicationType: '',
    assignedTo: '',
    creationDate: '',
    customerName: '',
    createdBy: '',
    status: '',
    stage: '',
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSearch(formData);
  };

  return (
    <form onSubmit={handleSubmit}>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={6} md={4}>
          <TextField
            label="Application ID"
            name="applicationId"
            fullWidth
            variant="outlined"
            onChange={handleChange}
          />
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <FormControl fullWidth variant="outlined">
            <InputLabel>Application Type</InputLabel>
            <Select
              name="applicationType"
              value={formData.applicationType}
              onChange={handleChange}
              label="Application Type"
            >
              <MenuItem value="">Please select</MenuItem>
              {/* Add options dynamically */}
              <MenuItem value="Type1">Type 1</MenuItem>
              <MenuItem value="Type2">Type 2</MenuItem>
            </Select>
          </FormControl>
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <TextField
            label="Customer Name"
            name="customerName"
            fullWidth
            variant="outlined"
            onChange={handleChange}
          />
        </Grid>
        <Grid item xs={12}>
          <Button variant="contained" type="submit">Search</Button>
          <Button variant="outlined" type="button" onClick={() => setFormData({})}>Clear</Button>
        </Grid>
      </Grid>
    </form>
  );
};

export default SearchForm;
