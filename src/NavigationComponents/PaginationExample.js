import React, { useState } from 'react';
import { Pagination,PaginationItem } from '@mui/material';

function PaginationExample() {
    const [page, setPage] = useState(1);

    return (

        <>
            <Pagination count={10} page={page} onChange={(event, value) => setPage(value)} />
            <br></br>

            <Pagination
                count={10}
                onChange={(event, value) => console.log('New Page:', value)}
            />
 <br></br>
<Pagination count={10} color="primary" />
<br></br>
<Pagination count={10} color="error" />
<br />
<Pagination count={10} size="small" />
<br />
<Pagination count={10} size="large" />

<br></br>
<Pagination count={10} shape="rounded" />

<br></br>
<Pagination count={10} variant="outlined" />

<br></br>
<Pagination count={10} showFirstButton  showLastButton />

<br></br>
<Pagination count={10} boundaryCount={1} />

<br></br>
<Pagination count={10} siblingCount={2} />
<br></br>
<Pagination count={10} hideNextButton />

<br></br>
<Pagination 
  count={10}
  renderItem={(item) => (
    <PaginationItem
      {...item}
      sx={{ color: item.selected ? 'red' : 'inherit' }}
    />
  )}
/>


<br></br>
<Pagination color="primary"  count={10} sx={{backgroundColor: 'lightgray' }} />
<br></br>
        </>
    );
}

export default PaginationExample;
