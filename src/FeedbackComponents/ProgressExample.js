import React from 'react';
import { CircularProgress, LinearProgress } from '@mui/material';
import { WysiwygRounded } from '@mui/icons-material';

function ProgressExample() {
  return (
    <div>
      <CircularProgress disableShrink="true" thickness={3} translate='no' size={100} style={{color: 'red'}} />
      <CircularProgress color="success" /> 
      <CircularProgress color="inherit" />
      <CircularProgress variant="determinate" value={50} />
      <CircularProgress variant="determinate" value={100} />
      <CircularProgress variant="indeterminate" />

    
      <LinearProgress disableShrink="true" translate='no' color="inherit" value={50}  size={5} />
      <br></br>
      <LinearProgress translate='yes' color="inherit" value={50}  size={5} />
      
      <WysiwygRounded></WysiwygRounded>
    </div>
  );
}

export default ProgressExample;
