import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import InputBase from '@mui/material/InputBase';
import { alpha, styled, useTheme } from '@mui/material/styles';
import SearchIcon from '@mui/icons-material/Search';
import MenuIcon from '@mui/icons-material/Menu';
import NotificationsIcon from '@mui/icons-material/Notifications';
import SettingsIcon from '@mui/icons-material/Settings';
import HelpOutlineIcon from '@mui/icons-material/HelpOutline';
import PhoneIcon from '@mui/icons-material/Phone';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import AddIcon from '@mui/icons-material/Add';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import DashboardIcon from '@mui/icons-material/Dashboard';
import WorkIcon from '@mui/icons-material/Work';
import PaymentIcon from '@mui/icons-material/Payment';
import ErrorIcon from '@mui/icons-material/Error';
import PeopleIcon from '@mui/icons-material/People';
import GavelIcon from '@mui/icons-material/Gavel';
import AnalyticsIcon from '@mui/icons-material/Analytics';
import MessageIcon from '@mui/icons-material/Message';
import SettingsApplicationsIcon from '@mui/icons-material/SettingsApplications';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import CssBaseline from '@mui/material/CssBaseline';
import Container from '@mui/material/Container';
import Dashboard from './Dashboard';
import CRM from './CRM';
import RoomBooking from './RoomBooking';
import PaymentInvoicing from './PaymentInvoicing';
import ComplaintManagement from './ComplaintManagement';
import StaffMaintenance from './StaffMaintenance';
import LegalCompliance from './LegalCompliance';
import ReportAnalytics from './ReportAnalytics';
import CommunicationCenter from './CommunicationCenter';
import SettingsConfiguration from './SettingsConfiguration';

const Search = styled('div')(({ theme }) => ({
  position: 'relative',
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  '&:hover': {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginLeft: 0,
  width: '100%',
  [theme.breakpoints.up('sm')]: {
    marginLeft: theme.spacing(1),
    width: 'auto',
  },
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: '100%',
  position: 'absolute',
  pointerEvents: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: 'inherit',
  '& .MuiInputBase-input': {
    padding: theme.spacing(1, 1, 1, 0),
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('md')]: {
      width: '20ch',
    },
  },
}));

export default function TopBar() {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const theme = useTheme();

  return (
    <Router>
      <div style={{ display: 'flex', flexDirection: 'column', height: '100vh' }}>
        <CssBaseline />
        <AppBar position="static">
          <Toolbar>
            <IconButton
              edge="start"
              color="inherit"
              aria-label="open drawer"
              onClick={() => setDrawerOpen(!drawerOpen)}
            >
              <MenuIcon />
            </IconButton>
            <div style={{ flexGrow: 1, display: 'flex', justifyContent: 'center' }}>
              <Typography variant="h6" component="div">
                CRM Affinity
              </Typography>
            </div>
            <IconButton color="inherit"><AddIcon /></IconButton>
            <IconButton color="inherit"><PhoneIcon /></IconButton>
            <IconButton color="inherit"><HelpOutlineIcon /></IconButton>
            <IconButton color="inherit"><SettingsIcon /></IconButton>
            <IconButton color="inherit"><NotificationsIcon /></IconButton>
            <IconButton edge="end" color="inherit"><AccountCircleIcon /></IconButton>
          </Toolbar>
        </AppBar>
        <Box sx={{ flexGrow: 1, backgroundColor: '#f4f6f8', position: 'relative' }}>
          <Drawer
            anchor="left"
            open={drawerOpen}
            onClose={() => setDrawerOpen(false)}
            sx={{ '& .MuiDrawer-paper': { position: 'absolute', width: 250, backgroundColor: theme.palette.primary.main, color: 'white' } }}
          >
            <List>
              {[
                { icon: <DashboardIcon />, text: "Dashboard", link: "/dashboard" },
                { icon: <WorkIcon />, text: "CRM", link: "/crm" },
                { icon: <PeopleIcon />, text: "Room & Booking Management", link: "/room-booking" },
                { icon: <PaymentIcon />, text: "Payment & Invoicing", link: "/payment-invoicing" },
                { icon: <ErrorIcon />, text: "Complaint Management", link: "/complaint-management" },
                { icon: <PeopleIcon />, text: "Staff & Maintenance Management", link: "/staff-maintenance" },
                { icon: <GavelIcon />, text: "Legal & Compliance", link: "/legal-compliance" },
                { icon: <AnalyticsIcon />, text: "Report & Analytics", link: "/report-analytics" },
                { icon: <MessageIcon />, text: "Communication Center", link: "/communication-center" },
                { icon: <SettingsApplicationsIcon />, text: "Settings & Configuration", link: "/settings-configuration" }
              ].map((item, index) => (
                <ListItem button key={index} component={Link} to={item.link}>
                  <ListItemIcon style={{ color: 'white' }}>{item.icon}</ListItemIcon>
                  <ListItemText primary={item.text} primaryTypographyProps={{ fontSize: '0.875rem', style: { color: 'white' } }} />
                </ListItem>
              ))}
            </List>
          </Drawer>
        </Box>
        <Routes>
          {[
            { path: "/dashboard", component: <Dashboard /> },
            { path: "/crm", component: <CRM /> },
            { path: "/room-booking", component: <RoomBooking /> },
            { path: "/payment-invoicing", component: <PaymentInvoicing /> },
            { path: "/complaint-management", component: <ComplaintManagement /> },
            { path: "/staff-maintenance", component: <StaffMaintenance /> },
            { path: "/legal-compliance", component: <LegalCompliance /> },
            { path: "/report-analytics", component: <ReportAnalytics /> },
            { path: "/communication-center", component: <CommunicationCenter /> },
            { path: "/settings-configuration", component: <SettingsConfiguration /> }
          ].map((route, index) => (
            <Route key={index} path={route.path} element={route.component} />
          ))}
        </Routes>
      </div>
    </Router>
  );
}
