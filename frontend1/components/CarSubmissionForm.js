import { useState } from 'react';
import { TextField, Button, Grid, Typography, Input } from '@mui/material';
import axios from 'axios';

const CarSubmissionForm = () => {
  const [carModel, setCarModel] = useState('');
  const [price, setPrice] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [maxPictures, setMaxPictures] = useState(1);
  const [pictures, setPictures] = useState([]);
  const [error, setError] = useState(null);
  const [successMessage, setSuccessMessage] = useState(null); 
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (pictures.length > maxPictures) {
      setError(`You can only upload up to ${maxPictures} pictures.`);
      return;
    }

    const formData = new FormData();
    formData.append('carModel', carModel);
    formData.append('price', price);
    formData.append('phoneNumber', phoneNumber);
    formData.append('maxPictures', maxPictures);
    pictures.forEach((picture) => {
      formData.append('pictures', picture);
    });
    try {
        setSuccessMessage('Form submission successful!');
        console.log("formData", formData)      
    } catch (err) {
      setError('Failed to submit the form. Please try again.');
      setSuccessMessage(null)
    }
  };

  return (
    <Grid container justifyContent="center" style={{ marginTop: '50px' }}>
    <Grid item xs={12} sm={6}>
      <form onSubmit={handleSubmit}>
        <Typography variant="h4" gutterBottom>Submit Car Details</Typography>
        
        <TextField
          label="Car Model"
          value={carModel}
          onChange={(e) => setCarModel(e.target.value)}
          fullWidth
          margin="normal"
          required // Added required attribute
        />
        
        <TextField
          label="Price"
          type="number"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
          fullWidth
          margin="normal"
          required // Added required attribute
        />
        
        <TextField
          label="Phone Number"
          value={phoneNumber}
          onChange={(e) => setPhoneNumber(e.target.value)}
          fullWidth
          margin="normal"
          required // Added required attribute
        />
        
        <TextField
          label="Max Number of Pictures"
          type="number"
          value={maxPictures}
          onChange={(e) => setMaxPictures(e.target.value)}
          fullWidth
          margin="normal"
          required // Added required attribute
        />
        
        <Input
          type="file"
          inputProps={{ multiple: true }}
          onChange={(e) => setPictures([...e.target.files])}
          fullWidth
          margin="normal"
          required // Added required attribute
        />
        
        {error && <Typography color="error">{error}</Typography>}
        {successMessage && <Typography color="green">{successMessage}</Typography>}
        <Button type="submit" variant="contained" color="primary" fullWidth style={{ marginTop: '20px' }}>
          Submit
        </Button>
      </form>
    </Grid>
  </Grid>
  
  );
};

export default CarSubmissionForm;
