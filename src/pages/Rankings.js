import React, { useState, useEffect } from 'react';
import { Box, Typography, CircularProgress, Table, TableBody, TableCell, TableHead, TableRow } from '@mui/material';
import axios from 'axios';

function Rankings() {
  const [rankings, setRankings] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    //axios.get('https://your-backend-url.vercel.app/api/rankings')
    axios.get('http://localhost:5001/api/rankings')
      .then(response => {
        setRankings(response.data);
        setLoading(false);
      })
      .catch(error => console.error(error));
  }, []);

  if (loading) return <CircularProgress />;

  return (
    <Box>
      <Typography variant="h4" gutterBottom>
        Rankings
      </Typography>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Rank</TableCell>
            <TableCell>Name</TableCell>
            <TableCell>Points</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rankings.map((rank, index) => (
            <TableRow key={index}>
              <TableCell>{rank.rank}</TableCell>
              <TableCell>{rank.name}</TableCell>
              <TableCell>{rank.points}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </Box>
  );
}

export default Rankings;
