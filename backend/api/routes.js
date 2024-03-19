const express = require('express');
const apiRouter = express.Router();

apiRouter.post('/t', (req, res) => {
  console.log(req.body);
})

module.exports = apiRouter;
