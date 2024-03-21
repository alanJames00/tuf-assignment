// interacts with the judge0 API
const axios = require('axios');
const { promisify } = require('util');
const sleep = promisify(setTimeout);


async function runCode({ stdin, langId, sourceCode }) {

  const submitOptions = {
    method: 'POST',
    url: 'https://judge0-ce.p.rapidapi.com/submissions',
    params: {
      base64_encoded: 'true',
      fields: '*'
    },
    headers: {
      'content-type': 'application/json',
      'Content-Type': 'application/json',
      'X-RapidAPI-Key': process.env.JUDGE_API_KEY,
      'X-RapidAPI-Host': 'judge0-ce.p.rapidapi.com'
      },
    data: {
      language_id: langId,
      source_code: sourceCode,
      stdin: stdin,
      }
  };

  try {
	  const submitResp = await axios.request(submitOptions);
	  console.log(submitResp.data);

    const submitToken = submitResp.data.token;

    // then get the submission using token
    console.log(submitToken);
    await sleep(4000); 
    const getOptions = {
    method: 'GET',
    url: `https://judge0-ce.p.rapidapi.com/submissions/${submitToken}`,
    params: {
      base64_encoded: 'true',
      fields: '*'
    },
    headers: {
      'X-RapidAPI-Key': '4aa3d62f38msh26169a9b3653ca1p16d1f9jsn9b81366aeea9',
      'X-RapidAPI-Host': 'judge0-ce.p.rapidapi.com'
    }
  };

    const getResp = await axios.request(getOptions);
	  console.log(getResp.data);
    return getResp.data;

  } catch (error) {
	  console.error(error);
  }
}


module.exports = {
  runCode
}
