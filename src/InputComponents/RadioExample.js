import React, { useState } from 'react';
import { Radio, RadioGroup, FormControlLabel, FormLabel } from '@mui/material';

function RadioExample() {
  const [value, setValue] = useState('option1');

  return (
    <div>
      <FormLabel component="legend">Choose an option</FormLabel>
      <RadioGroup value={value} onChange={(e) => setValue(e.target.value)}>
        <FormControlLabel value="option1" control={<Radio />} label="Option 1" />
        <FormControlLabel value="option2" control={<Radio />} label="Option 2" />
      </RadioGroup>
    </div>
  );
}

export default RadioExample;
