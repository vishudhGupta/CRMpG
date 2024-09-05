import React, { useState } from 'react';
import { TextField } from '@mui/material';

function TextFieldExample() {
  const [value, setValue] = useState('');

  return (
   
    <>
     <div style={{ marginTop: '20px' }}></div>
    <TextField
          color='info'
          label="UserName"
          value={value}
          onChange={(e) => setValue(e.target.value)}
          variant="outlined"
          size='large'
           />
          <div style={{ marginTop: '20px' }}></div>
          <TextField
              color='info'
              label="Password"
              value={value}
              onChange={(e) => setValue(e.target.value)}
              variant="outlined"
              fullWidth 
              size='medium'
              />
              
              <div style={{ marginTop: '20px' }}></div>
          <TextField
              color='info'
              label="domain"
              value={value}
              onChange={(e) => setValue(e.target.value)}
              variant="outlined"
            size='small'
              />
    
              </>
    
  );
}

export default TextFieldExample;
