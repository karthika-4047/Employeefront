import React, { useEffect, useState } from 'react'
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import axios from 'axios';
import { Typography } from '@mui/material';

const Home = () => {
    const [employee,setEmployee] = useState([]);
    useEffect(()=>{
      axios.get('https://jsonplaceholder.typicode.com/users').then((res)=>{
        console.log(res.data);
        setEmployee(res.data);
      })
  },[])
  return (
    <div>
      <br></br>
      <Typography variant='h4' style={{textAlign:'center', color:'darkblue', fontFamily:'Times New Roman', textDecoration:'underline'}} >EMPLOYEE LIST</Typography>
      <br></br>
    <TableContainer component={Paper} style={{alignContent:'center'}} >
      <Table sx={{ minWidth: 650 }} aria-label="simple table"style={{width:'800px', marginLeft:'350px', border: '1px solid blue'}} >
        <TableHead>
          <TableRow>
            <TableCell style={{backgroundColor:'lightblue'}}>id</TableCell>
            <TableCell style={{backgroundColor:'lightblue'}}>name</TableCell>
            <TableCell style={{backgroundColor:'lightblue'}}>email</TableCell>
            
          </TableRow>
        </TableHead>
        <TableBody>
        {employee.map((item, index) => (
        <TableRow style={{ backgroundColor: index % 2 === 0 ? '#f0f0f0' : 'inherit' }}  
        key={index}>
          <TableCell>{item.id}</TableCell>
          <TableCell>{item.name}</TableCell>
          <TableCell>{item.email}</TableCell>
        </TableRow>
      ))}
         
        </TableBody>
      </Table>
    </TableContainer>
    </div>
  )
}

export default Home