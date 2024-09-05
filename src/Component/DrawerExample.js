import React, { useState } from 'react';
import { Drawer, Button, List, ListItem, ListItemText } from '@mui/material';

function DrawerExample() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDrawer = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      <Button onClick={toggleDrawer}>Open Drawer</Button>
      <Drawer open={isOpen} onClose={toggleDrawer}>
        <List>
          <ListItem button> 
            <ListItemText primary="Item 1" />        
          </ListItem>
          <ListItem button>
            <ListItemText secondary="Item 2" />        
          </ListItem>
          <ListItem button>
            <ListItemText primary="Item 3" />
          </ListItem>
        </List>
      </Drawer>
    </div>
  );
}

export default DrawerExample;
