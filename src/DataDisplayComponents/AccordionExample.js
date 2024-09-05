import React from 'react';
import { Accordion, AccordionSummary, AccordionDetails, Typography } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

function AccordionExample() {
  return (
    <Accordion>
      <AccordionSummary expandIcon={<ExpandMoreIcon />}>
        <Typography>Accordion Title</Typography>
      </AccordionSummary>
      <AccordionDetails>
        <Typography>This is the content of the accordion.</Typography>
      </AccordionDetails>
    </Accordion>
  );
}

export default AccordionExample;
