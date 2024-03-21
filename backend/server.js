const express = require('express');
const cors = require('cors')
const apiRouter = require('./api/routes');


// express setup
const app = express();
const PORT = 3001;

// middleware config
app.use(cors())
app.use(express.json());

// Router mounts
app.use('/api', apiRouter);



app.listen(PORT, () => {
  console.log(`server listening on ${PORT}`);
})
