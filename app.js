const app = require('express')()

app.get('/', (req, res) => {
  res.send("Hello from New Appsody!");
});
 
module.exports.app = app;
