import * as React from 'react';
import Link from '@mui/material/Link';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Title from './Title';

// Generate Order Data
function createData(id, date, name, shipTo, paymentMethod, amount) {
  return { id, date, name, shipTo, paymentMethod, amount };
}

const rows = [
  createData(
    0,
    '30 Apr, 2023',
    'Student Dorms',
    'UPB',
    'VISA ⠀•••• 5690',
    290.00,
  ),
  createData(
    1,
    '16 May, 2023',
    'Parking Subscription',
    'UPB',
    'VISA ⠀•••• 5690',
    150.99,
  ),
  createData(
    2, 
    '16 May, 2023', 'Campus Food Subscription', 'UPB', 'VISA ⠀•••• 2068', 299.81),
  createData(
    3,
    '20 Jun, 2023',
    'Make-up Exams',
    'UPB',
    'VISA ⠀•••• 5690',
    200,
  ),
  createData(
    4,
    '1 Sep, 2023',
    'Tuition Fees',
    'UPB',
    'VISA ⠀•••• 5690',
    212.79,
  ),
];

function preventDefault(event) {
  event.preventDefault();
}

export default function Orders() {
  return (
    <React.Fragment>
      <Title>Deadlines</Title>
      <Table size="small">
        <TableHead>
          <TableRow>
            <TableCell>Deadlines</TableCell>
            <TableCell>Transaction</TableCell>
            <TableCell>Payment To</TableCell>
            <TableCell>Payment Method</TableCell>
            <TableCell align="right">Amount</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.id}>
              <TableCell>{row.date}</TableCell>
              <TableCell>{row.name}</TableCell>
              <TableCell>{row.shipTo}</TableCell>
              <TableCell>{row.paymentMethod}</TableCell>
              <TableCell align="right">{`${row.amount}Ron`}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      <Link color="primary" href="#" onClick={preventDefault} sx={{ mt: 3 }}>
        See more orders
      </Link>
    </React.Fragment>
  );
}
