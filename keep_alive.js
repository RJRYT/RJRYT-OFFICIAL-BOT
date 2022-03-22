const express = require('express');

const app = express();

app.get('/', (req, res) => {
  res.setHeader('Content-Type', 'text/html');
  res.send(`<html><head> <link href="https://fonts.googleapis.com/css?family=Roboto Condensed" rel="stylesheet"> <style>body{font-family: "Roboto Condensed"; font-size: 21px; color: white; background-color: #00FFFF; margin-left: 5%; margin-top: 2%;}a{color: #5865F2}a:hover{color: #818bff}h1{font-size: 55px;}</style></head><body> <h1>CODROID DEVS</h1> </p></a><i>A HIGHLY DEVELOPED BOTS <a href="https://discord.gg/wCFtqkNK48"> click here </a>to join Codroid</i></p> <h1>OUR WORKS </h1> <b><a>SAMP DEVELOPMENT | BOT DEVELOPMENT</a></b><br/><br/> <a href="https://discord.gg/8fYUFxMtAq"> </a><br/><br/></a>`);
  res.end();
});

app.listen(3000, () => {
  console.log('THE BOT IS STARTED');
});
