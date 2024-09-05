import React from 'react';
import { AppBar, Toolbar, Typography } from '@mui/material';
import { Stack, Button } from '@mui/material';

function AppBarExample() {
  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6">My App</Typography>
      </Toolbar>
      <Stack spacing={2} direction="row">
      <Button variant="contained">Button 1</Button>
      <Button variant="outlined" color='white'>Button 2</Button>
      <Button variant="text" color='white'>Button 2</Button>
    </Stack>
    
    </AppBar>
  );
}

export default AppBarExample;
