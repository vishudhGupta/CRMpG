import React from 'react';
import { List, ListItem, ListItemText } from '@mui/material';

const items = ['Item 1', 'Item 2', 'Item 3'];

function ListExample() {
  return (
    <List>
      {items.map((item, index) => (
        <ListItem key={index}>
          <ListItemText primary={item} />
        </ListItem>
      ))}
    </List>
  );
}

export default ListExample;
