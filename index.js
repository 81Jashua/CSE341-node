const express = require('express')
const app = express()

app.get('/', function (req, res) {
  res.send('Joshua Snyder')
})

app.listen(3000, () => {
    console.log("application listening on http://localhost:3000");
});

// app.listen(3000);