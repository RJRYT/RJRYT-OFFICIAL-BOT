const express = require('express');

const app = express();

app.get('/', (req, res) => {
  res.send('your bot is ready')
});

app.listen(3000, () => {
  console.log('THE BOT IS STARTED');
});
