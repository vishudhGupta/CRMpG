import React from 'react';
import { Card, CardContent, Typography, CardActions, Button } from '@mui/material';

function CardExample() {
  return (
    <Card>
      <CardContent>  
        <Typography variant="h5">Card Title</Typography>
        <Typography variant="body2">This is the card content.</Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Action</Button>
      </CardActions>
    </Card>
  );
}

export default CardExample;
