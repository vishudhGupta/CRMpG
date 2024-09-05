import React from 'react';
import { Grid, Paper } from '@mui/material';

function GridExample() {
  return (
    <Grid container spacing={3}>
      <Grid item xs={10}>
        <Paper>Left Column</Paper>
      </Grid>
      <Grid item xs={6}>
        <Paper>Right Column</Paper>
      </Grid>
    </Grid>
  );
}

export default GridExample;
