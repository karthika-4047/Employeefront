import React from 'react';
// import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { Button, Typography } from '@mui/material';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';

const Empform = () => {
  return (
    <Card style={{ margin: '5% 10% 2% 37%', boxSizing: 'border-box', boxShadow: '0 15px 25px rgba(0, 0, 0, 0.6)', width:'400px'}}>
    <CardContent>
      <Typography variant='h4'style={{textAlign:'center' }} >FORM</Typography>
      <form>
        <CardContent sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center',marginBottom: '8px' }}>
          <Typography variant='h6' style={{ marginRight: '8px' }}>Name:</Typography>
          <TextField label="Name" variant="outlined" />
        </CardContent>
        <CardContent sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '8px' }}>
          <Typography variant='h6' style={{ marginRight: '8px' }}>Designation:</Typography>
          <TextField label="Designation" variant="outlined" />
        </CardContent>
        <CardContent sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '8px' }}>
          <Typography variant='h6' style={{ marginRight: '8px' }}>Location:</Typography>
          <TextField label="Location" variant="outlined" />
        </CardContent>
        <CardContent sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '8px' }}>
          <Typography variant='h6' style={{ marginRight: '8px' }}>Salary:</Typography>
          <TextField label="Salary" variant="outlined" />
        </CardContent>
      </form>
      <Button style={{width:'100%', height:'auto', backgroundColor:'blue', color:'white'}} >SUBMIT</Button>
    
    </CardContent>
  </Card>  

  )
}

export default Empform