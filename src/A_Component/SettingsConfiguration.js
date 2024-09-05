import React, { useState } from 'react';
import {
    Box, Tabs, Tab, Typography, Grid, Paper, Switch, TextField, Button, FormControl,
    InputLabel, Select, MenuItem, Checkbox, FormControlLabel, Snackbar, Alert
} from '@mui/material';
import { AccountCircle, Settings, Payment } from '@mui/icons-material';

function TabPanel(props) {
    const { children, value, index, ...other } = props;

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`simple-tabpanel-${index}`}
            aria-labelledby={`simple-tab-${index}`}
            {...other}
        >
            {value === index && (
                <Box sx={{ p: 3 }}>
                    <Typography>{children}</Typography>
                </Box>
            )}
        </div>
    );
}

export default function SettingsConfiguration() {
    const [value, setValue] = useState(0);
    const [notification, setNotification] = useState(false);
    const [notificationMessage, setNotificationMessage] = useState('');

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    const handleSave = (section) => {
        // Simulate backend call
        setTimeout(() => {
            setNotificationMessage(`${section} settings have been saved successfully.`);
            setNotification(true);
        }, 500);
    };

    const handleCloseNotification = () => {
        setNotification(false);
    };

    return (
        <Box sx={{ width: '100%', paddingTop: 2 }}>
            <Tabs value={value} onChange={handleChange} aria-label="settings tabs">
                <Tab icon={<AccountCircle />} label="User Roles & Permissions" />
                <Tab icon={<Settings />} label="Customizable Fields" />
                <Tab icon={<Payment />} label="System Settings" />
            </Tabs>
            <Box sx={{ height: '400px' }}>
                <TabPanel value={value} index={0}>
                    <Typography variant="h6">User Roles & Permissions</Typography>
                    <Grid container spacing={2}>
                        <Grid item xs={12} md={6}>
                            <Paper sx={{ padding: 2 }}>
                                <FormControl fullWidth>
                                    <InputLabel>User Role</InputLabel>
                                    <Select defaultValue="">
                                        <MenuItem value="admin">Admin</MenuItem>
                                        <MenuItem value="manager">Manager</MenuItem>
                                        <MenuItem value="tenant">Tenant</MenuItem>
                                    </Select>
                                </FormControl>
                                <TextField
                                    fullWidth
                                    label="Username"
                                    variant="outlined"
                                    margin="normal"
                                />
                                <TextField
                                    fullWidth
                                    label="Password"
                                    variant="outlined"
                                    margin="normal"
                                    type="password"
                                />
                                <FormControlLabel
                                    control={<Checkbox defaultChecked />}
                                    label="Can View Profiles"
                                />
                                <FormControlLabel
                                    control={<Checkbox />}
                                    label="Can Edit Profiles"
                                />
                                <FormControlLabel
                                    control={<Checkbox />}
                                    label="Can Manage Payments"
                                />
                                <Button
                                    variant="contained"
                                    color="primary"
                                    onClick={() => handleSave('User Roles & Permissions')}
                                >
                                    Save Settings
                                </Button>
                            </Paper>
                        </Grid>
                    </Grid>
                </TabPanel>
                <TabPanel value={value} index={1}>
                    <Typography variant="h6">Customizable Fields</Typography>
                    <Grid container spacing={2}>
                        <Grid item xs={12} md={6}>
                            <Paper sx={{ padding: 2 }}>
                                <TextField
                                    fullWidth
                                    label="Field Name"
                                    variant="outlined"
                                    margin="normal"
                                />
                                <TextField
                                    fullWidth
                                    label="Field Type"
                                    variant="outlined"
                                    margin="normal"
                                />
                                <FormControlLabel
                                    control={<Switch defaultChecked />}
                                    label="Required"
                                />
                                <Button
                                    variant="contained"
                                    color="primary"
                                    onClick={() => handleSave('Customizable Fields')}
                                >
                                    Add Field
                                </Button>
                            </Paper>
                        </Grid>
                    </Grid>
                </TabPanel>
                <TabPanel value={value} index={2}>
                    <Typography variant="h6">System Settings</Typography>
                    <Grid container spacing={2}>
                        <Grid item xs={12} md={6}>
                            <Paper sx={{ padding: 2 }}>
                                <FormControl fullWidth>
                                    <InputLabel>Payment Gateway</InputLabel>
                                    <Select defaultValue="">
                                        <MenuItem value="paypal">PayPal</MenuItem>
                                        <MenuItem value="stripe">Stripe</MenuItem>
                                        <MenuItem value="razorpay">Razorpay</MenuItem>
                                    </Select>
                                </FormControl>
                                <FormControlLabel
                                    control={<Switch />}
                                    label="Enable Notifications"
                                />
                                <TextField
                                    fullWidth
                                    label="Notification Email"
                                    variant="outlined"
                                    margin="normal"
                                />
                                <Button
                                    variant="contained"
                                    color="primary"
                                    onClick={() => handleSave('System Settings')}
                                >
                                    Save Settings
                                </Button>
                            </Paper>
                        </Grid>
                    </Grid>
                </TabPanel>
            </Box>
            <Snackbar
                open={notification}
                autoHideDuration={3000}
                onClose={handleCloseNotification}
            >
                <Alert onClose={handleCloseNotification} severity="success" sx={{ width: '100%' }}>
                    {notificationMessage}
                </Alert>
            </Snackbar>
        </Box>
    );
}
