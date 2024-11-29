// const { createShortUrl, findOriginalUrl, incrementAccessCount, getAccessCount } = require('../services');
const { isValidUrl } = require('../utils/validateUrl');

const { createShortUrl, findOriginalUrl, incrementAccessCount, getAccessCount, getAllUrlMappings } = require('../services');

exports.shortenUrl = async (req, res) => {
  const { longUrl } = req.body;

  if (!isValidUrl(longUrl)) {
    return res.status(400).json({ error: 'Invalid URL format' });
  }

  const shortUrl = await createShortUrl(longUrl);
  res.status(201).json({ longUrl, shortUrl });
};

exports.redirectUrl = async (req, res) => {
  const { shortUrl } = req.params;
  const originalUrl = await findOriginalUrl(shortUrl);

  if (!originalUrl) {
    return res.status(404).json({ error: 'Short URL not found' });
  }

  await incrementAccessCount(shortUrl);
  res.redirect(originalUrl);
};

exports.getStats = async (req, res) => {
  const { shortUrl } = req.params;
  const accessCount = await getAccessCount(shortUrl);

  if (accessCount === null) {
    return res.status(404).json({ error: 'Short URL not found' });
  }

  res.json({ shortUrl, accessCount });
};

// New function to get all URL mappings
exports.getAllStats = async (req, res) => {
  try {
    const urlMappings = await getAllUrlMappings();
    res.json(urlMappings); // Send the URL mappings as JSON response
  } catch (error) {
    res.status(500).json({ error: 'Internal server error' });
  }
};