const express = require('express');
const axios = require('axios');
const router = express.Router();

router.get('/api/posts', async (req, res) => {
  try {
    const res = await axios.get('https://jsonplaceholder.typicode.com/posts');
    const data = res.data;
    res.json(data);
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

module.exports = router;
