import React from 'react';
import { Container, Typography } from '@mui/material';

function ContainerExample() {
  return (
    <Container>
      <Typography variant="h4">Centered Content</Typography>
      <Typography variant="button">Centered Content</Typography>
      <Typography variant="inherit">Centered Content</Typography>
      <Typography variant="overline">Centered Content</Typography>
      <Typography variant="subtitle1">Centered Content</Typography>
      <Typography variant="overline">Centered Content</Typography>
      <Typography aria-required variant="h4">Centered Content</Typography>
      <Typography variant="h3">Centered Content</Typography>
    </Container>
    
  );
}

export default ContainerExample;
