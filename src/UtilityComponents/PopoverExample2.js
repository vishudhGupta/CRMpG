import React, { useState } from 'react';
import { Tooltip, Popover, Button, Typography } from '@mui/material';

function PopoverExample2() {
  const [anchorEl, setAnchorEl] = useState(null);

  const handleClick = (event) => setAnchorEl(event.currentTarget);
  const handleClose = () => setAnchorEl(null);

  const open = Boolean(anchorEl);

  return (
    <div>
      <Tooltip title="Click to open popover">
        <Button onClick={handleClick}>Open Popover</Button>
      </Tooltip>
      <Popover
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'left',
        }}
      >
        <Typography sx={{ padding: 2 }}>This is popover content.</Typography>
      </Popover>
    </div>
  );
}

export default PopoverExample2;
