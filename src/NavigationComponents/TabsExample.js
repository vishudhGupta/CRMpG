import React, { useState } from 'react';
import { Tabs, Tab, Box } from '@mui/material';
import { Stack, Button } from '@mui/material';

function TabsExample() {
  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box>
      <Tabs value={value} onChange={handleChange}>
        <Tab label="Tab 0" />
        <Tab label="Tab 1" />
        <Tab label="Tab 2" />
        <Tab label="Tab 3" />
        <Tab label="Tab 4" />
      </Tabs>
      {value === 0 && <Box m={5} p={3}>Content 1</Box>}
      {value === 1 && <Box display="flex" justifyContent="center" p={3}>
      <Stack spacing={2} direction="row">
      <Button variant="contained">Button 1</Button>
      <Button variant="outlined">Button 2</Button>
      <Button variant="text">Button 2</Button>
        </Stack>
        Content 2</Box>}
        {value === 2 && <Box bgcolor="primary.main" border={1} borderRadius={2} m={5} p={3}>Content 3</Box>}
        {value === 3 && <Box  display="flex" 
  flexDirection="column" 
  justifyContent="center" 
  alignItems="center" 
  bgcolor="background.paper" 
  border={1} 
  borderRadius={4} 
  p={2} 
  boxShadow={2}>Content 3</Box>}
        {value === 4 && <Box sx={{ 
  width: { xs: '100%', sm: '50%' }, 
  padding: { xs: 1, sm: 3 } 
}}>Content 3</Box>}
    </Box>
  );
}

export default TabsExample;
