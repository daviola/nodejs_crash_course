const path = require('path');

// complete path
console.log(__filename);
// Base filename
console.log(path.basename(__filename));

// Directory name
console.log(path.dirname(__filename))

// File extention
console.log(path.extname(__filename))