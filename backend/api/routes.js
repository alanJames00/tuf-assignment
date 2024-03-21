const express = require('express');
const apiRouter = express.Router();
const pool = require('./db');
const judge = require('./judge');

// List all the submissions
apiRouter.get('/submissions', async (req, res) => {

  try {
    const [result, fields] = await pool.promise().query('SELECT * FROM submission');
    console.log(fields);
  }
  catch(e) {
    console.log(e);
    res.status(500).json(e);
  }
});


// fetch submission by id
apiRouter.get('/submission/:id', async (req, res) => {

  try {

  }
  catch(e) {
    console.log(e);
    res.status(500).json(e);
  }
});


apiRouter.post('/run', async (req, res) => {
  
  try {
    // run the code and return the result
    //
    const { username, language, code, stdin } = req.body;
    console.log(req.body);

    const result = await judge.runCode({
      stdin: stdin,
      langId: language,
      sourceCode: code,
    });

    res.json(result);
  }
  catch(e) {
    console.log(e);
    res.status(500).json(e);
  }
})

// execute and submit the code
apiRouter.post('/submit', (req, res) => {

  // run the code, save insert result to db and return result to user
  try {
    const { username, language, code, stdin } = req.body;
    console.log(req.body);

  }
  catch(e) {
    console.log(e);
    res.status(500).json(e);
  }
});

module.exports = apiRouter;
