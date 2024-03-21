import React from 'react';
import Empl from './Empl.png';
import { Typography } from '@mui/material';

const First = () => {
  return (
    <div className='home' style={{display:'flex', margin:'5% 10% 2% 5%' }} >
      <img src={Empl} alt="Logo" />
      
      <Typography variant='h1'style={{color:'blue', fontFamily:'Arial black', margin:'7% 2% 6% 8%'}} >KEEP EMPLOYEES <br></br> UPDATED</Typography>


    </div>
  )
}

export default First