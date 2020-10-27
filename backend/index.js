const express = require('express');
const app = express();
var cors = require('cors')

const { PORT } = require('./src/utils/conts');

const router = require('./src/routes')

app.use(express.json());
app.use(router);
app.use(cors());


app.listen(PORT, () =>
  console.log(`The server is on in http://localhost:${PORT}`)
);