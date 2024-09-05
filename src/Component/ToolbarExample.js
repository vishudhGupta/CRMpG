import React from 'react';
import { Toolbar, Button } from '@mui/material';

function ToolbarExample() {
  return (
    <Toolbar>
      <Button color='secondary' variant="contained">Button 1</Button>
      <Button color='primary' variant="contained">Button 2</Button>
      <Button color='success' variant="contained">Button 3</Button>
      <Button color='warning' variant="contained">Button 4</Button>
      <Button color='error' variant="contained">Button 5</Button>
      <Button color='info' variant="contained">Button 6</Button>
    </Toolbar>
  );
}

export default ToolbarExample;
