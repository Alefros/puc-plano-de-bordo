const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const port = process.env.port || 3000;

const routes = require('./routers/routes')

app.use(bodyParser.json());
app.use('/', routes);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});