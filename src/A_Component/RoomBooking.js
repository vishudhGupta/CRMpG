import React, { useState } from 'react';
import { Button, Dialog, DialogActions, DialogContent, DialogTitle, TextField, Grid, Typography, IconButton } from '@mui/material';
import { DataGrid } from '@mui/x-data-grid';
import { CSVLink } from 'react-csv';
import DeleteIcon from '@mui/icons-material/Delete';
import { red } from '@mui/material/colors';
import { LocalizationProvider, DatePicker } from '@mui/lab';
import AdapterDateFns from '@date-io/date-fns';
import { PieChart, Pie, Cell, Tooltip, ResponsiveContainer } from 'recharts';

const generateRows = () => {
    const rows = [];
    for (let i = 1; i <= 30; i++) {
        rows.push({
            id: i,
            roomNumber: `Room ${i}`,
            status: i % 5 === 0 ? 'Maintenance' : (i % 3 === 0 ? 'Occupied' : 'Available'),
            tenantName: i % 3 === 0 ? `Tenant ${i}` : 'N/A',
            condition: 'Good',
            conditionDetail: 'No issues detected during last inspection.'
        });
    }
    return rows;
};

const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];

export default function RoomBooking() {
    const [rows, setRows] = useState(generateRows());
    const [selectedDate, setSelectedDate] = useState(new Date());
    const [openDialog, setOpenDialog] = useState(false);
    const [selectedRoom, setSelectedRoom] = useState({});

    const handleOpenDialog = (row) => {
        setSelectedRoom(row || {});
        setOpenDialog(true);
    };

    const handleCloseDialog = () => {
        setOpenDialog(false);
    };

    const handleDelete = (id) => {
        setRows(rows.filter(row => row.id !== id));
    };

    const sanitizedDataForCSV = rows.map(row => ({
        ...row,
        tenantName: row.tenantName || 'N/A', // Ensure no undefined values
        conditionDetail: row.conditionDetail || 'Not specified', // Default value for undefined
    }));

    const columns = [
        { field: 'roomNumber', headerName: 'Room Number', width: 130 },
        { field: 'status', headerName: 'Status', width: 130 },
        { field: 'tenantName', headerName: 'Occupied By', width: 200 },
        { field: 'condition', headerName: 'Condition', width: 200 },
        {
            field: 'actions',
            headerName: 'Actions',
            width: 100,
            renderCell: (params) => (
                <IconButton onClick={() => handleDelete(params.id)} style={{ color: red[500] }}>
                    <DeleteIcon />
                </IconButton>
            ),
            disableClickEventBubbling: true,
        },
    ];

    const roomStatusData = [
        { name: 'Available', value: rows.filter(row => row.status === 'Available').length },
        { name: 'Occupied', value: rows.filter(row => row.status === 'Occupied').length },
        { name: 'Maintenance', value: rows.filter(row => row.status === 'Maintenance').length },
    ];

    return (
        <Grid container spacing={2}>
            <Grid item xs={12}>
                <Typography variant="h4" gutterBottom>Room & Booking Management</Typography>
                <Button variant="contained" onClick={() => handleOpenDialog()}>Manage Room</Button>
                <CSVLink data={sanitizedDataForCSV} headers={columns.map(col => ({ label: col.headerName, key: col.field }))} filename="RoomReport.csv">
                    <Button variant="contained" color="secondary">Export Data</Button>
                </CSVLink>
            </Grid>
            <Grid item xs={12} md={4}>
                <ResponsiveContainer width="100%" height={300}>
                    <PieChart>
                        <Pie
                            data={roomStatusData}
                            cx="50%"
                            cy="50%"
                            labelLine={false}
                            label={({ name, percent }) => `${name}: ${(percent * 100).toFixed(0)}%`}
                            outerRadius={80}
                            fill="#8884d8"
                            dataKey="value"
                        >
                            {roomStatusData.map((entry, index) => (
                                <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                            ))}
                        </Pie>
                        <Tooltip />
                    </PieChart>
                </ResponsiveContainer>
            </Grid>
            <Grid item xs={12} md={8}>
                <DataGrid
                    rows={rows}
                    columns={columns}
                    pageSize={5}
                    rowsPerPageOptions={[5, 10, 15]}
                    checkboxSelection
                    disableSelectionOnClick
                />
            </Grid>
            <Dialog open={openDialog} onClose={handleCloseDialog} maxWidth="sm" fullWidth>
                <DialogTitle>Room Details</DialogTitle>
                <DialogContent>
                    <TextField
                        autoFocus
                        margin="dense"
                        label="Room Number"
                        type="text"
                        fullWidth
                        variant="outlined"
                        value={selectedRoom.roomNumber || ''}
                        disabled
                    />
                    <DatePicker
                        label="Select Date for Booking"
                        value={selectedDate}
                        onChange={(newDate) => setSelectedDate(newDate)}
                        renderInput={(params) => <TextField {...params} />}
                    />
                    <TextField
                        margin="dense"
                        label="Status"
                        type="text"
                        fullWidth
                        variant="outlined"
                        value={selectedRoom.status || ''}
                        onChange={(e) => setSelectedRoom({ ...selectedRoom, status: e.target.value })}
                    />
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleCloseDialog}>Cancel</Button>
                    <Button onClick={handleCloseDialog}>Save Changes</Button>
                </DialogActions>
            </Dialog>
        </Grid>
    );
}
