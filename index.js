const express = require('express')
const app = express();
const bodyParser = require('body-parser');
const port = 3000;

const routes =  require('./routes');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use('/', routes);

app.use((err, req, res, next) => {
  res.status(400).json({error: err.toString()});
});

app.listen(port => {
  console.log(`App is listening on port: ${port}`);
});



