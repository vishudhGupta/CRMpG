import React from 'react';
import { Paper, Typography } from '@mui/material';

function PaperExample() {
  return (

    <Paper elevation={1} sx={{ padding: 2 }}>
      <Typography>This is content inside a Paper component.</Typography>
    </Paper>
    
  );
}

export default PaperExample;
