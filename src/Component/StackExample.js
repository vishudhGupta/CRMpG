import React from 'react';
import { Stack, Button } from '@mui/material';

function StackExample() {
  return (
    <Stack spacing={2} direction="row">
      <Button variant="contained">Button 1</Button>
      <Button variant="outlined">Button 2</Button>
      <Button variant="text">Button 2</Button>
    </Stack>
  );
}

export default StackExample;
