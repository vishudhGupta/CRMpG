import React from 'react';
import { Breadcrumbs, Link, Typography } from '@mui/material';

function BreadcrumbsExample() {
  return (
    <>
  
    <Breadcrumbs aria-label="breadcrumb">
      <Link href="/">Home</Link>
      <Link href="/about">About</Link>
      <br></br>
      <Typography color="textPrimary">Contact</Typography>
      <br></br>
    </Breadcrumbs>

    <Breadcrumbs separator=">">
    <Link href="/">Home</Link>
    <Link href="/about">About</Link>
    <br></br>
    <Typography color="textPrimary">Contact</Typography>
    <br></br>
    </Breadcrumbs>

    <Breadcrumbs maxItems={3} itemsAfterCollapse={2}>
    <Link href="/">Home</Link>
    <Link href="/about">About</Link>
    <br></br>
    <Typography color="textPrimary">Contact</Typography>
    <br></br>
    </Breadcrumbs>

    <Breadcrumbs sx={{ color: 'primary.main', fontSize: '1.2rem' }}>
    <Link href="/">Home</Link>
    <Link href="/about">About</Link>
    <br></br>
    <Typography color="textPrimary">Contact</Typography>
    <br></br>
    </Breadcrumbs>

    <Breadcrumbs maxItems={2} expandText="Expand navigation">
    <Link href="/">Home</Link>
    <Link href="/about">About</Link>
    <br></br>
    <Typography color="textPrimary">Contact</Typography>
    <br></br>
    </Breadcrumbs>


    <Breadcrumbs 
  aria-label="breadcrumb" 
  separator=">" 
  maxItems={3} 
  itemsBeforeCollapse={1} 
  itemsAfterCollapse={1}
  sx={{ color: 'secondary.main', fontWeight: 'bold' }}
>
  <Link href="/">Home</Link>
  <Link href="/about">About</Link>
  <Link href="/services">Services</Link>
  <Link href="/contact">Contact</Link>
  <Typography color="textPrimary">Support</Typography>
</Breadcrumbs>

</>

  );
}

export default BreadcrumbsExample;
