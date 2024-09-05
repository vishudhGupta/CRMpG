import React from 'react';
import { Grid, Card, CardContent, Typography, List, ListItem, ListItemText, Box } from '@mui/material';
import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip, BarChart, Bar, XAxis, YAxis, CartesianGrid, Legend } from 'recharts';

// Sample data for the Room Inventory Pie Chart
const roomData = [
  { name: 'Occupied', value: 400 },
  { name: 'Available', value: 300 },
  { name: 'Maintenance', value: 100 },
];

// Sample data for the Complaints Bar Chart
const complaintData = [
  { name: 'Jan', Unresolved: 20, Resolved: 40 },
  { name: 'Feb', Unresolved: 10, Resolved: 30 },
  { name: 'Mar', Unresolved: 14, Resolved: 45 },
];

const COLORS = ['#0088FE', '#00C49F', '#FFBB28'];

function Dashboard() {
  return (
    <Box sx={{ flexGrow: 1, padding: 3 }}>
      <Grid container spacing={2}>
        {/* Tenant Management Section */}
        <Grid item xs={12} sm={4}>
          <Card sx={{ height: '100%', minHeight: 400, display: 'flex', flexDirection: 'column' }}>
            <CardContent>
              <Typography style={{ fontWeight: 'bold' }} variant="h5" component="div">Tenant Management</Typography>
              <List dense style={{ fontWeight: 'bold' }}>
                <ListItem>
                  <ListItemText primary="Total Tenants" secondary="250" />
                </ListItem>
                <ListItem style={{ fontWeight: 'bold' }}>
                  <ListItemText  primary="New Bookings" secondary="15 this month" />
                </ListItem>
                <ListItem>
                  <ListItemText primary="Payment Due" secondary="20 tenants" />
                </ListItem>
              </List>
            </CardContent>
          </Card>
        </Grid>

        {/* Room Inventory Section */}
        <Grid item xs={12} sm={4}>
          <Card sx={{ fontWeight: 'bold', height: '100%', minHeight: 400, display: 'flex', flexDirection: 'column' }}>
            <CardContent>
              <Typography variant="h5" component="div" style={{ fontWeight: 'bold' }}>Room Inventory</Typography>
              <ResponsiveContainer style={{ alignContent: 'normal' }} width="100%" height="90%">
                <PieChart>
                  <Pie
                    data={roomData}
                    cx="40%"
                    cy="40%"
                    labelLine={false}
                    label={({ name, percent }) => `${name}: ${(percent * 100).toFixed(0)}%`}
                    outerRadius={65}
                    fill="#8884d8"
                    dataKey="value"
                  >
                    {roomData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                    ))}
                  </Pie>
                  <Tooltip formatter={(value, name) => [`${value} rooms`, `${name}`]} />
                </PieChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>
        </Grid>

        {/* Complaint Management Section */}
        <Grid item xs={12} sm={4}>
          <Card sx={{ height: '100%', minHeight: 400, display: 'flex', flexDirection: 'column' }}>
            <CardContent>
              <Typography variant="h5" component="div" style={{ fontWeight: 'bold' }}>Complaint Management</Typography>
              <ResponsiveContainer width="100%" height="90%">
                <BarChart data={complaintData}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="name" />
                  <YAxis />
                  <Tooltip />
                  <Legend />
                  <Bar dataKey="Resolved" fill="#8884d8" />
                  <Bar dataKey="Unresolved" fill="#82ca9d" />
                </BarChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Box>
  );
}

export default Dashboard;
