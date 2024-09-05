import React, { useState } from 'react';
import {
  Container,
  Typography,
  Paper,
  Grid,
  TextField,
  Button,
  List,
  ListItem,
  ListItemText,
  ListSubheader,
  IconButton,
  Input
} from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import DeleteIcon from '@mui/icons-material/Delete';

const LegalCompliance = () => {
  // State variables for lease agreements
  const [agreements, setAgreements] = useState([]);
  const [newAgreement, setNewAgreement] = useState('');
  const [agreementFile, setAgreementFile] = useState(null);

  // State variables for compliance tracking
  const [compliances, setCompliances] = useState([]);
  const [newCompliance, setNewCompliance] = useState('');
  const [complianceFile, setComplianceFile] = useState(null);

  // State variables for document management
  const [documents, setDocuments] = useState([]);
  const [newDocument, setNewDocument] = useState('');
  const [documentFile, setDocumentFile] = useState(null);

  // Handlers for lease agreements
  const handleAddAgreement = () => {
    if (newAgreement && agreementFile) {
      setAgreements([...agreements, { name: newAgreement, file: agreementFile }]);
      setNewAgreement('');
      setAgreementFile(null);
    } else {
      alert("Please provide both the agreement name and the file.");
    }
  };

  const handleDeleteAgreement = (index) => {
    setAgreements(agreements.filter((_, i) => i !== index));
  };

  // Handlers for compliance tracking
  const handleAddCompliance = () => {
    if (newCompliance && complianceFile) {
      setCompliances([...compliances, { name: newCompliance, file: complianceFile }]);
      setNewCompliance('');
      setComplianceFile(null);
    } else {
      alert("Please provide both the compliance name and the file.");
    }
  };

  const handleDeleteCompliance = (index) => {
    setCompliances(compliances.filter((_, i) => i !== index));
  };

  // Handlers for document management
  const handleAddDocument = () => {
    if (newDocument && documentFile) {
      setDocuments([...documents, { name: newDocument, file: documentFile }]);
      setNewDocument('');
      setDocumentFile(null);
    } else {
      alert("Please provide both the document name and the file.");
    }
  };

  const handleDeleteDocument = (index) => {
    setDocuments(documents.filter((_, i) => i !== index));
  };

  const handleFileUpload = (e, setFile) => {
    setFile(e.target.files[0]);
  };

  return (
    <Container sx={{ marginTop: 4 }}>
      <Typography variant="h4" sx={{ marginBottom: 2 }}>
        Legal and Compliance Management
      </Typography>

      {/* Lease Agreements Section */}
      <Paper sx={{ padding: 2, marginBottom: 2 }}>
        <Typography variant="h6">Lease Agreements</Typography>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <TextField
              label="New Agreement"
              variant="outlined"
              fullWidth
              value={newAgreement}
              onChange={(e) => setNewAgreement(e.target.value)}
            />
          </Grid>
          <Grid item xs={12}>
            <Input
              type="file"
              onChange={(e) => handleFileUpload(e, setAgreementFile)}
              inputProps={{ accept: '.pdf,.doc,.docx' }}
            />
          </Grid>
          <Grid item xs={12}>
            <Button
              variant="contained"
              color="primary"
              startIcon={<AddIcon />}
              onClick={handleAddAgreement}
              sx={{ marginTop: 2 }}
            >
              Add Agreement
            </Button>
          </Grid>
          <Grid item xs={12}>
            <List subheader={<ListSubheader>Stored Agreements</ListSubheader>} sx={{ maxHeight: 300, overflow: 'auto' }}>
              {agreements.map((agreement, index) => (
                <ListItem key={index}>
                  <ListItemText
                    primary={agreement.name}
                    secondary={agreement.file ? agreement.file.name : ''}
                  />
                  <IconButton edge="end" aria-label="delete" onClick={() => handleDeleteAgreement(index)}>
                    <DeleteIcon />
                  </IconButton>
                </ListItem>
              ))}
            </List>
          </Grid>
        </Grid>
      </Paper>

      {/* Compliance Tracking Section */}
      <Paper sx={{ padding: 2, marginBottom: 2 }}>
        <Typography variant="h6">Compliance Tracking</Typography>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <TextField
              label="New Compliance"
              variant="outlined"
              fullWidth
              value={newCompliance}
              onChange={(e) => setNewCompliance(e.target.value)}
            />
          </Grid>
          <Grid item xs={12}>
            <Input
              type="file"
              onChange={(e) => handleFileUpload(e, setComplianceFile)}
              inputProps={{ accept: '.pdf,.doc,.docx' }}
            />
          </Grid>
          <Grid item xs={12}>
            <Button
              variant="contained"
              color="primary"
              startIcon={<AddIcon />}
              onClick={handleAddCompliance}
              sx={{ marginTop: 2 }}
            >
              Add Compliance
            </Button>
          </Grid>
          <Grid item xs={12}>
            <List subheader={<ListSubheader>Tracked Compliances</ListSubheader>} sx={{ maxHeight: 300, overflow: 'auto' }}>
              {compliances.map((compliance, index) => (
                <ListItem key={index}>
                  <ListItemText
                    primary={compliance.name}
                    secondary={compliance.file ? compliance.file.name : ''}
                  />
                  <IconButton edge="end" aria-label="delete" onClick={() => handleDeleteCompliance(index)}>
                    <DeleteIcon />
                  </IconButton>
                </ListItem>
              ))}
            </List>
          </Grid>
        </Grid>
      </Paper>

      {/* Document Management Section */}
      <Paper sx={{ padding: 2, marginBottom: 2 }}>
        <Typography variant="h6">Document Management</Typography>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <TextField
              label="New Document"
              variant="outlined"
              fullWidth
              value={newDocument}
              onChange={(e) => setNewDocument(e.target.value)}
            />
          </Grid>
          <Grid item xs={12}>
            <Input
              type="file"
              onChange={(e) => handleFileUpload(e, setDocumentFile)}
              inputProps={{ accept: '.pdf,.doc,.docx' }}
            />
          </Grid>
          <Grid item xs={12}>
            <Button
              variant="contained"
              color="primary"
              startIcon={<AddIcon />}
              onClick={handleAddDocument}
              sx={{ marginTop: 2 }}
            >
              Add Document
            </Button>
          </Grid>
          <Grid item xs={12}>
            <List subheader={<ListSubheader>Stored Documents</ListSubheader>} sx={{ maxHeight: 300, overflow: 'auto' }}>
              {documents.map((document, index) => (
                <ListItem key={index}>
                  <ListItemText
                    primary={document.name}
                    secondary={document.file ? document.file.name : ''}
                  />
                  <IconButton edge="end" aria-label="delete" onClick={() => handleDeleteDocument(index)}>
                    <DeleteIcon />
                  </IconButton>
                </ListItem>
              ))}
            </List>
          </Grid>
        </Grid>
      </Paper>
    </Container>
  );
};

export default LegalCompliance;
