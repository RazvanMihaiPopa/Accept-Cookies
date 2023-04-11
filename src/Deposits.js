import * as React from 'react';
import Link from '@mui/material/Link';
import Typography from '@mui/material/Typography';
import Title from './Title';

function preventDefault(event) {
  event.preventDefault();
}

export default function Deposits() {
  return (
    <React.Fragment>
      <Title>Budget This Month</Title>
      <Typography component="p" variant="h4">
        500Ron
      </Typography>
      <Typography color="text.secondary" sx={{ flex: 1 }}>
        until 30 Apr 2023
      </Typography>
      <div>
        <Link color="primary" href="#" onClick={preventDefault}>
          View recommendations
        </Link>
      </div>
    </React.Fragment>
  );
}
