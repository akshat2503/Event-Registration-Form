import React, { useState } from 'react';
import { TextField, Button, FormControlLabel, Switch, Box, Typography } from '@mui/material';
import useForm from './useForm';
import useValidation from './useValidation';

const EventRegistrationForm = () => {
  const initialValues = {
    name: '',
    email: '',
    age: '',
    attendingWithGuest: false,
    guestName: ''
  };

  const { formData, handleChange, resetForm, setFormData } = useForm(initialValues);
  const { errors, validate } = useValidation();
  const [submittedData, setSubmittedData] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate(formData)) {
      setSubmittedData(formData);
      resetForm();
    }
  };

  return (
    <Box sx={{ maxWidth: 400, mx: 'auto', mt: 4 }}>
      <form onSubmit={handleSubmit}>
        <Typography variant="h4" gutterBottom>Event Registration</Typography>
        <TextField
          fullWidth
          label="Name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          error={!!errors.name}
          helperText={errors.name}
          margin="normal"
        />
        <TextField
          fullWidth
          label="Email"
          name="email"
          type="email"
          value={formData.email}
          onChange={handleChange}
          error={!!errors.email}
          helperText={errors.email}
          margin="normal"
        />
        <TextField
          fullWidth
          label="Age"
          name="age"
          type="number"
          value={formData.age}
          onChange={handleChange}
          error={!!errors.age}
          helperText={errors.age}
          margin="normal"
        />
        <FormControlLabel
          control={
            <Switch
              checked={formData.attendingWithGuest}
              onChange={handleChange}
              name="attendingWithGuest"
              color="primary"
            />
          }
          label="Are you attending with a guest?"
        />
        {formData.attendingWithGuest && (
          <TextField
            fullWidth
            label="Guest Name"
            name="guestName"
            value={formData.guestName}
            onChange={handleChange}
            error={!!errors.guestName}
            helperText={errors.guestName}
            margin="normal"
          />
        )}
        <Button type="submit" variant="contained" color="primary">Submit</Button>
      </form>
      {submittedData && (
        <Box mt={4}>
          <Typography variant="h6">Submitted Data:</Typography>
          <pre>{JSON.stringify(submittedData, null, 2)}</pre>
        </Box>
      )}
    </Box>
  );
};

export default EventRegistrationForm;
