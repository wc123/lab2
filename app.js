const app = require('express')()

app.get('/', (req, res) => {
  res.send("Hello from WW Appsody!");
});
 
module.exports.app = app;
