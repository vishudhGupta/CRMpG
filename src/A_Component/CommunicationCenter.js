import React, { useState } from 'react';
import { Box, Button, Typography, Tabs, Tab, TextField, Grid, List, ListItem, ListItemText, Divider, Input, Dialog, DialogTitle, DialogContent, DialogActions, Snackbar } from '@mui/material';
import SendIcon from '@mui/icons-material/Send';
import SmsIcon from '@mui/icons-material/Sms';
import EmailIcon from '@mui/icons-material/Email';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import PersonIcon from '@mui/icons-material/Person';
import MuiAlert from '@mui/material/Alert';

const CommunicationCenter = () => {
  const [selectedTab, setSelectedTab] = useState(0);
  const [message, setMessage] = useState('');
  const [selectedFiles, setSelectedFiles] = useState([]);
  const [tenants, setTenants] = useState([
    { id: 1, name: 'John Doe', email: 'john@example.com', phone: '+1234567890' },
    { id: 2, name: 'Jane Smith', email: 'jane@example.com', phone: '+0987654321' },
    // Add more tenants as needed
  ]);
  const [selectedTenant, setSelectedTenant] = useState(null);
  const [openDialog, setOpenDialog] = useState(false);
  const [openAddTenantDialog, setOpenAddTenantDialog] = useState(false);
  const [newTenant, setNewTenant] = useState({ name: '', email: '', phone: '' });
  const [snackbarOpen, setSnackbarOpen] = useState(false);

  const handleTabChange = (event, newValue) => {
    setSelectedTab(newValue);
  };

  const handleFileChange = (event) => {
    setSelectedFiles(event.target.files);
  };

  const handleSend = () => {
    // Implement the logic to send WhatsApp messages, emails, or SMS with attachments
    console.log(`Sending message: ${message}`);
    console.log('Attached files:', selectedFiles);

    // Show snackbar notification
    setSnackbarOpen(true);
  };

  const handleSnackbarClose = () => {
    setSnackbarOpen(false);
  };

  const handleOpenDialog = (tenant) => {
    setSelectedTenant(tenant);
    setOpenDialog(true);
  };

  const handleCloseDialog = () => {
    setOpenDialog(false);
    setSelectedTenant(null);
  };

  const handleOpenAddTenantDialog = () => {
    setOpenAddTenantDialog(true);
  };

  const handleCloseAddTenantDialog = () => {
    setOpenAddTenantDialog(false);
    setNewTenant({ name: '', email: '', phone: '' });
  };

  const handleAddTenant = () => {
    setTenants([...tenants, { id: tenants.length + 1, ...newTenant }]);
    handleCloseAddTenantDialog();
  };

  return (
    <Box sx={{ marginTop: 0, padding: 4, minHeight: '70vh' }}>
      <Typography variant="h4" gutterBottom>
        Bulk Communication Center
      </Typography>
      <Tabs value={selectedTab} onChange={handleTabChange}>
        <Tab icon={<WhatsAppIcon />} label="WhatsApp System" />
        <Tab icon={<EmailIcon />} label="Email/SMS Integration" />
        <Tab icon={<PersonIcon />} label="Tenant Portal" />
      </Tabs>

      <Box sx={{ marginTop: 4, minHeight: '60vh' }}>
        {selectedTab === 0 && (
          <Box>
            <Typography variant="h6">Send a WhatsApp Message to Tenants</Typography>
            <TextField
              label="WhatsApp Message"
              fullWidth
              multiline
              rows={4}
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              sx={{ marginBottom: 2 }}
            />
            <Input
              type="file"
              inputProps={{ multiple: true }}
              onChange={handleFileChange}
              sx={{ marginBottom: 2 }}
            />
            <Button variant="contained" startIcon={<SendIcon />} onClick={handleSend}>
              Send WhatsApp Message
            </Button>
          </Box>
        )}

        {selectedTab === 1 && (
          <Box>
            <Typography variant="h6">Email/SMS Integration</Typography>
            <Grid container spacing={2}>
              <Grid item xs={6}>
                <TextField
                  label="Email Subject"
                  fullWidth
                  sx={{ marginBottom: 2 }}
                />
                <TextField
                  label="Email Content"
                  fullWidth
                  multiline
                  rows={4}
                  sx={{ marginBottom: 2 }}
                />
                <Input
                  type="file"
                  inputProps={{ multiple: true }}
                  onChange={handleFileChange}
                  sx={{ marginBottom: 2 }}
                />
                <Button variant="contained" startIcon={<EmailIcon />} onClick={handleSend}>
                  Send Email
                </Button>
              </Grid>
              <Grid item xs={6}>
                <TextField
                  label="SMS Content"
                  fullWidth
                  multiline
                  rows={4}
                  sx={{ marginBottom: 2 }}
                />
                <Button variant="contained" startIcon={<SmsIcon />} onClick={handleSend}>
                  Send SMS
                </Button>
              </Grid>
            </Grid>
          </Box>
        )}

        {selectedTab === 2 && (
          <Box>
            <Typography variant="h6">Tenant Portal</Typography>
            <Button variant="contained" onClick={handleOpenAddTenantDialog} sx={{ marginBottom: 2 }}>
              Add Tenant
            </Button>
            <List>
              {tenants.map((tenant) => (
                <React.Fragment key={tenant.id}>
                  <ListItem>
                    <ListItemText
                      primary={tenant.name}
                      secondary={`Email: ${tenant.email}, Phone: ${tenant.phone}`}
                    />
                    <Button variant="outlined" onClick={() => handleOpenDialog(tenant)}>
                      View Options
                    </Button>
                  </ListItem>
                  <Divider />
                </React.Fragment>
              ))}
            </List>
          </Box>
        )}
      </Box>

      {selectedTenant && (
        <Dialog open={openDialog} onClose={handleCloseDialog}>
          <DialogTitle>{selectedTenant.name}</DialogTitle>
          <DialogContent>
            <Typography>Email: {selectedTenant.email}</Typography>
            <Typography>Phone: {selectedTenant.phone}</Typography>
            <Box sx={{ marginTop: 2 }}>
              <Button variant="contained" sx={{ marginRight: 2 }}>View Profile</Button>
              <Button variant="contained" sx={{ marginRight: 2 }}>Make Payment</Button>
              <Button variant="contained">Raise Complaint</Button>
            </Box>
          </DialogContent>
          <DialogActions>
            <Button onClick={handleCloseDialog}>Close</Button>
          </DialogActions>
        </Dialog>
      )}

      <Dialog open={openAddTenantDialog} onClose={handleCloseAddTenantDialog}>
        <DialogTitle>Add New Tenant</DialogTitle>
        <DialogContent>
          <TextField
            label="Name"
            fullWidth
            value={newTenant.name}
            onChange={(e) => setNewTenant({ ...newTenant, name: e.target.value })}
            sx={{ marginBottom: 2 }}
          />
          <TextField
            label="Email"
            fullWidth
            value={newTenant.email}
            onChange={(e) => setNewTenant({ ...newTenant, email: e.target.value })}
            sx={{ marginBottom: 2 }}
          />
          <TextField
            label="Phone"
            fullWidth
            value={newTenant.phone}
            onChange={(e) => setNewTenant({ ...newTenant, phone: e.target.value })}
            sx={{ marginBottom: 2 }}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleCloseAddTenantDialog}>Cancel</Button>
          <Button variant="contained" onClick={handleAddTenant}>Add Tenant</Button>
        </DialogActions>
      </Dialog>

      <Snackbar
        open={snackbarOpen}
        autoHideDuration={3000}
        onClose={handleSnackbarClose}
        anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
      >
        <MuiAlert onClose={handleSnackbarClose} severity="success" sx={{ width: '100%' }}>
          Message sent successfully!
        </MuiAlert>
      </Snackbar>
    </Box>
  );
};

export default CommunicationCenter;
