import { Button, Typography } from '@mui/material';
import React, { ReactElement } from 'react';

export const NotFound = (): ReactElement => {
  return (
    <div>
      <Typography variant="h2">404: Oops :( page not found</Typography>
      <Button variant="contained" color="secondary" href="/home">
        Go Home
      </Button>
    </div>
  );
};
