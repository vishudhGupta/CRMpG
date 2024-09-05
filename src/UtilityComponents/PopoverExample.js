import React, { useState } from 'react';
import { Button, Popover, Typography } from '@mui/material';

function PopoverExample() {
  const [anchorEl, setAnchorEl] = useState(null);

  const handleClick = (event) => setAnchorEl(event.currentTarget);
  const handleClose = () => setAnchorEl(null);

  const open = Boolean(anchorEl);

  return (
    <div>
      <Button onClick={handleClick}>Open Popover</Button>
      <Popover
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
      >
        <Typography sx={{ padding: 2 }}>This is a popover content.</Typography>
      </Popover>
    </div>
  );
}

export default PopoverExample;
