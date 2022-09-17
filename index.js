const express = require('express');
const app = express();
const routes = require("./routes/index");

app.use(routes);

app.listen(3000, () => {
    console.log("application listening on http://localhost:3000");
});

// app.listen(3000);