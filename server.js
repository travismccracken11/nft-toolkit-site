const express = require('express');
const path = require('path');
const app = express();
const PORT = process.env.PORT || 3000;

// Serve static files from the public directory
app.use(express.static(path.join(__dirname)));

// Serve specific HTML files based on the route
app.get('/airdrop-list-verifier', (req, res) => {
  res.sendFile(path.join(__dirname, 'airdrop-list-verifier', 'index.html'));
});

app.get('/metadata-validator', (req, res) => {
  res.sendFile(path.join(__dirname, 'metadata-validator', 'index.html'));
});

app.get('/nft-rarity-inspector', (req, res) => {
  res.sendFile(path.join(__dirname, 'nft-rarity-inspector', 'index.html'));
});

app.get('/token-holders-list-builder', (req, res) => {
  res.sendFile(path.join(__dirname, 'token-holders-list-builder', 'index.html'));
});

app.get('/nft-risk-calculator', (req, res) => {
  res.sendFile(path.join(__dirname, 'nft-risk-calculator', 'index.html'));
});

app.get('/snapshot-tool', (req, res) => {
  res.sendFile(path.join(__dirname, 'snapshot-tool', 'index.html'));
});

// Catch all other routes and serve the main index.html for the homepage
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
