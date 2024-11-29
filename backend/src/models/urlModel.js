const database = new Map();

exports.saveUrlMapping = (shortUrl, longUrl) => {
  database.set(shortUrl, { longUrl, accessCount: 0 });
};

exports.getUrlMapping = (shortUrl) => database.get(shortUrl);

exports.incrementAccessCount = (shortUrl) => {
  const data = database.get(shortUrl);
  if (data) data.accessCount += 1;
};

exports.getAccessCount = (shortUrl) => {
  const data = database.get(shortUrl);
  return data ? data.accessCount : null;
};
