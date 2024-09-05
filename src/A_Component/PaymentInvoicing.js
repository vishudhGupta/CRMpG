import React, { useState, useEffect } from 'react';
import {
  Box,
  Tabs,
  Tab,
  Typography,
  Button,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Snackbar,
  Alert,
  TablePagination,
} from '@mui/material';
import { Add, Send } from '@mui/icons-material';

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`payment-invoicing-tabpanel-${index}`}
      aria-labelledby={`payment-invoicing-tab-${index}`}
      {...other}
    >
      {value === index && <Box sx={{ p: 3 }}>{children}</Box>}
    </div>
  );
}

const generateDummyData = (count, type) => {
  return Array.from({ length: count }, (_, index) => ({
    id: index + 1,
    tenant: `Tenant ${index + 1}`,
    amount: 500 + index * 10,
    status: type === 'payment' ? (index % 2 === 0 ? 'Received' : 'Pending') : 'Pending',
    date: `2024-09-${(index % 30) + 1}`.padStart(10, '0'),
    category: `Category ${index + 1}`,
    description: `Expense description ${index + 1}`,
  }));
};

const PaymentInvoicing = () => {
  const [tabIndex, setTabIndex] = useState(0);
  const [invoices, setInvoices] = useState(generateDummyData(30, 'invoice'));
  const [payments, setPayments] = useState(generateDummyData(30, 'payment'));
  const [expenses, setExpenses] = useState(generateDummyData(30, 'expense'));
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);
  const [openReminder, setOpenReminder] = useState(false);
  const [selectedPayment, setSelectedPayment] = useState(null);
  const [openExpense, setOpenExpense] = useState(false);
  const [newExpense, setNewExpense] = useState({
    category: '',
    description: '',
    amount: '',
    date: '',
  });
  const [snackbar, setSnackbar] = useState({
    open: false,
    message: '',
    severity: 'success',
  });

  const handleTabChange = (event, newValue) => {
    setTabIndex(newValue);
    setPage(0);
  };

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  const generateInvoice = () => {
    const newInvoice = {
      id: invoices.length + 1,
      tenant: 'New Tenant',
      amount: 500,
      status: 'Pending',
      date: new Date().toISOString().split('T')[0],
    };
    setInvoices([...invoices, newInvoice]);
    setSnackbar({
      open: true,
      message: 'Invoice generated successfully!',
      severity: 'success',
    });
  };

  const handleSendReminder = () => {
    if (selectedPayment) {
      setSnackbar({
        open: true,
        message: `Reminder sent to ${selectedPayment.tenant}`,
        severity: 'info',
      });
      setOpenReminder(false);
    }
  };

  const handleAddExpense = () => {
    const { category, description, amount, date } = newExpense;
    if (category && description && amount && date) {
      const expenseToAdd = {
        id: expenses.length + 1,
        category,
        description,
        amount: parseFloat(amount),
        date,
      };
      setExpenses([...expenses, expenseToAdd]);
      setNewExpense({ category: '', description: '', amount: '', date: '' });
      setOpenExpense(false);
      setSnackbar({
        open: true,
        message: 'Expense added successfully!',
        severity: 'success',
      });
    } else {
      setSnackbar({
        open: true,
        message: 'Please fill all expense fields.',
        severity: 'warning',
      });
    }
  };

  const handleCloseSnackbar = () => {
    setSnackbar({ ...snackbar, open: false });
  };

  return (
    <Box sx={{ width: '100%', margin: 0, padding: 0 }}>
      <Typography variant="h4" align="center" gutterBottom>
        Payment and Invoicing
      </Typography>
      <Tabs value={tabIndex} onChange={handleTabChange} centered>
        <Tab label="Invoices" />
        <Tab label="Payments" />
        <Tab label="Reminders" />
        <Tab label="Expenses" />
      </Tabs>

      {/* Invoices Tab */}
      <TabPanel value={tabIndex} index={0}>
        <Box sx={{ display: 'flex', justifyContent: 'flex-end', mb: 2 }}>
          <Button variant="contained" startIcon={<Add />} onClick={generateInvoice}>
            Generate Invoice
          </Button>
        </Box>
        <TableContainer component={Paper}>
          <img
            // src="data:image/jpeg;base64,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"
            // alt="Invoice GIF"
            style={{ display: 'block', margin: '10px auto' }}
          />
          <Table aria-label="invoices table">
            <TableHead>
              <TableRow sx={{ backgroundColor: '#f1f8e9' }}>
                <TableCell sx={{ color: '#33691e' }}>ID</TableCell>
                <TableCell sx={{ color: '#33691e' }}>Tenant</TableCell>
                <TableCell sx={{ color: '#33691e' }}>Amount ($)</TableCell>
                <TableCell sx={{ color: '#33691e' }}>Status</TableCell>
                <TableCell sx={{ color: '#33691e' }}>Date</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {invoices.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((invoice) => (
                <TableRow key={invoice.id}>
                  <TableCell>{invoice.id}</TableCell>
                  <TableCell>{invoice.tenant}</TableCell>
                  <TableCell>{invoice.amount}</TableCell>
                  <TableCell>{invoice.status}</TableCell>
                  <TableCell>{invoice.date}</TableCell>
                </TableRow>
              ))}
              {invoices.length === 0 && (
                <TableRow>
                  <TableCell colSpan={5} align="center">
                    No invoices available.
                  </TableCell>
                </TableRow>
              )}
            </TableBody>
          </Table>
          <TablePagination
            rowsPerPageOptions={[5, 10, 15]}
            component="div"
            count={invoices.length}
            rowsPerPage={rowsPerPage}
            page={page}
            onPageChange={handleChangePage}
            onRowsPerPageChange={handleChangeRowsPerPage}
          />
        </TableContainer>
      </TabPanel>

      {/* Payments Tab */}
      <TabPanel value={tabIndex} index={1}>
        <TableContainer component={Paper}>
          <img
            // src="data:image/jpeg;base64,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"
            // alt="Payment GIF"
            style={{ display: 'block', margin: '10px auto' }}
          />
          <Table aria-label="payments table">
            <TableHead>
              <TableRow sx={{ backgroundColor: '#e3f2fd' }}>
                <TableCell sx={{ color: '#1e88e5' }}>ID</TableCell>
                <TableCell sx={{ color: '#1e88e5' }}>Tenant</TableCell>
                <TableCell sx={{ color: '#1e88e5' }}>Amount ($)</TableCell>
                <TableCell sx={{ color: '#1e88e5' }}>Status</TableCell>
                <TableCell sx={{ color: '#1e88e5' }}>Date</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {payments.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((payment) => (
                <TableRow key={payment.id}>
                  <TableCell>{payment.id}</TableCell>
                  <TableCell>{payment.tenant}</TableCell>
                  <TableCell>{payment.amount}</TableCell>
                  <TableCell>{payment.status}</TableCell>
                  <TableCell>{payment.date}</TableCell>
                </TableRow>
              ))}
              {payments.length === 0 && (
                <TableRow>
                  <TableCell colSpan={5} align="center">
                    No payments available.
                  </TableCell>
                </TableRow>
              )}
            </TableBody>
          </Table>
          <TablePagination
            rowsPerPageOptions={[5, 10, 15]}
            component="div"
            count={payments.length}
            rowsPerPage={rowsPerPage}
            page={page}
            onPageChange={handleChangePage}
            onRowsPerPageChange={handleChangeRowsPerPage}
          />
        </TableContainer>
      </TabPanel>

      {/* Reminders Tab */}
      <TabPanel value={tabIndex} index={2}>
        <Typography variant="h6" gutterBottom>
          Overdue Payments
        </Typography>
        <TableContainer component={Paper}>
          <img
            // src="data:image/jpeg;base64,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"
            // alt="Reminder GIF"
            style={{ display: 'block', margin: '10px auto' }}
          />
          <Table aria-label="overdue payments table">
            <TableHead>
              <TableRow sx={{ backgroundColor: '#fff3e0' }}>
                <TableCell sx={{ color: '#f57c00' }}>ID</TableCell>
                <TableCell sx={{ color: '#f57c00' }}>Tenant</TableCell>
                <TableCell sx={{ color: '#f57c00' }}>Amount ($)</TableCell>
                <TableCell sx={{ color: '#f57c00' }}>Due Date</TableCell>
                <TableCell sx={{ color: '#f57c00' }}>Action</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {payments
                .filter((payment) => payment.status === 'Pending')
                .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                .map((payment) => (
                  <TableRow key={payment.id}>
                    <TableCell>{payment.id}</TableCell>
                    <TableCell>{payment.tenant}</TableCell>
                    <TableCell>{payment.amount}</TableCell>
                    <TableCell>{payment.date}</TableCell>
                    <TableCell>
                      <Button
                        variant="outlined"
                        startIcon={<Send />}
                        onClick={() => {
                          setSelectedPayment(payment);
                          setOpenReminder(true);
                        }}
                      >
                        Send Reminder
                      </Button>
                    </TableCell>
                  </TableRow>
                ))}
              {payments.filter((payment) => payment.status === 'Pending').length === 0 && (
                <TableRow>
                  <TableCell colSpan={5} align="center">
                    No overdue payments.
                  </TableCell>
                </TableRow>
              )}
            </TableBody>
          </Table>
          <TablePagination
            rowsPerPageOptions={[5, 10, 15]}
            component="div"
            count={payments.filter((payment) => payment.status === 'Pending').length}
            rowsPerPage={rowsPerPage}
            page={page}
            onPageChange={handleChangePage}
            onRowsPerPageChange={handleChangeRowsPerPage}
          />
        </TableContainer>

        <Dialog open={openReminder} onClose={() => setOpenReminder(false)}>
          <DialogTitle>Send Payment Reminder</DialogTitle>
          <DialogContent>
            {selectedPayment && (
              <Typography>
                Send a reminder to <strong>{selectedPayment.tenant}</strong> for the amount of{' '}
                <strong>${selectedPayment.amount}</strong>.
              </Typography>
            )}
          </DialogContent>
          <DialogActions>
            <Button onClick={() => setOpenReminder(false)}>Cancel</Button>
            <Button variant="contained" onClick={handleSendReminder}>
              Send
            </Button>
          </DialogActions>
        </Dialog>
      </TabPanel>

      {/* Expenses Tab */}
      <TabPanel value={tabIndex} index={3}>
        <Box sx={{ display: 'flex', justifyContent: 'flex-end', mb: 2 }}>
          <Button variant="contained" startIcon={<Add />} onClick={() => setOpenExpense(true)}>
            Add Expense
          </Button>
        </Box>
        <TableContainer component={Paper}>
          <img
            // src="data:image/jpeg;base64,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"
            // alt="Expense GIF"
            style={{ display: 'block', margin: '10px auto' }}
          />
          <Table aria-label="expenses table">
            <TableHead>
              <TableRow sx={{ backgroundColor: '#fbe9e7' }}>
                <TableCell sx={{ color: '#d32f2f' }}>ID</TableCell>
                <TableCell sx={{ color: '#d32f2f' }}>Category</TableCell>
                <TableCell sx={{ color: '#d32f2f' }}>Description</TableCell>
                <TableCell sx={{ color: '#d32f2f' }}>Amount ($)</TableCell>
                <TableCell sx={{ color: '#d32f2f' }}>Date</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {expenses.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((expense) => (
                <TableRow key={expense.id}>
                  <TableCell>{expense.id}</TableCell>
                  <TableCell>{expense.category}</TableCell>
                  <TableCell>{expense.description}</TableCell>
                  <TableCell>{expense.amount}</TableCell>
                  <TableCell>{expense.date}</TableCell>
                </TableRow>
              ))}
              {expenses.length === 0 && (
                <TableRow>
                  <TableCell colSpan={5} align="center">
                    No expenses available.
                  </TableCell>
                </TableRow>
              )}
            </TableBody>
          </Table>
          <TablePagination
            rowsPerPageOptions={[5, 10, 15]}
            component="div"
            count={expenses.length}
            rowsPerPage={rowsPerPage}
            page={page}
            onPageChange={handleChangePage}
            onRowsPerPageChange={handleChangeRowsPerPage}
          />
        </TableContainer>

        <Dialog open={openExpense} onClose={() => setOpenExpense(false)}>
          <DialogTitle>Add New Expense</DialogTitle>
          <DialogContent>
            <Box
              component="form"
              sx={{
                '& .MuiTextField-root': { my: 1, width: '100%' },
              }}
              noValidate
              autoComplete="off"
            >
              {/* Expense Form Fields */}
            </Box>
          </DialogContent>
          <DialogActions>
            <Button onClick={() => setOpenExpense(false)}>Cancel</Button>
            <Button variant="contained" onClick={handleAddExpense}>
              Add
            </Button>
          </DialogActions>
        </Dialog>
      </TabPanel>

      <Snackbar
        open={snackbar.open}
        autoHideDuration={3000}
        onClose={handleCloseSnackbar}
        anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
      >
        <Alert onClose={handleCloseSnackbar} severity={snackbar.severity} sx={{ width: '100%' }}>
          {snackbar.message}
        </Alert>
      </Snackbar>
    </Box>
  );
};

export default PaymentInvoicing;
