import React, { useState } from 'react';
import {
    Container,
    Typography,
    TextField,
    Button,
    Paper,
    Grid,
    List,
    ListItem,
    ListItemText,
    ListItemSecondaryAction,
    IconButton,
    Divider,
    Dialog,
    DialogTitle,
    DialogContent,
    DialogActions,
    CircularProgress,
    Box,
} from '@mui/material';
import FeedbackIcon from '@mui/icons-material/Feedback';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import AddIcon from '@mui/icons-material/Add';

const ComplaintManagement = () => {
    const [complaints, setComplaints] = useState([]);
    const [newComplaint, setNewComplaint] = useState('');
    const [selectedComplaint, setSelectedComplaint] = useState(null);
    const [isResolving, setIsResolving] = useState(false);
    const [feedback, setFeedback] = useState('');

    const handleAddComplaint = () => {
        if (newComplaint.trim() === '') return;
        setComplaints([...complaints, { id: Date.now(), text: newComplaint, resolved: false, feedback: '' }]);
        setNewComplaint('');
    };

    const handleResolveComplaint = (complaint) => {
        setSelectedComplaint(complaint);
        setIsResolving(true);
    };

    const handleFeedbackSubmit = () => {
        setComplaints(
            complaints.map((complaint) =>
                complaint.id === selectedComplaint.id
                    ? { ...complaint, resolved: true, feedback: feedback }
                    : complaint
            )
        );
        setIsResolving(false);
        setFeedback('');
        setSelectedComplaint(null);
    };

    return (
        <Box sx={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
            <Container sx={{ mt: 4 }}>
                <Typography variant="h4" gutterBottom>
                    Complaint and Feedback Management
                </Typography>
                <Paper elevation={3} style={{ padding: 20 }}>
                    <Grid container spacing={2} alignItems="center">
                        <Grid item xs={12} sm={9}>
                            <TextField
                                fullWidth
                                label="New Complaint"
                                value={newComplaint}
                                onChange={(e) => setNewComplaint(e.target.value)}
                            />
                        </Grid>
                        <Grid item xs={12} sm={3}>
                            <Button
                                variant="contained"
                                color="primary"
                                fullWidth
                                startIcon={<AddIcon />}
                                onClick={handleAddComplaint}
                            >
                                Add Complaint
                            </Button>
                        </Grid>
                    </Grid>
                </Paper>

                <List>
                    {complaints.map((complaint) => (
                        <React.Fragment key={complaint.id}>
                            <ListItem>
                                <ListItemText
                                    primary={complaint.text}
                                    secondary={
                                        complaint.resolved
                                            ? `Resolved - Feedback: ${complaint.feedback}`
                                            : 'Pending'
                                    }
                                />
                                <ListItemSecondaryAction>
                                    {!complaint.resolved && (
                                        <IconButton
                                            edge="end"
                                            aria-label="resolve"
                                            onClick={() => handleResolveComplaint(complaint)}
                                        >
                                            <FeedbackIcon color="primary" />
                                        </IconButton>
                                    )}
                                    {complaint.resolved && (
                                        <CheckCircleIcon color="success" />
                                    )}
                                </ListItemSecondaryAction>
                            </ListItem>
                            <Divider />
                        </React.Fragment>
                    ))}
                </List>
            </Container>

            <Dialog open={isResolving} onClose={() => setIsResolving(false)}>
                <DialogTitle>Resolve Complaint</DialogTitle>
                <DialogContent>
                    <Typography variant="body1">
                        Complaint: {selectedComplaint && selectedComplaint.text}
                    </Typography>
                    <TextField
                        fullWidth
                        label="Feedback"
                        value={feedback}
                        onChange={(e) => setFeedback(e.target.value)}
                        multiline
                        rows={4}
                        style={{ marginTop: 16 }}
                    />
                </DialogContent>
                <DialogActions>
                    <Button onClick={() => setIsResolving(false)} color="secondary">
                        Cancel
                    </Button>
                    <Button
                        variant="contained"
                        color="primary"
                        onClick={handleFeedbackSubmit}
                        startIcon={<CheckCircleIcon />}
                    >
                        Submit Feedback
                    </Button>
                </DialogActions>
            </Dialog>
        </Box>
    );
};

export default ComplaintManagement;
