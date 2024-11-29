const express = require('express');
const router = express.Router();
const { shortenUrl, redirectUrl, getStats, getAllStats } = require('../controllers/urlController');

// Route for shortening URLs
router.post('/shorten', shortenUrl);

// Route for redirecting to original URL
router.get('/:shortUrl', redirectUrl);

// Route to get stats for a specific shortened URL
router.get('/:shortUrl/stats', getStats);

// **New** Route to get a list of all URLs and their stats (the endpoint you're trying to access)
router.get('/', async (req, res) => {
  try {
    // Fetch all URL mappings from your data source (e.g., database or in-memory store)
    const urlMappings = await getAllUrlMappings();
    res.json(urlMappings);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Unable to fetch URLs' });
  }
});

module.exports = router;
