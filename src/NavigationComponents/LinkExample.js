import React from 'react';
import { Link, Typography } from '@mui/material';

function LinkExample() {
    return (

        <>
            <Typography>
                Go to the <Link href="https://google.com">Google</Link> website.
            </Typography>

            <Typography>
                <Link href="https://google.com" underline="none">Google</Link>
                <Link href="https://google.com" underline="hover">Google</Link>
                <Link href="https://google.com" underline="always">Google</Link>
            </Typography>

            <br>
            </br>
            <Typography>
                <Link href="https://google.com" color="primary">Google</Link>
                <Link href="https://google.com" color="secondary">Google</Link>
                <Link href="https://google.com" color="error">Google</Link>
            </Typography>


            <Link href="https://google.com" variant="h6">Google</Link>
            <Link href="https://google.com" variant="subtitle1">Google</Link>
            <Link href="https://google.com" variant="caption">Google</Link>

            <Link href="https://google.com" sx={{ textDecoration: 'underline', fontWeight: 'bold' }}>
                fontweight
            </Link>
            <br></br>

            <Link href="https://google.com" target="_blank" rel="noopener noreferrer">
                target blank
            </Link>
            <br></br>
            <br></br>
            <Link href="https://google.com" role="button">
                Google
            </Link>

            <br></br>
            <Link href="https://google.com" onClick={() => console.log('Link clicked')}>
                onClick
            </Link>
            <br></br>
            <Link
                href="https://google.com"
                color="primary"
                underline="hover"
                target="_blank"
                rel="noopener noreferrer"
                sx={{ fontWeight: 'bold', fontSize: '1.2rem' }}
            >
                Google
            </Link>


        </>

    );
}

export default LinkExample;
