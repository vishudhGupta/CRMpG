import React, { useState } from 'react';
import { TextField } from '@mui/material';
import { DatePicker } from '@mui/x-date-pickers';

function DatePickerExample() {
  const [value, setValue] = useState(null);

  return (
    <DatePicker
      label="Select Date"
      value={value}
      onChange={(newValue) => setValue(newValue)}
      renderInput={(params) => <TextField {...params} />}
    />
  );
}

export default DatePickerExample;
