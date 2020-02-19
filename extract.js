var path = require('path');

var extractFilePath = function(url) {
    var fileName = 'index.html';
    if (url.length > 1) {
        fileName = url.substring(1);
    }
    console.log('The filename is', fileName);
    return path.resolve(__dirname, 'app', fileName);
}

module.exports = extractFilePath;