const express = require('express');
const cors = require('cors');
const trainsRouter = require('./routes/trainsRoutes');

const app = express();
const port = process.env.PORT || 7001;

app.use(express.json());
app.use(cors());

app.use('/stations', trainsRouter);

app.get('/', (req, res) => {
  res.send('Hello World');
});

app.all('*', (req, res) => {
  res.send('This route does not exist');
});

app.listen(port, () => {
  console.log(`Example app listening on PORT ${port}`);
});
