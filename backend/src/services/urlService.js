const { saveUrlMapping, getUrlMapping, incrementAccessCount, getAccessCount } = require('../models');
const crypto = require('crypto');

exports.createShortUrl = (longUrl) => {
  const shortUrl = crypto.createHash('md5').update(longUrl).digest('hex').substring(0, 6);

  if (!getUrlMapping(shortUrl)) {
    saveUrlMapping(shortUrl, longUrl);
  }

  return shortUrl;
};

exports.findOriginalUrl = (shortUrl) => {
  const data = getUrlMapping(shortUrl);
  return data ? data.longUrl : null;
};

exports.incrementAccessCount = incrementAccessCount;

exports.getAccessCount = getAccessCount;


exports.getAllUrlMappings = () => {
  const allMappings = [];
  database.forEach((value, key) => {
    allMappings.push({
      shortUrl: key,
      longUrl: value.longUrl,
      accessCount: value.accessCount,
    });
  });
  return allMappings;
};