import React, { useState } from 'react';
import { Button, Dialog, DialogActions, DialogContent, DialogTitle, TextField, Grid, IconButton, useTheme } from '@mui/material';
import { DataGrid } from '@mui/x-data-grid';
import { CSVLink } from 'react-csv';
import SmsIcon from '@mui/icons-material/Sms';
import EmailIcon from '@mui/icons-material/Email';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';

const generateRows = () => {
    const rows = [];
    for (let i = 1; i <= 30; i++) {
        rows.push({
            id: i,
            name: `Tenant ${i}`,
            email: `tenant${i}@example.com`,
            phone: `123-456-789${i % 10}`,
            company: `Company ${i % 10}`,
            alternativeContact: `987-654-321${i % 10}`,
            renewalDate: `202${i % 10}-01-01`,
            building: `Building ${i % 5}`,
            userNotes: `Notes for Tenant ${i}`
        });
    }
    return rows;
};

const initialRows = generateRows();

export default function CRM() {
    const theme = useTheme();
    const [rows, setRows] = useState(initialRows);
    const [openDialog, setOpenDialog] = useState(false);
    const [dialogType, setDialogType] = useState('');
    const [selectedTenant, setSelectedTenant] = useState({});
    const [newTenant, setNewTenant] = useState({});

    const handleOpenDialog = (type, tenant = {}) => {
        setDialogType(type);
        if (type === 'add') {
            setNewTenant({});
        } else {
            setSelectedTenant(tenant);
        }
        setOpenDialog(true);
    };

    const handleCloseDialog = () => {
        setOpenDialog(false);
    };

    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setNewTenant(prev => ({ ...prev, [name]: value }));
    };

    const handleAddTenant = () => {
        setRows(prevRows => [...prevRows, { ...newTenant, id: prevRows.length + 1 }]);
        handleCloseDialog();
    };

    const columns = [
        { field: 'name', headerAlign: 'center', align: 'center',headerName: 'Tenant Name', width: 120, editable: true },
        {
            field: 'actions',headerAlign: 'center',
            align: 'center',

            headerName: 'Actions',
            width: 140,
            renderCell: (params) => (
                <>
                    <IconButton onClick={() => handleOpenDialog('sms', params.row)} style={{ color: theme.palette.success.main }}>
                        <SmsIcon />
                    </IconButton>
                    <IconButton onClick={() => handleOpenDialog('whatsapp', params.row)} style={{ color: theme.palette.info.main }}>
                        <WhatsAppIcon />
                    </IconButton>
                    <IconButton onClick={() => handleOpenDialog('email', params.row)} style={{ color: theme.palette.error.main }}>
                        <EmailIcon />
                    </IconButton>
                </>
            ),
            disableClickEventBubbling: true,
        },
        { field: 'email', headerAlign: 'center',align: 'center',headerName: 'Email', width: 180, editable: true },
        { field: 'phone', headerAlign: 'center',align: 'center',headerName: 'Phone Number', width: 120, editable: true },
        { field: 'company', headerAlign: 'center',align: 'center',headerName: 'Company', width: 120, editable: true },
        { field: 'alternativeContact', headerAlign: 'center',align: 'center',headerName: 'Alt Contact', width: 120, editable: true },
        { field: 'renewalDate',headerAlign: 'center',align: 'center', headerName: 'Renewal Date', width: 120, editable: true },
        { field: 'building',headerAlign: 'center',align: 'center', headerName: 'Building Name', width: 120, editable: true },
        { field: 'userNotes', headerAlign: 'center',align: 'center',headerName: 'User Notes', width: 150, editable: true },
    ];

    return (
        <div style={{ height: 800, width: '100%' }}>
            <Button onClick={() => handleOpenDialog('add')} color="primary" variant="contained">Add New Tenant</Button>
            <CSVLink data={rows} headers={columns.map(col => ({ label: col.headerName, key: col.field }))} filename="Tenant_Report.csv">
                <Button color="secondary" variant="contained" style={{ marginLeft: 8 }}>Export to CSV</Button>
            </CSVLink>
            <DataGrid
                rows={rows}
                columns={columns}
                pageSize={5}
                rowsPerPageOptions={[5, 10, 15]}
                checkboxSelection
                disableSelectionOnClick
            />
            <Dialog open={openDialog} onClose={handleCloseDialog} maxWidth="sm" fullWidth>
                <DialogTitle>{dialogType === 'add' ? 'Add New Tenant' : `Compose ${dialogType.charAt(0).toUpperCase() + dialogType.slice(1)}`}</DialogTitle>
                <DialogContent>
                    {dialogType === 'add' ? (
                        <Grid container spacing={2}>
                            {columns.filter(col => col.field !== 'actions').map(column => (
                                <Grid item xs={12} sm={6} key={column.field}>
                                    <TextField
                                        fullWidth
                                        label={column.headerName}
                                        variant="outlined"
                                        name={column.field}
                                        value={newTenant[column.field] || ''}
                                        onChange={handleInputChange}
                                    />
                                </Grid>
                            ))}
                        </Grid>
                    ) : (
                        <TextField
                            autoFocus
                            margin="dense"
                            id="message"
                            label={`${dialogType.charAt(0).toUpperCase() + dialogType.slice(1)} Message`}
                            type="text"
                            fullWidth
                            multiline
                            rows={4}
                            variant="outlined"
                        />
                    )}
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleCloseDialog}>Cancel</Button>
                    <Button onClick={dialogType === 'add' ? handleAddTenant : () => console.log('Sending', dialogType, selectedTenant)}>Send</Button>
                </DialogActions>
            </Dialog>
        </div>
    );
}
