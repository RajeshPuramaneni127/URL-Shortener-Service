exports.isValidUrl = (url) => {
    const urlRegex = /^(https?:\/\/)?([a-zA-Z0-9.-]+)(:[0-9]+)?(\/.*)?$/;
    return urlRegex.test(url);
  };
  