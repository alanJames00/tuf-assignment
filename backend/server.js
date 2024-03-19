const express = require('express');

const apiRouter = require('./api/routes');

// express setup
const app = express();
const PORT = 3001;

// middleware config
app.use(express.json());

// Router mounts
app.use('/api', apiRouter);



app.listen(PORT, () => {
  console.log(`server listening on ${PORT}`);
})
