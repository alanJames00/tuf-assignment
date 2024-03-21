const express = require('express');
const apiRouter = express.Router();
const judge = require('./judge');
const base64 = require('base-64');
const pool = require('./db');
const redis = require('./redis');
// List all the submissions
apiRouter.get('/submissions', async (req, res) => {

  try {

    // check it key named submission exists in redis
    const redisKey = 'submissions';
    const redisResult = await redis.get(redisKey);
    if (redisResult == null) {
      // set the key in redis
      console.log('reading from db');
      const [result, fields] = await pool.promise().query('SELECT * FROM submission');

      await redis.set(redisKey, JSON.stringify(result));
      res.json(result);
    }

    else {
      // return the value from redis
      console.log('reading from cache');
      return res.json(JSON.parse(redisResult));
    }


  }
  catch (e) {
    console.log(e);
    res.status(500).json(e);
  }
});


// fetch submission by id
apiRouter.get('/submission/:id', async (req, res) => {

  try {

  }
  catch (e) {
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
  catch (e) {
    console.log(e);
    res.status(500).json(e);
  }
})


apiRouter.post('/submit', async (req, res) => {

  try {
    const redisKey = 'submissions';
    // run the code, insert result to db and return the result
    //
    const { username, language, code, stdin } = req.body;
    console.log(req.body);

    const result = await judge.runCode({
      stdin: stdin,
      langId: language,
      sourceCode: code,
    });

    let outputDecoded = '';
    const stdinDecoded = stdin;
    const sourceCodeDecoded = code;



    // check for compile console.error
    // check for compile time error
    console.log(result);
    if (result.compile_output != null) {
      const compileError = result.compile_output;
      outputDecoded = compileError;
    }

    else {

      const stdoutEncoded = result.stdout;
      outputDecoded = stdoutEncoded
    }

    // fix the sql query
    const sql = `INSERT INTO submission (username, language, stdin, sourcecode, stdout) VALUES (?, ?, ?, ?, ?)`;
    const values = [username, result.language.name, stdinDecoded, code, outputDecoded];
    const [result1, fields] = await pool.promise().query(sql, values);

    // clear the cache
    await redis.del(redisKey);
    res.json(result);
  }
  catch (e) {
    console.log(e);
    res.status(500).json(e);
  }
})


apiRouter.post('testRun', (req, res) => {

  res.json({
    stdout: 'SGVsbG8gdw==\n'
  })
})

module.exports = apiRouter;
