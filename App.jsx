import { useState } from 'react';
import { Box, CssBaseline, Grid, Typography, Button } from '@mui/material';
import { Form } from './components/Form';

function App() {
  const [gemWalletConnected, setGemWalletConnected] = useState(false);

  // Function to handle connecting GemWallet
  const handleConnectGemWallet = () => {
    // Call GemWallet SDK to authenticate user and connect wallet
    // Example: gemWallet.connect().then(() => setGemWalletConnected(true));
    // This is a placeholder, you should replace it with actual GemWallet SDK calls
    setGemWalletConnected(true); // For demonstration purpose only
  };

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        minHeight: '100vh',
        margin: '3rem'
      }}
    >
      <CssBaseline />
      {/* Render Connect GemWallet button at the top */}
      {!gemWalletConnected && (
        <Button variant="contained" color="primary" onClick={handleConnectGemWallet} sx={{ marginBottom: '1rem' }}>
          Connect GemWallet
        </Button>
      )}
      <Typography variant="h4" component="h1" color="primary" gutterBottom>
        WITTY SCOOTER RENTAL
      </Typography>
      <Typography variant="h5" component="h2" gutterBottom>
        Rent Scooter Today
      </Typography>
      <Typography variant="subtitle1" component="div" gutterBottom>
        Our service is all about Mobility and Affordability. Where every users safety is our top priority.<br/>
        This is clean energy innovation and environmentally friendly. Powered by blockchain & XRP Ledger.<br/>
        Come join us to redifine intra-city movement with comfort and convenience. Rent a Scooter Today.
      </Typography>
      <Grid container spacing={2}>
        <Grid item xs={6}>
          <Form />
        </Grid>
        <Grid item xs={6}>
          <img
            src="/scooter01.png"
            alt="scooter"
            loading="lazy"
            style={{
              maxWidth: '425px'
            }}
          />
        </Grid>
        <Grid item xs={6}>
          <img
            src="/scooter02.png"
            alt="scooter"
            loading="lazy"
            style={{
              maxWidth: '425px'
            }}
          />
        </Grid>
        <Grid item xs={6}>
          <img
            src="/scooter03.png"
            alt="scooter"
            loading="lazy"
            style={{
              maxWidth: '425px'
            }}
          />
        </Grid>
      </Grid>
    </Box>
  );
}

export default App;
