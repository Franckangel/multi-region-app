const express = require('express');
const app = express();
const PORT = process.env.PORT || 8080;
const REGION = process.env.AWS_REGION || 'local';

app.get('/', (req, res) => {
  res.send(`Hello from ${REGION}!`);
});

app.listen(PORT, () => {
  console.log(`Region: ${REGION}`);
  console.log(`Server listening on port ${PORT}`);
});
