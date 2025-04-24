import React from 'react';
import { Box, Typography, Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';

export default function EmptyCart() {
  const navigate = useNavigate()
  return (
    <div className='h-screen w-full flex justify-center items-center'>
    <Box
      display="flex"
      flexDirection="column"
      alignItems="center"
      justifyContent="center"
      p={4}
      
      sx={{ bgcolor: '#fff', borderRadius: 2, boxShadow: 3, width: 320, mx: 'auto', my: 4 }}
    >
      <img
        src="https://cdn-icons-png.flaticon.com/512/2038/2038854.png"
        alt="Empty Cart"
        width={150}
        height={150}
        style={{ marginBottom: 16 }}
      />
      <Typography variant="h6" gutterBottom>
        Your cart is Empty
      </Typography>
      <Button
        variant="contained"
        color="error"
        sx={{ mt: 2, px: 4, py: 1 }}
        onClick={()=>navigate("/")}
      >
        START SHOPPING
      </Button>
    </Box>
    </div>);
}
