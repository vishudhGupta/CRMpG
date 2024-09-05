import React, { useState } from 'react';
import {
    Container,
    Grid,
    Card,
    CardContent,
    Typography,
    TextField,
    Button,
    List,
    ListItem,
    ListItemText,
    ListItemSecondaryAction,
    IconButton,
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableRow,
    MenuItem,
    Select,
    FormControl,
    InputLabel
} from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import AddIcon from '@mui/icons-material/Add';
import EditIcon from '@mui/icons-material/Edit';

const StaffMaintenance = () => {
    const [maintenanceRequests, setMaintenanceRequests] = useState([]);
    const [newRequest, setNewRequest] = useState('');

    const [serviceProviders, setServiceProviders] = useState([]);
    const [newServiceProvider, setNewServiceProvider] = useState('');

    const [staff, setStaff] = useState([]);
    const [newStaffMember, setNewStaffMember] = useState('');

    const [shifts, setShifts] = useState([]);
    const [newShift, setNewShift] = useState('');

    const [taskAssignments, setTaskAssignments] = useState([]);
    const [newTaskAssignment, setNewTaskAssignment] = useState('');

    const [payroll, setPayroll] = useState([]);
    const [newPayroll, setNewPayroll] = useState({ staff: '', salary: 0, status: 'Pending' });

    const handleAddMaintenanceRequest = () => {
        setMaintenanceRequests([...maintenanceRequests, newRequest]);
        setNewRequest('');
    };

    const handleDeleteMaintenanceRequest = (index) => {
        const updatedRequests = [...maintenanceRequests];
        updatedRequests.splice(index, 1);
        setMaintenanceRequests(updatedRequests);
    };

    const handleAddServiceProvider = () => {
        setServiceProviders([...serviceProviders, newServiceProvider]);
        setNewServiceProvider('');
    };

    const handleDeleteServiceProvider = (index) => {
        const updatedProviders = [...serviceProviders];
        updatedProviders.splice(index, 1);
        setServiceProviders(updatedProviders);
    };

    const handleAddStaffMember = () => {
        setStaff([...staff, newStaffMember]);
        setNewStaffMember('');
    };

    const handleDeleteStaffMember = (index) => {
        const updatedStaff = [...staff];
        updatedStaff.splice(index, 1);
        setStaff(updatedStaff);
    };

    const handleAddShift = () => {
        setShifts([...shifts, newShift]);
        setNewShift('');
    };

    const handleDeleteShift = (index) => {
        const updatedShifts = [...shifts];
        updatedShifts.splice(index, 1);
        setShifts(updatedShifts);
    };

    const handleAddTaskAssignment = () => {
        setTaskAssignments([...taskAssignments, newTaskAssignment]);
        setNewTaskAssignment('');
    };

    const handleDeleteTaskAssignment = (index) => {
        const updatedAssignments = [...taskAssignments];
        updatedAssignments.splice(index, 1);
        setTaskAssignments(updatedAssignments);
    };

    const handleAddPayroll = () => {
        setPayroll([...payroll, newPayroll]);
        setNewPayroll({ staff: '', salary: 0, status: 'Pending' });
    };

    const handleDeletePayroll = (index) => {
        const updatedPayroll = [...payroll];
        updatedPayroll.splice(index, 1);
        setPayroll(updatedPayroll);
    };

    return (
        <Container>
            <Typography variant="h4" gutterBottom>
                Staff & Maintenance Management
            </Typography>

            <Grid container spacing={3}>
                {/* Maintenance Requests */}
                <Grid item xs={12} md={6}>
                    <Card>
                        <CardContent>
                            <Typography variant="h6">Maintenance Requests</Typography>
                            <TextField
                                label="New Maintenance Request"
                                fullWidth
                                value={newRequest}
                                onChange={(e) => setNewRequest(e.target.value)}
                            />
                            <Button startIcon={<AddIcon />} onClick={handleAddMaintenanceRequest} variant="contained" color="primary" fullWidth>
                                Add Request
                            </Button>
                            <List>
                                {maintenanceRequests.map((request, index) => (
                                    <ListItem key={index}>
                                        <ListItemText primary={request} />
                                        <ListItemSecondaryAction>
                                            <IconButton edge="end" aria-label="delete" onClick={() => handleDeleteMaintenanceRequest(index)}>
                                                <DeleteIcon />
                                            </IconButton>
                                        </ListItemSecondaryAction>
                                    </ListItem>
                                ))}
                            </List>
                        </CardContent>
                    </Card>
                </Grid>

                {/* Service Providers */}
                <Grid item xs={12} md={6}>
                    <Card>
                        <CardContent>
                            <Typography variant="h6">Service Providers</Typography>
                            <TextField
                                label="New Service Provider"
                                fullWidth
                                value={newServiceProvider}
                                onChange={(e) => setNewServiceProvider(e.target.value)}
                            />
                            <Button startIcon={<AddIcon />} onClick={handleAddServiceProvider} variant="contained" color="primary" fullWidth>
                                Add Service Provider
                            </Button>
                            <List>
                                {serviceProviders.map((provider, index) => (
                                    <ListItem key={index}>
                                        <ListItemText primary={provider} />
                                        <ListItemSecondaryAction>
                                            <IconButton edge="end" aria-label="delete" onClick={() => handleDeleteServiceProvider(index)}>
                                                <DeleteIcon />
                                            </IconButton>
                                        </ListItemSecondaryAction>
                                    </ListItem>
                                ))}
                            </List>
                        </CardContent>
                    </Card>
                </Grid>

                {/* Staff Management */}
                <Grid item xs={12} md={6}>
                    <Card>
                        <CardContent>
                            <Typography variant="h6">Staff Profiles</Typography>
                            <TextField
                                label="New Staff Member"
                                fullWidth
                                value={newStaffMember}
                                onChange={(e) => setNewStaffMember(e.target.value)}
                            />
                            <Button startIcon={<AddIcon />} onClick={handleAddStaffMember} variant="contained" color="primary" fullWidth>
                                Add Staff Member
                            </Button>
                            <List>
                                {staff.map((member, index) => (
                                    <ListItem key={index}>
                                        <ListItemText primary={member} />
                                        <ListItemSecondaryAction>
                                            <IconButton edge="end" aria-label="delete" onClick={() => handleDeleteStaffMember(index)}>
                                                <DeleteIcon />
                                            </IconButton>
                                        </ListItemSecondaryAction>
                                    </ListItem>
                                ))}
                            </List>
                        </CardContent>
                    </Card>
                </Grid>

                {/* Shift Management */}
                <Grid item xs={12} md={6}>
                    <Card>
                        <CardContent>
                            <Typography variant="h6">Shift Management</Typography>
                            <TextField
                                label="New Shift"
                                fullWidth
                                value={newShift}
                                onChange={(e) => setNewShift(e.target.value)}
                            />
                            <Button startIcon={<AddIcon />} onClick={handleAddShift} variant="contained" color="primary" fullWidth>
                                Add Shift
                            </Button>
                            <List>
                                {shifts.map((shift, index) => (
                                    <ListItem key={index}>
                                        <ListItemText primary={shift} />
                                        <ListItemSecondaryAction>
                                            <IconButton edge="end" aria-label="delete" onClick={() => handleDeleteShift(index)}>
                                                <DeleteIcon />
                                            </IconButton>
                                        </ListItemSecondaryAction>
                                    </ListItem>
                                ))}
                            </List>
                        </CardContent>
                    </Card>
                </Grid>

                {/* Task Assignment */}
                <Grid item xs={12} md={6}>
                    <Card>
                        <CardContent>
                            <Typography variant="h6">Task Assignment</Typography>
                            <TextField
                                label="New Task Assignment"
                                fullWidth
                                value={newTaskAssignment}
                                onChange={(e) => setNewTaskAssignment(e.target.value)}
                            />
                            <Button startIcon={<AddIcon />} onClick={handleAddTaskAssignment} variant="contained" color="primary" fullWidth>
                                Add Task
                            </Button>
                            <List>
                                {taskAssignments.map((assignment, index) => (
                                    <ListItem key={index}>
                                        <ListItemText primary={assignment} />
                                        <ListItemSecondaryAction>
                                            <IconButton edge="end" aria-label="delete" onClick={() => handleDeleteTaskAssignment(index)}>
                                                <DeleteIcon />
                                            </IconButton>
                                        </ListItemSecondaryAction>
                                    </ListItem>
                                ))}
                            </List>
                        </CardContent>
                    </Card>
                </Grid>

                {/* Payroll Management */}
                <Grid item xs={12} md={6}>
                    <Card>
                        <CardContent>
                            <Typography variant="h6">Payroll Management</Typography>
                            <FormControl fullWidth>
                                <InputLabel id="staff-select-label">Staff Member</InputLabel>
                                <Select
                                    labelId="staff-select-label"
                                    value={newPayroll.staff}
                                    onChange={(e) => setNewPayroll({ ...newPayroll, staff: e.target.value })}
                                >
                                    {staff.map((member, index) => (
                                        <MenuItem key={index} value={member}>
                                            {member}
                                        </MenuItem>
                                    ))}
                                </Select>
                            </FormControl>
                            <TextField
                                label="Salary"
                                type="number"
                                fullWidth
                                value={newPayroll.salary}
                                onChange={(e) => setNewPayroll({ ...newPayroll, salary: e.target.value })}
                            />
                            <FormControl fullWidth>
                                <InputLabel id="status-select-label">Payment Status</InputLabel>
                                <Select
                                    labelId="status-select-label"
                                    value={newPayroll.status}
                                    onChange={(e) => setNewPayroll({ ...newPayroll, status: e.target.value })}
                                >
                                    <MenuItem value="Pending">Pending</MenuItem>
                                    <MenuItem value="Paid">Paid</MenuItem>
                                </Select>
                            </FormControl>
                            <Button startIcon={<AddIcon />} onClick={handleAddPayroll} variant="contained" color="primary" fullWidth>
                                Add Payroll Entry
                            </Button>
                            <Table>
                                <TableHead>
                                    <TableRow>
                                        <TableCell>Staff Member</TableCell>
                                        <TableCell>Salary</TableCell>
                                        <TableCell>Status</TableCell>
                                        <TableCell>Actions</TableCell>
                                    </TableRow>
                                </TableHead>
                                <TableBody>
                                    {payroll.map((entry, index) => (
                                        <TableRow key={index}>
                                            <TableCell>{entry.staff}</TableCell>
                                            <TableCell>{entry.salary}</TableCell>
                                            <TableCell>{entry.status}</TableCell>
                                            <TableCell>
                                                <IconButton aria-label="delete" onClick={() => handleDeletePayroll(index)}>
                                                    <DeleteIcon />
                                                </IconButton>
                                            </TableCell>
                                        </TableRow>
                                    ))}
                                </TableBody>
                            </Table>
                        </CardContent>
                    </Card>
                </Grid>
            </Grid>
        </Container>
    );
};

export default StaffMaintenance;
