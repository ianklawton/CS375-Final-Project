import React, { Component } from "react";
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

function createData(name, quantity, description) {
  return { name, quantity, description};
}

const rows = [
  createData('Sword', 159, 'Attack-50'),
  createData('Armor', 237, 'Defence-30'),
  createData('Shield', 262, 'Defence-16'),
  createData('Gun', 305, 'Attack-80'),
  createData('Knife', 356, 'Attack-10'),
  createData('Knife', 356, 'Attack-10'),
  createData('Knife', 356, 'Attack-10'),
  createData('Knife', 356, 'Attack-10'),
  createData('Knife', 356, 'Attack-10'),
  createData('Knife', 356, 'Attack-10'),
];

 
class Test extends Component {
  
  render() {
    return (
      <div>
        <TableContainer component={Paper}>
      <Table sx={{ maxHeight: 100 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Item</TableCell>
            <TableCell align="right">Quantity</TableCell>
            <TableCell align="right">Description</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.name}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {row.name}
              </TableCell>
              <TableCell align="right">{row.quantity}</TableCell>
              <TableCell align="right">{row.description}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
      </div>
    );
  }
}
 
export default Test;