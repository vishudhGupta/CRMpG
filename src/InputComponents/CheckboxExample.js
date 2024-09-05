import React, { useState } from 'react';
import { Checkbox, FormControlLabel } from '@mui/material';
import { CheckBoxOutlineBlankRounded, CheckBoxOutlineBlankSharp, CheckBoxOutlineBlankTwoTone, CheckBoxRounded } from '@mui/icons-material';

function CheckboxExample() {
  const [checked, setChecked] = useState(false);
  const [checked1, setChecked1] = useState(false);
  return (
    <>
    <br></br>  <br></br>
    <FormControlLabel
          control={<Checkbox checked={checked} onChange={(e) => setChecked(e.target.checked)} />}
          label="Check me" />
          
          
          <FormControlLabel
              control={<Checkbox onMouseOver={(e) => setChecked1(e.target.checked)} color='secondary' checked={checked1} onChange={(e) => setChecked1(e.target.checked)} />}
              label="Check you" />
              
              </>
  );
}

export default CheckboxExample;
