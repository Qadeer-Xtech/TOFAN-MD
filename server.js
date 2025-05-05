const express = require('express');
const app = express();
const PORT = process.env.PORT || 5000;

app.get('/', (req, res) => {
  res.send('TOFAN-MD WhatsApp Bot is Running!');
});

app.listen(PORT, () => {
  console.log(`Web Server running on port ${PORT}`);
});
