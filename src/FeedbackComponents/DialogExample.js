import React, { useState } from 'react';
import { Dialog, DialogActions, DialogContent, DialogTitle, Button } from '@mui/material';
import { TextField } from '@mui/material';

function DialogExample() {
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const [value, setValue] = useState('');

  return (
    <div>
      <Button variant="outlined" onClick={handleClickOpen}>
        Open Dialog
      </Button>
      <Dialog fullWidth="true" open={open} onClose={handleClose}>
      <TextField
          color='info'
          label="UserName"
          value={value}
          onChange={(e) => setValue(e.target.value)}
          variant="outlined"
          size='large'
           />
        <DialogTitle>Dialog Title</DialogTitle>
        <DialogContent>This is the dialog content.</DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Close
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}

export default DialogExample;
