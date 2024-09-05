import React from 'react';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from '@mui/material';

const data = [
  { id: 1, name: 'John Doe', age: 28 },
  { id: 2, name: 'Jane Smith', age: 34 },
];

function TableExample() {
  return (
    <TableContainer component={Paper}>  
      <Table align='right' padding='none' sx={{minHeight:100 , minWidth: 800 }}>
        <TableHead>
          <TableRow>
            <TableCell width={2}  padding='normal' sx={{minHeight:2 , minWidth: 8    }}>ID</TableCell>
            <TableCell padding='normal' sx={{minHeight:2 , minWidth: 8    }}>Name</TableCell>
            <TableCell width={800}>Age</TableCell>
          </TableRow>
        </TableHead>
        <TableBody  width={2}  sx={{minHeight:2 , minWidth: 8    }} >
          {data.map((row) => (
            <TableRow key={row.id}>
              <TableCell width={2}  padding='normal' sx={{minHeight:2 , minWidth: 8    }}>{row.id}</TableCell>
              <TableCell padding='normal' sx={{minHeight:2 , minWidth: 8    }}>{row.name}</TableCell>
              <TableCell padding='normal' sx={{minHeight:2 , minWidth: 8    }}>{row.age}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

export default TableExample;
