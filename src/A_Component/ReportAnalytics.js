import React, { useState } from 'react';
import { Box, Tabs, Tab, Typography, Paper, Grid } from '@mui/material';
import {
  LineChart,
  Line,
  BarChart,
  Bar,
  PieChart,
  Pie,
  Cell,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  ResponsiveContainer
} from 'recharts';

// Sample Data
const occupancyData = [
  { name: 'Jan', occupancy: 80 },
  { name: 'Feb', occupancy: 85 },
  { name: 'Mar', occupancy: 90 },
];

const financialData = [
  { name: 'Income', amount: 10000 },
  { name: 'Expenses', amount: 7500 },
];

const tenantBehaviorData = [
  { name: 'On-Time', percentage: 95 },
  { name: 'Late', percentage: 5 },
];

const maintenanceData = [
  { name: 'Completed', value: 9 },
  { name: 'Pending', value: 3 },
];

const COLORS = ['#0088FE', '#FFBB28', '#FF8042', '#00C49F'];

// TabPanel component to handle the content display based on active tab
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
          {children}
        </Box>
      )}
    </div>
  );
}

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

// Occupancy Reports Component
function OccupancyReports() {
  return (
    <ResponsiveContainer width="100%" height={300}>
      <LineChart data={occupancyData}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Line type="monotone" dataKey="occupancy" stroke="#8884d8" />
      </LineChart>
    </ResponsiveContainer>
  );
}

// Financial Reports Component
function FinancialReports() {
  return (
    <ResponsiveContainer width="100%" height={300}>
      <BarChart data={financialData}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Bar dataKey="amount" fill="#82ca9d" />
      </BarChart>
    </ResponsiveContainer>
  );
}

// Tenant Behavior Analysis Component
function TenantBehaviorAnalysis() {
  return (
    <ResponsiveContainer width="100%" height={300}>
      <PieChart>
        <Pie
          data={tenantBehaviorData}
          cx="50%"
          cy="50%"
          labelLine={false}
          outerRadius={100}
          fill="#8884d8"
          dataKey="percentage"
        >
          {tenantBehaviorData.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
          ))}
        </Pie>
        <Tooltip />
        <Legend />
      </PieChart>
    </ResponsiveContainer>
  );
}

// Maintenance Reports Component
function MaintenanceReports() {
  return (
    <ResponsiveContainer width="100%" height={300}>
      <PieChart>
        <Pie
          data={maintenanceData}
          cx="50%"
          cy="50%"
          labelLine={false}
          outerRadius={100}
          fill="#82ca9d"
          dataKey="value"
        >
          {maintenanceData.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
          ))}
        </Pie>
        <Tooltip />
        <Legend />
      </PieChart>
    </ResponsiveContainer>
  );
}

// Main ReportAnalytics Component
export default function ReportAnalytics() {
  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ flexGrow: 1, p: 3 }}>
      <Grid container justifyContent="center">
        <Grid item xs={12} md={10}>
          <Paper elevation={3} sx={{ padding: '20px' }}>
            <Typography variant="h4" component="div" gutterBottom>
              Reports and Analytics
            </Typography>
            <Tabs value={value} onChange={handleChange} aria-label="report tabs">
              <Tab label="Occupancy Reports" {...a11yProps(0)} />
              <Tab label="Financial Reports" {...a11yProps(1)} />
              <Tab label="Tenant Behavior Analysis" {...a11yProps(2)} />
              <Tab label="Maintenance Reports" {...a11yProps(3)} />
            </Tabs>
            <TabPanel value={value} index={0}>
              <OccupancyReports />
            </TabPanel>
            <TabPanel value={value} index={1}>
              <FinancialReports />
            </TabPanel>
            <TabPanel value={value} index={2}>
              <TenantBehaviorAnalysis />
            </TabPanel>
            <TabPanel value={value} index={3}>
              <MaintenanceReports />
            </TabPanel>
          </Paper>
        </Grid>
      </Grid>
    </Box>
  );
}
